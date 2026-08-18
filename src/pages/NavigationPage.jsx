import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import BreadcrumbShowcase from "../components/navigation/BreadcrumbShowcase";
import TabsShowcase from "../components/navigation/TabsShowcase";
import LinkShowcase from "../components/navigation/LinkShowcase";
import PaginationShowcase from "../components/navigation/PaginationShowcase";
import WorkingPaginationShowcase from "../components/navigation/WorkingPaginationShowcase";

function NavigationPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Navigation"
                text="Explore Chakra UI navigation components for hierarchy, tabs, links, pagination, and interactive content navigation."
            />

            <BreadcrumbShowcase />

            <TabsShowcase />

            <LinkShowcase />

            <PaginationShowcase />

            <WorkingPaginationShowcase />
        </Stack>
    );
}

export default NavigationPage;
