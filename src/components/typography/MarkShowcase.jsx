import { Mark, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function MarkShowcase() {
    return (
        <DemoCard
            title="Mark"
            text="Mark highlights important inline content using a familiar marker-style treatment."
        >
            <Stack gap="5">
                <Text fontSize="lg" lineHeight="1.8">
                    Chakra UI makes{" "}
                    <Mark
                        px="2"
                        py="1"
                        bg="yellow.300"
                        color="gray.950"
                        borderRadius="sm"
                    >
                        component styling
                    </Mark>{" "}
                    easier to understand and maintain.
                </Text>

                <Text fontSize="lg" lineHeight="1.8">
                    Reusable components improve{" "}
                    <Mark
                        px="2"
                        py="1"
                        bg="teal.200"
                        color="gray.950"
                        borderRadius="sm"
                    >
                        consistency
                    </Mark>{" "}
                    across an application.
                </Text>
            </Stack>

            <CodeHint
                code={`<Mark
    bg="yellow.300"
    color="gray.950"
>
    highlighted content
</Mark>`}
            />
        </DemoCard>
    );
}

export default MarkShowcase;
