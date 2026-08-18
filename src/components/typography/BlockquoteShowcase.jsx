import { Blockquote } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function BlockquoteShowcase() {
    return (
        <DemoCard
            title="Blockquote"
            text="Blockquote presents quoted or emphasized long-form content with supporting citation information."
        >
            <Blockquote.Root
                colorPalette="teal"
                px="5"
                py="4"
                borderRadius="lg"
            >
                <Blockquote.Content>
                    Reusable UI components help teams build interfaces faster
                    while maintaining visual and behavioral consistency.
                </Blockquote.Content>

                <Blockquote.Caption>Chakra UI Showcase</Blockquote.Caption>
            </Blockquote.Root>

            <CodeHint
                code={`<Blockquote.Root colorPalette="teal">
    <Blockquote.Content>
        Reusable UI components...
    </Blockquote.Content>
</Blockquote.Root>`}
            />
        </DemoCard>
    );
}

export default BlockquoteShowcase;
