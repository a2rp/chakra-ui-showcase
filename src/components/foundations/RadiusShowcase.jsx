import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";

const radiusValues = [
    {
        label: "Small",
        token: "sm",
    },
    {
        label: "Medium",
        token: "md",
    },
    {
        label: "Large",
        token: "lg",
    },
    {
        label: "Extra Large",
        token: "xl",
    },
    {
        label: "2XL",
        token: "2xl",
    },
    {
        label: "Full",
        token: "full",
    },
];

function RadiusShowcase() {
    return (
        <DemoCard
            title="Border Radius"
            text="Radius tokens create consistent corner treatments across cards, buttons, inputs, badges, and other components."
        >
            <SimpleGrid
                columns={{
                    base: 2,
                    md: 3,
                    xl: 6,
                }}
                gap="5"
            >
                {radiusValues.map((item) => (
                    <Stack key={item.token} gap="3" align="center">
                        <Box
                            w="100px"
                            h="100px"
                            bg="teal.500"
                            borderRadius={item.token}
                        />

                        <Stack gap="1" align="center">
                            <Text fontSize="sm" fontWeight="bold" color="fg">
                                {item.label}
                            </Text>

                            <Text fontSize="xs" color="fg.muted">
                                {item.token}
                            </Text>
                        </Stack>
                    </Stack>
                ))}
            </SimpleGrid>
        </DemoCard>
    );
}

export default RadiusShowcase;
