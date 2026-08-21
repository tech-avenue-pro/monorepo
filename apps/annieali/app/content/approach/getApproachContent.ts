import approachData from "./approach-content.json";
import { HowItWorks } from "@repo/ui/design-systems/components/how-it-works/HowItWorks";

export function getApproachContent(): HowItWorks {
    return approachData as HowItWorks;
}
