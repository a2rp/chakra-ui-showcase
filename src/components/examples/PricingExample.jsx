import { Badge, Card, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";
import AppCard from "../ui/AppCard";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "For learning and personal projects.",
        features: ["Core components", "Responsive styling", "Basic examples"],
        palette: "gray",
    },
    {
        name: "Professional",
        price: "$29",
        description: "For production-ready applications.",
        features: [
            "Advanced components",
            "Reusable patterns",
            "Priority features",
        ],
        palette: "teal",
        featured: true,
    },
    {
        name: "Enterprise",
        price: "$99",
        description: "For larger products and teams.",
        features: [
            "Scalable architecture",
            "Team workflows",
            "Premium support",
        ],
        palette: "purple",
    },
];

function PricingExample() {
    return (
        <DemoCard
            title="Pricing Example"
            text="A responsive pricing interface composed from cards, badges, stacks, buttons, and reusable application styles."
        >
            <SimpleGrid
                columns={{
                    base: 1,
                    lg: 3,
                }}
                gap="5"
            >
                {plans.map((plan) => (
                    <AppCard
                        key={plan.name}
                        position="relative"
                        borderColor={plan.featured ? "teal.500" : "border"}
                    >
                        {plan.featured && (
                            <Badge
                                position="absolute"
                                top="4"
                                right="4"
                                colorPalette="teal"
                                px="3"
                                py="1"
                                borderRadius="md"
                            >
                                Popular
                            </Badge>
                        )}

                        <Card.Header px="6" pt="6" pb="3">
                            <Card.Title>{plan.name}</Card.Title>

                            <Card.Description>
                                {plan.description}
                            </Card.Description>
                        </Card.Header>

                        <Card.Body px="6" py="4">
                            <Stack gap="6">
                                <Text
                                    fontSize="4xl"
                                    fontWeight="bold"
                                    color="fg"
                                >
                                    {plan.price}

                                    <Text
                                        as="span"
                                        ml="1"
                                        color="fg.muted"
                                        fontSize="sm"
                                        fontWeight="normal"
                                    >
                                        / month
                                    </Text>
                                </Text>

                                <Stack gap="3">
                                    {plan.features.map((feature) => (
                                        <Text key={feature} color="fg.muted">
                                            ✓ {feature}
                                        </Text>
                                    ))}
                                </Stack>
                            </Stack>
                        </Card.Body>

                        <Card.Footer px="6" pt="3" pb="6">
                            <AppButton
                                w="full"
                                colorPalette={plan.palette}
                                variant={plan.featured ? "primary" : "outline"}
                            >
                                Choose {plan.name}
                            </AppButton>
                        </Card.Footer>
                    </AppCard>
                ))}
            </SimpleGrid>

            <CodeHint
                code={`<SimpleGrid columns={{ base: 1, lg: 3 }}>
    <AppCard>
        <Card.Header>
            <Card.Title>Professional</Card.Title>
        </Card.Header>

        <Card.Body>
            Pricing content
        </Card.Body>
    </AppCard>
</SimpleGrid>`}
            />
        </DemoCard>
    );
}

export default PricingExample;
