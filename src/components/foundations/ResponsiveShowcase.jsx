import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function ResponsiveShowcase() {
    return (
        <DemoCard
            title="Responsive Styling"
            text="Chakra UI lets style props accept breakpoint-based values directly, making responsive interfaces easier to build."
        >
            <Stack gap="8">
                <Box>
                    <Text mb="3" fontSize="sm" fontWeight="bold" color="fg">
                        Responsive Width
                    </Text>

                    <Box
                        w={{
                            base: "100%",
                            md: "70%",
                            lg: "50%",
                        }}
                        minH="120px"
                        bg={{
                            base: "teal.600",
                            md: "blue.600",
                            lg: "purple.600",
                        }}
                        borderRadius="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        px="4"
                        transition="all 0.3s ease"
                    >
                        <Text
                            color="white"
                            textAlign="center"
                            fontWeight="bold"
                        >
                            Resize the browser to see this box change.
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Text mb="3" fontSize="sm" fontWeight="bold" color="fg">
                        Responsive Grid
                    </Text>

                    <SimpleGrid
                        columns={{
                            base: 1,
                            sm: 2,
                            lg: 4,
                        }}
                        gap="4"
                    >
                        {[1, 2, 3, 4].map((item) => (
                            <Box
                                key={item}
                                minH="90px"
                                bg="bg.subtle"
                                border="1px solid"
                                borderColor="border"
                                borderRadius="lg"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text color="fg" fontWeight="bold">
                                    Item {item}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                <Box>
                    <Text mb="3" fontSize="sm" fontWeight="bold" color="fg">
                        Responsive Typography
                    </Text>

                    <Text
                        fontSize={{
                            base: "lg",
                            md: "2xl",
                            lg: "4xl",
                        }}
                        fontWeight="bold"
                        color="fg"
                        lineHeight="1.2"
                    >
                        This text grows with the screen size
                    </Text>
                </Box>

                <Box
                    p={{
                        base: "4",
                        md: "6",
                        lg: "8",
                    }}
                    bg="bg.subtle"
                    border="1px solid"
                    borderColor="border"
                    borderRadius="xl"
                >
                    <Text color="fg.muted" lineHeight="1.8">
                        This container also changes its padding across
                        breakpoints without writing separate CSS media queries.
                    </Text>
                </Box>
            </Stack>
            <CodeHint
                code={`<Box
    w={{
        base: "100%",
        md: "70%",
        lg: "50%",
    }}
    p={{
        base: "4",
        md: "6",
        lg: "8",
    }}
/>`}
            />
        </DemoCard>
    );
}

export default ResponsiveShowcase;
