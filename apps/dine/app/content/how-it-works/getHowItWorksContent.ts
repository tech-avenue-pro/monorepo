import howItWorksData from "./how-it-works.json";
import { HowItWorks } from "@repo/ui/design-systems/components/how-it-works/HowItWorks";

export function getHowItWorksContent(): HowItWorks {
    return howItWorksData as HowItWorks;
}
