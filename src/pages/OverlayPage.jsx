import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import DialogShowcase from "../components/overlay/DialogShowcase";
import DrawerShowcase from "../components/overlay/DrawerShowcase";
import PopoverShowcase from "../components/overlay/PopoverShowcase";
import HoverCardShowcase from "../components/overlay/HoverCardShowcase";
import MenuShowcase from "../components/overlay/MenuShowcase";

function OverlayPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Overlay"
                text="Explore Chakra UI overlay components for dialogs, drawers, contextual popovers, hover information, and action menus."
            />

            <DialogShowcase />

            <DrawerShowcase />

            <PopoverShowcase />

            <HoverCardShowcase />

            <MenuShowcase />
        </Stack>
    );
}

export default OverlayPage;
