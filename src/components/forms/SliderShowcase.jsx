import { useState } from "react";
import { Slider, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function SliderShowcase() {
    const [value, setValue] = useState([40]);

    return (
        <DemoCard
            title="Slider"
            text="Slider lets users select numeric values from a defined range."
        >
            <Stack gap="8">
                <Stack gap="3">
                    <Text color="fg.muted">Volume: {value[0]}%</Text>

                    <Slider.Root
                        value={value}
                        onValueChange={(details) => setValue(details.value)}
                        colorPalette="teal"
                        max={100}
                    >
                        <Slider.Control>
                            <Slider.Track>
                                <Slider.Range />
                            </Slider.Track>

                            <Slider.Thumbs />
                        </Slider.Control>
                    </Slider.Root>
                </Stack>

                <Stack gap="3">
                    <Text color="fg.muted">Default value</Text>

                    <Slider.Root defaultValue={[65]} colorPalette="purple">
                        <Slider.Control>
                            <Slider.Track>
                                <Slider.Range />
                            </Slider.Track>

                            <Slider.Thumbs />
                        </Slider.Control>
                    </Slider.Root>
                </Stack>
            </Stack>

            <CodeHint
                code={`<Slider.Root
    value={value}
    onValueChange={(details) => setValue(details.value)}
>
    <Slider.Control>
        <Slider.Track>
            <Slider.Range />
        </Slider.Track>

        <Slider.Thumbs />
    </Slider.Control>
</Slider.Root>`}
            />
        </DemoCard>
    );
}

export default SliderShowcase;
