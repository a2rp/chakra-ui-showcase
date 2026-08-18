import {
    Box,
    Heading,
    HStack,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import AppBadge from "../components/ui/AppBadge";
import AppButton from "../components/ui/AppButton";
import AppCard from "../components/ui/AppCard";
import { useNavigate } from "react-router-dom";

const features = [
    {
        title: "Centralized UI",
        text: "Reusable buttons, inputs, badges, cards, selects, and other shared interface components.",
    },
    {
        title: "Light & Dark",
        text: "Theme-aware Chakra semantic colors designed to work across light and dark modes.",
    },
    {
        title: "Modular Structure",
        text: "Every component category, page, layout element, and real-world example stays separated.",
    },
    {
        title: "Working Examples",
        text: "Interactive Chakra UI components will be demonstrated with real React state and behavior.",
    },
];

function Home() {
    const navigate = useNavigate();

    return (
        <Stack gap="12">
            <Box maxW="900px">
                <HStack gap="3" mb="5" flexWrap="wrap">
                    <AppBadge>React</AppBadge>

                    <AppBadge>Chakra UI</AppBadge>

                    <AppBadge>Frontend Only</AppBadge>
                </HStack>

                <Heading
                    as="h1"
                    fontSize={{
                        base: "4xl",
                        md: "5xl",
                        xl: "6xl",
                    }}
                    lineHeight="1.05"
                    letterSpacing="-0.03em"
                    color="fg"
                >
                    Complete Chakra UI Showcase
                </Heading>

                <Text
                    mt="6"
                    maxW="760px"
                    color="fg.muted"
                    fontSize={{
                        base: "md",
                        md: "lg",
                    }}
                    lineHeight="1.9"
                >
                    A complete frontend project demonstrating Chakra UI
                    components, layouts, theming, interaction patterns,
                    responsive design, and practical interfaces.
                </Text>

                <HStack mt="8" gap="4" flexWrap="wrap">
                    <AppButton onClick={() => navigate("/foundations")}>
                        Explore Components
                    </AppButton>

                    <AppButton
                        variant="outline"
                        onClick={() => navigate("/examples")}
                    >
                        View Examples
                    </AppButton>
                </HStack>
            </Box>

            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 4,
                }}
                gap="5"
            >
                {features.map((item) => (
                    <AppCard
                        key={item.title}
                        transition="0.2s ease"
                        _hover={{
                            transform: "translateY(-4px)",
                            borderColor: "teal.500",
                        }}
                    >
                        <Stack p="6" gap="3">
                            <Heading size="md" color="fg">
                                {item.title}
                            </Heading>

                            <Text
                                color="fg.muted"
                                fontSize="sm"
                                lineHeight="1.8"
                            >
                                {item.text}
                            </Text>
                        </Stack>
                    </AppCard>
                ))}
            </SimpleGrid>
        </Stack>
    );
}

export default Home;
