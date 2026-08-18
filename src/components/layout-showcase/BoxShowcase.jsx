import { Box, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function BoxShowcase() {
    return (
        <DemoCard
            title="Box"
            text="Box is the most basic Chakra UI layout component and can be styled using Chakra style props."
        >
            <Box
                p="6"
                bg="bg.subtle"
                border="1px solid"
                borderColor="border"
                borderRadius="xl"
            >
                <Text color="fg" fontWeight="bold">
                    A simple Box component
                </Text>

                <Text mt="2" color="fg.muted" lineHeight="1.8">
                    Padding, background, border, radius, spacing, and other
                    styles can be applied directly through props.
                </Text>
            </Box>

            <CodeHint
                code={`<Box
    p="6"
    bg="bg.subtle"
    border="1px solid"
    borderColor="border"
    borderRadius="xl"
>
    Content
</Box>`}
            />
        </DemoCard>
    );
}

export default BoxShowcase;
