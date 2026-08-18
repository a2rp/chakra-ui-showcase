import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const spacingValues = [
    {
        token: "1",
        value: "0.25rem",
    },
    {
        token: "2",
        value: "0.5rem",
    },
    {
        token: "4",
        value: "1rem",
    },
    {
        token: "6",
        value: "1.5rem",
    },
    {
        token: "8",
        value: "2rem",
    },
    {
        token: "10",
        value: "2.5rem",
    },
    {
        token: "12",
        value: "3rem",
    },
];

function SpacingShowcase() {
    return (
        <DemoCard
            title="Spacing"
            text="Spacing tokens help maintain consistent gaps, padding, margins, widths, and layout rhythm."
        >
            <Stack gap="5">
                {spacingValues.map((item) => (
                    <Stack key={item.token} gap="2">
                        <HStack justify="space-between">
                            <Text fontSize="sm" fontWeight="bold" color="fg">
                                spacing.{item.token}
                            </Text>

                            <Text fontSize="sm" color="fg.muted">
                                {item.value}
                            </Text>
                        </HStack>

                        <Box
                            h="14px"
                            w={item.token}
                            minW="4px"
                            maxW="100%"
                            bg="teal.500"
                            borderRadius="full"
                        />
                    </Stack>
                ))}
            </Stack>

            <CodeHint
                code={`<Box
    p="6"
    mt="4"
    gap="3"
/>`}
            />
        </DemoCard>
    );
}

export default SpacingShowcase;
