import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const appRoot = fileURLToPath(new URL("../", import.meta.url));
const env = {};
const modules = new Map();

// Load the actual content helpers with an isolated environment, without a Next server.
function load(relativePath) {
    const filename = path.resolve(appRoot, relativePath);
    if (modules.has(filename)) return modules.get(filename);
    const exports = {};
    modules.set(filename, exports);
    const localRequire = createRequire(filename);
    const code = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2022,
            esModuleInterop: true,
        },
    }).outputText;
    vm.runInNewContext(
        code,
        {
            exports,
            URL,
            process: { env },
            require(specifier) {
                const source = path.resolve(
                    path.dirname(filename),
                    `${specifier}.ts`,
                );
                return specifier.startsWith(".") && fs.existsSync(source)
                    ? load(source)
                    : localRequire(specifier);
            },
        },
        { filename },
    );
    return exports;
}

const { getMarketConfig, getMarketAlternates } = load(
    "app/content/markets/config.ts",
);
const { getFooterContent, getSecondaryFooterContent } = load(
    "app/content/footer-section/getFooterContent.ts",
);
const { getServiceBySlug } = load("app/content/services/servicesContent.ts");

test("Canada remains the default and unsupported markets fail", () => {
    delete env.SITE_MARKET;
    assert.equal(getMarketConfig().market, "ca");
    assert.throws(() => getMarketConfig("unknown"), /SITE_MARKET/);
    assert.throws(() => getMarketConfig(""), /SITE_MARKET/);
});

test("both markets use the supplied number across home, service, and WhatsApp content", () => {
    for (const [market, number, digits, currency] of [
        ["ca", "+1 437-448-3374", "14374483374", "CAD"],
        ["pk", "+92 336 3444189", "923363444189", "PKR"],
        ["ca", "+1 437-448-3374", "14374483374", "CAD"],
    ]) {
        env.SITE_MARKET = market;
        assert.equal(getFooterContent().phoneNumber, number);
        assert.equal(getSecondaryFooterContent().phoneNumber, number);
        assert.equal(getMarketConfig().whatsappPhone, digits);
        assert.equal(getMarketConfig().currency, currency);
        const files = fs.readdirSync(
            path.join(appRoot, "app/content/services"),
        );
        for (const file of files.filter(
            (file) => file.endsWith(".json") && file !== "servicesContent.json",
        )) {
            assert.equal(
                getServiceBySlug(file.slice(0, -5)).finalCta.secondaryCta.href,
                `https://wa.me/${digits}`,
            );
        }
    }
});

test("regional URLs keep the same page path on each domain", () => {
    for (const market of ["ca", "pk"]) {
        env.SITE_MARKET = market;
        for (const page of ["/", "/services/live-queue"]) {
            const metadata = getMarketAlternates(page);
            assert.equal(
                metadata.canonical,
                `https://${market === "pk" ? "techavenue.pk" : "techavenue.pro"}${page}`,
            );
            assert.equal(
                metadata.languages["en-CA"],
                `https://techavenue.pro${page}`,
            );
            assert.equal(
                metadata.languages["en-PK"],
                `https://techavenue.pk${page}`,
            );
        }
    }
});

test("market overrides preserve the shared JSON content", () => {
    const slug = "live-queue";
    const shared = JSON.parse(
        fs.readFileSync(
            path.join(appRoot, `app/content/services/${slug}.json`),
            "utf8",
        ),
    );
    const original = JSON.stringify(shared);
    for (const market of ["ca", "pk"]) {
        env.SITE_MARKET = market;
        const service = getServiceBySlug(slug);
        assert.equal(JSON.stringify(service.hero), JSON.stringify(shared.hero));
        assert.equal(service.finalCta.title, shared.finalCta.title);
        assert.equal(getFooterContent().emailAddress, "contact@techavenue.pro");
    }
    const require = createRequire(path.join(appRoot, "package.json"));
    assert.equal(
        JSON.stringify(require(`./app/content/services/${slug}.json`)),
        original,
    );
});
