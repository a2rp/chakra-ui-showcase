import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import ButtonShowcase from "../components/buttons/ButtonShowcase";
import ButtonVariantsShowcase from "../components/buttons/ButtonVariantsShowcase";
import ButtonSizesShowcase from "../components/buttons/ButtonSizesShowcase";
import ButtonStatesShowcase from "../components/buttons/ButtonStatesShowcase";
import IconButtonShowcase from "../components/buttons/IconButtonShowcase";
import ButtonInteractionShowcase from "../components/buttons/ButtonInteractionShowcase";

function ButtonsPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Buttons"
                text="Explore Chakra UI buttons, variants, sizes, states, icon actions, color palettes, and practical React interactions."
            />

            <ButtonShowcase />

            <ButtonVariantsShowcase />

            <ButtonSizesShowcase />

            <ButtonStatesShowcase />

            <IconButtonShowcase />

            <ButtonInteractionShowcase />
        </Stack>
    );
}

export default ButtonsPage;
