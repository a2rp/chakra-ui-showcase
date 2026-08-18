import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import BoxShowcase from "../components/layout-showcase/BoxShowcase";
import FlexShowcase from "../components/layout-showcase/FlexShowcase";
import GridShowcase from "../components/layout-showcase/GridShowcase";
import StackShowcase from "../components/layout-showcase/StackShowcase";
import ContainerShowcase from "../components/layout-showcase/ContainerShowcase";
import CenterShowcase from "../components/layout-showcase/CenterShowcase";

function LayoutPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Layout"
                text="Explore Chakra UI layout primitives for building flexible, responsive, and well-structured interfaces."
            />

            <BoxShowcase />

            <FlexShowcase />

            <GridShowcase />

            <StackShowcase />

            <ContainerShowcase />

            <CenterShowcase />
        </Stack>
    );
}

export default LayoutPage;
