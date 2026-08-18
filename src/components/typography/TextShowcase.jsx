import { Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function TextShowcase() {
    return (
        <DemoCard
            title="Text"
            text="Text is used for paragraphs, descriptions, labels, captions, and other readable content."
        >
            <Stack gap="4">
                <Text fontSize="2xl">Extra large text</Text>

                <Text fontSize="xl">Large text</Text>

                <Text fontSize="lg">Medium large text</Text>

                <Text>Default body text</Text>

                <Text fontSize="sm" color="fg.muted">
                    Small muted text
                </Text>

                <Text fontWeight="bold" color="teal.500">
                    Bold accent text
                </Text>
            </Stack>

            <CodeHint
                code={`<Text
    fontSize="lg"
    color="fg.muted"
>
    Example text
</Text>`}
            />
        </DemoCard>
    );
}

export default TextShowcase;
