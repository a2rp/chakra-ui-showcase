import { ColorPicker, HStack, Stack, parseColor } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function ColorPickerShowcase() {
    return (
        <DemoCard
            title="Color Picker"
            text="Color Picker provides controls for selecting, adjusting, and inspecting colors."
        >
            <ColorPicker.Root defaultValue={parseColor("#14b8a6")} maxW="320px">
                <Stack gap="4">
                    <ColorPicker.Label>Pick a color</ColorPicker.Label>

                    <ColorPicker.Control>
                        <ColorPicker.Input />

                        <ColorPicker.Trigger />
                    </ColorPicker.Control>

                    <ColorPicker.Positioner>
                        <ColorPicker.Content>
                            <ColorPicker.Area>
                                <ColorPicker.AreaBackground />
                                <ColorPicker.AreaThumb />
                            </ColorPicker.Area>

                            <HStack mt="4">
                                <ColorPicker.EyeDropper size="xs" />

                                <ColorPicker.ChannelSlider channel="hue">
                                    <ColorPicker.ChannelSliderTrack />
                                    <ColorPicker.ChannelSliderThumb />
                                </ColorPicker.ChannelSlider>
                            </HStack>
                        </ColorPicker.Content>
                    </ColorPicker.Positioner>
                </Stack>
            </ColorPicker.Root>

            <CodeHint
                code={`<ColorPicker.Root
    defaultValue={parseColor("#14b8a6")}
>
    <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
    </ColorPicker.Control>
</ColorPicker.Root>`}
            />
        </DemoCard>
    );
}

export default ColorPickerShowcase;
