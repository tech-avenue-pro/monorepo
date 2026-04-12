import React from "react";
import { HowWeHelpContent } from "./how-we-help-content";
import { DSMotion } from "../../DSMotion";
import {
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { DSText } from "../../DSText";
import ServiceCardTopNumber from "../services/service-card-top-number/ServiceCardTopNumber";
import ServceCardTopNumberCollection from "../services/service-card-top-number/ServceCardTopNumberCollection";
import SectionTitleView from "../section-title/standard/SectionTitleView";

export default function HowWeHelpView(howWeHelp: HowWeHelpContent) {
    return (
        <div className="">
            <SectionTitleView title={howWeHelp.title} />

            <ServceCardTopNumberCollection collection={howWeHelp.steps} />
        </div>
    );
}
