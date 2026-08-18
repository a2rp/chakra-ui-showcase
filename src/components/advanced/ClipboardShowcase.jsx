import { Clipboard, Stack } from "@chakra-ui/react";
import { LuCheck, LuCopy } from "react-icons/lu";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function ClipboardShowcase() {
    return (
        <DemoCard
            title="Clipboard"
            text="Clipboard provides copy-to-clipboard behavior with built-in state and accessible interaction feedback."
        >
            <Clipboard.Root value="https://chakra-ui.com" timeout={2000}>
                <Stack gap="4" align="flex-start">
                    <Clipboard.ValueText color="fg.muted" />

                    <Clipboard.Trigger asChild>
                        <AppButton variant="outline">
                            <Clipboard.Indicator
                                copied={<LuCheck />}
                                default={<LuCopy />}
                            />

                            <Clipboard.CopyText />
                        </AppButton>
                    </Clipboard.Trigger>
                </Stack>
            </Clipboard.Root>

            <CodeHint
                code={`<Clipboard.Root value="https://chakra-ui.com">
    <Clipboard.Trigger asChild>
        <AppButton variant="outline">
            <Clipboard.CopyText />
        </AppButton>
    </Clipboard.Trigger>
</Clipboard.Root>`}
            />
        </DemoCard>
    );
}

export default ClipboardShowcase;
