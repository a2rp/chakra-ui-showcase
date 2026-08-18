import { Checkbox, Stack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function CheckboxShowcase() {
    return (
        <DemoCard
            title="Checkbox"
            text="Checkbox lets users independently select one or more options."
        >
            <Stack gap="4">
                <Checkbox.Root defaultChecked colorPalette="teal">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label>Enable notifications</Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root colorPalette="teal">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label>Remember preferences</Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root colorPalette="teal" disabled>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label>Disabled option</Checkbox.Label>
                </Checkbox.Root>
            </Stack>

            <CodeHint
                code={`<Checkbox.Root colorPalette="teal">
    <Checkbox.HiddenInput />
    <Checkbox.Control>
        <Checkbox.Indicator />
    </Checkbox.Control>
    <Checkbox.Label>
        Remember preferences
    </Checkbox.Label>
</Checkbox.Root>`}
            />
        </DemoCard>
    );
}

export default CheckboxShowcase;
