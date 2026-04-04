import { HowItWorks } from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import howItWorksData from "./how-it-works.json";

export function getHowItWorksContent(): HowItWorks {
    return howItWorksData as HowItWorks;
}
