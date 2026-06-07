import statsData from "./stats-content.json";
import { StatsContent } from "@repo/ui/design-systems/components/stats/stats-content.ts";

export function getStatsContent(): StatsContent {
    return statsData as StatsContent;
}
