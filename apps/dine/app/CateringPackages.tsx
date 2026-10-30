import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion, DSStagger } from "@repo/ui/design-systems/DSMotion";
import { DSLinkButton, DSButtonVariant } from "@repo/ui/design-systems/DSButton";

const cateringMenus = [
    {
        name: "Menu 1",
        price: "$12.99",
        unit: "per person · min. 25 guests",
        items: [
            "Mattar Polao",
            "Chicken Karahi",
            "Tandoori Naan",
            "Chana Masala",
            "Salad & Raita",
            "Dessert: Zarda",
        ],
    },
    {
        name: "Menu 2",
        price: "$13.99",
        unit: "per person · min. 25 guests",
        items: [
            "Chicken Biryani or Pulao (+$1 Veal)",
            "Chicken Karahi (+$1 Veal)",
            "Chana Masala or Mixed Vegetables",
            "Tandoori Naan",
            "Salad & Raita",
            "Dessert: Zarda",
        ],
    },
    {
        name: "Menu 3",
        price: "$15.99",
        unit: "per person · min. 25 guests",
        items: [
            "Chicken Biryani or Pulao (+$1 Veal)",
            "Chicken Karahi (+$1 Veal)",
            "Chana Masala or Aloo Palak",
            "Tandoori Chicken (2 pcs/person)",
            "Beef or Chicken Seekh Kabab (+50¢ Beef)",
            "Tandoori Naan, Garden Salad & Raita",
            "Dessert: Kheer, Zarda or Shahi Tukra (+50¢)",
        ],
        featured: true,
    },
    {
        name: "Menu 4",
        price: "$17.99",
        unit: "per person · min. 25 guests",
        items: [
            "Chicken or Veal Biryani / Pulao",
            "Karahi Gosht (Ontario lamb)",
            "Lahori Cholay or Vegetables",
            "Seekh Kabab, Beef or Chicken (+50¢ Beef)",
            "Tandoori Chicken (2 pcs/person)",
            "Tandoori Naan, Garden Salad & Raita",
            "Dessert: Kheer, Zarda or Shahi Tukra (+50¢)",
        ],
    },
];

export default function CateringPackages() {
    return (
        <div>
            <DSMotion variant="fade-up" className="text-center mb-12">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largerTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="mb-4"
                >
                    Catering Packages
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.secondary}
                    className="max-w-2xl mx-auto text-left"
                >
                    Perfect for weddings, corporate events and large
                    gatherings — minimum 25 guests. Have something specific in
                    mind? We&apos;ll build a custom menu and quote for your
                    event.
                </DSText>
            </DSMotion>

            <DSStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                {cateringMenus.map((menu) => (
                    <DSMotion
                        key={menu.name}
                        variant="fade-up"
                        className={`relative rounded-3xl border p-6 flex flex-col ${
                            menu.featured
                                ? "border-[var(--primary)] bg-[var(--primary-lighter)] shadow-lg"
                                : "border-[var(--primary)] border-opacity-10 bg-white"
                        }`}
                    >
                        {menu.featured && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-xs font-semibold px-4 py-1 rounded-full">
                                Most Popular
                            </span>
                        )}
                        <DSText
                            as="h3"
                            variant={DSTextVariant.title2}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-1"
                        >
                            {menu.name}
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.footnote}
                            color={DSTextColor.tertiary}
                            className="mb-4"
                        >
                            {menu.unit}
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.title1}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-6"
                        >
                            {menu.price}
                        </DSText>
                        <ul className="space-y-2 flex-1 mb-6">
                            {menu.items.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--primary)] shrink-0" />
                                    <DSText
                                        as="span"
                                        variant={DSTextVariant.caption}
                                        color={DSTextColor.secondary}
                                    >
                                        {item}
                                    </DSText>
                                </li>
                            ))}
                        </ul>
                        <DSLinkButton
                            variant={
                                menu.featured
                                    ? DSButtonVariant.primary
                                    : DSButtonVariant.outlined
                            }
                            href="https://wa.me/14160000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center"
                        >
                            Book via WhatsApp
                        </DSLinkButton>
                    </DSMotion>
                ))}
            </DSStagger>
        </div>
    );
}
