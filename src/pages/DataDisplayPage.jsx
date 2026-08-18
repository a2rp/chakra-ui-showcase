import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import AvatarShowcase from "../components/data-display/AvatarShowcase";
import BadgeShowcase from "../components/data-display/BadgeShowcase";
import CardShowcase from "../components/data-display/CardShowcase";
import DataListShowcase from "../components/data-display/DataListShowcase";
import TableShowcase from "../components/data-display/TableShowcase";
import StatShowcase from "../components/data-display/StatShowcase";
import TagShowcase from "../components/data-display/TagShowcase";

function DataDisplayPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Data Display"
                text="Explore Chakra UI components for presenting users, labels, cards, structured information, tables, statistics, and metadata."
            />

            <AvatarShowcase />

            <BadgeShowcase />

            <CardShowcase />

            <DataListShowcase />

            <TableShowcase />

            <StatShowcase />

            <TagShowcase />
        </Stack>
    );
}

export default DataDisplayPage;
