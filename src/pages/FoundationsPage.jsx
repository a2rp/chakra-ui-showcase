import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import ColorShowcase from "../components/foundations/ColorShowcase";
import SpacingShowcase from "../components/foundations/SpacingShowcase";
import RadiusShowcase from "../components/foundations/RadiusShowcase";
import ShadowShowcase from "../components/foundations/ShadowShowcase";
import ResponsiveShowcase from "../components/foundations/ResponsiveShowcase";

function FoundationsPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Foundations"
                text="Explore Chakra UI design foundations including colors, spacing, border radius, shadows, and responsive styling."
            />

            <ColorShowcase />

            <SpacingShowcase />

            <RadiusShowcase />

            <ShadowShowcase />

            <ResponsiveShowcase />
        </Stack>
    );
}

export default FoundationsPage;
