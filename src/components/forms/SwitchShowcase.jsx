import { Stack, Switch } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function SwitchShowcase() {
    return (
        <DemoCard
            title="Switch"
            text="Switch is useful for settings that can be turned on or off immediately."
        >
            <Stack gap="5">
                <Switch.Root defaultChecked colorPalette="teal">
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Dark interface</Switch.Label>
                </Switch.Root>

                <Switch.Root colorPalette="blue">
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Email notifications</Switch.Label>
                </Switch.Root>

                <Switch.Root colorPalette="purple" size="lg">
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Large switch</Switch.Label>
                </Switch.Root>

                <Switch.Root disabled>
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Disabled switch</Switch.Label>
                </Switch.Root>
            </Stack>

            <CodeHint
                code={`<Switch.Root
    defaultChecked
    colorPalette="teal"
>
    <Switch.HiddenInput />
    <Switch.Control />
    <Switch.Label>
        Dark interface
    </Switch.Label>
</Switch.Root>`}
            />
        </DemoCard>
    );
}

export default SwitchShowcase;
