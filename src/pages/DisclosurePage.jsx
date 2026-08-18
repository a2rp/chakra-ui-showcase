import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import AccordionShowcase from "../components/disclosure/AccordionShowcase";
import MultipleAccordionShowcase from "../components/disclosure/MultipleAccordionShowcase";
import CollapsibleShowcase from "../components/disclosure/CollapsibleShowcase";
import ControlledDisclosureShowcase from "../components/disclosure/ControlledDisclosureShowcase";

function DisclosurePage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Disclosure"
                text="Explore Chakra UI components for progressively revealing and hiding content through accordions, collapsible panels, and controlled disclosure patterns."
            />

            <AccordionShowcase />

            <MultipleAccordionShowcase />

            <CollapsibleShowcase />

            <ControlledDisclosureShowcase />
        </Stack>
    );
}

export default DisclosurePage;
