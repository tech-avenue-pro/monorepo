import { ServicesContent } from "../../HomeView/ServiceSection";
import servicesData from "./servicesContent.json";

export function getServices(): ServicesContent {
    return servicesData as ServicesContent;
}
