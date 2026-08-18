import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import InputShowcase from "../components/forms/InputShowcase";
import TextareaShowcase from "../components/forms/TextareaShowcase";
import CheckboxShowcase from "../components/forms/CheckboxShowcase";
import RadioShowcase from "../components/forms/RadioShowcase";
import SwitchShowcase from "../components/forms/SwitchShowcase";
import SelectShowcase from "../components/forms/SelectShowcase";
import SliderShowcase from "../components/forms/SliderShowcase";
import PinInputShowcase from "../components/forms/PinInputShowcase";
import WorkingFormShowcase from "../components/forms/WorkingFormShowcase";

function FormsPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Forms"
                text="Explore Chakra UI form controls, selection inputs, switches, sliders, PIN inputs, reusable field components, and a complete working React form."
            />

            <InputShowcase />

            <TextareaShowcase />

            <CheckboxShowcase />

            <RadioShowcase />

            <SwitchShowcase />

            <SelectShowcase />

            <SliderShowcase />

            <PinInputShowcase />

            <WorkingFormShowcase />
        </Stack>
    );
}

export default FormsPage;
