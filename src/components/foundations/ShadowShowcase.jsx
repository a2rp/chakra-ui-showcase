import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";

const shadowValues = [
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
];

function ShadowShowcase() {
    return (
        <DemoCard
            title="Shadows"
            text="Shadow tokens add depth and separation to cards, menus, floating panels, and overlays."
        >
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 5,
                }}
                gap="5"
            >
                {shadowValues.map((item) => (
                    <Stack key={item.token} gap="3">
                        <Box
                            minH="120px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bg="bg.panel"
                            border="1px solid"
                            borderColor="border"
                            borderRadius="xl"
                            boxShadow={item.token}
                        >
                            <Text color="fg" fontWeight="bold">
                                {item.label}
                            </Text>
                        </Box>

                        <Text textAlign="center" color="fg.muted" fontSize="xs">
                            boxShadow="{item.token}"
                        </Text>
                    </Stack>
                ))}
            </SimpleGrid>
        </DemoCard>
    );
}

export default ShadowShowcase;
