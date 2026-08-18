import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const colorGroups = [
    {
        name: "Gray",
        values: ["gray.100", "gray.300", "gray.500", "gray.700", "gray.900"],
    },
    {
        name: "Teal",
        values: ["teal.100", "teal.300", "teal.500", "teal.700", "teal.900"],
    },
    {
        name: "Blue",
        values: ["blue.100", "blue.300", "blue.500", "blue.700", "blue.900"],
    },
    {
        name: "Purple",
        values: [
            "purple.100",
            "purple.300",
            "purple.500",
            "purple.700",
            "purple.900",
        ],
    },
    {
        name: "Red",
        values: ["red.100", "red.300", "red.500", "red.700", "red.900"],
    },
    {
        name: "Orange",
        values: [
            "orange.100",
            "orange.300",
            "orange.500",
            "orange.700",
            "orange.900",
        ],
    },
];

function ColorShowcase() {
    return (
        <DemoCard
            title="Colors"
            text="Explore Chakra UI color tokens and see how palette values can be applied directly through style props."
        >
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 3,
                }}
                gap="6"
            >
                {colorGroups.map((group) => (
                    <Stack key={group.name} gap="3">
                        <Text fontWeight="bold" color="fg">
                            {group.name}
                        </Text>

                        <Stack gap="2">
                            {group.values.map((value) => {
                                const isLight =
                                    value.endsWith("100") ||
                                    value.endsWith("300");

                                return (
                                    <Box
                                        key={value}
                                        bg={value}
                                        minH="52px"
                                        px="4"
                                        borderRadius="lg"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <Text
                                            fontSize="sm"
                                            fontWeight="bold"
                                            color={
                                                isLight ? "gray.950" : "white"
                                            }
                                        >
                                            {value}
                                        </Text>
                                    </Box>
                                );
                            })}
                        </Stack>
                    </Stack>
                ))}
            </SimpleGrid>
            <CodeHint
                code={`<Box
    bg="teal.500"
    color="white"
    px="4"
    py="3"
>
    teal.500
</Box>`}
            />
        </DemoCard>
    );
}

export default ColorShowcase;
