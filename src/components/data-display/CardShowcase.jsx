import { Card, SimpleGrid, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";
import AppCard from "../ui/AppCard";

function CardShowcase() {
    return (
        <DemoCard
            title="Card"
            text="Card groups related information and actions into a clear visual container."
        >
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 3,
                }}
                gap="5"
            >
                <AppCard>
                    <Card.Header px="6" pt="6" pb="3">
                        <Card.Title>Starter</Card.Title>

                        <Card.Description>
                            Basic plan for small frontend projects.
                        </Card.Description>
                    </Card.Header>

                    <Card.Body px="6" py="4">
                        <Text color="fg.muted">
                            Includes essential UI components and standard
                            project features.
                        </Text>
                    </Card.Body>

                    <Card.Footer px="6" pt="3" pb="6">
                        <AppButton size="sm">Select Plan</AppButton>
                    </Card.Footer>
                </AppCard>

                <AppCard>
                    <Card.Header px="6" pt="6" pb="3">
                        <Card.Title>Professional</Card.Title>

                        <Card.Description>
                            For larger applications and teams.
                        </Card.Description>
                    </Card.Header>

                    <Card.Body px="6" py="4">
                        <Text color="fg.muted">
                            Advanced layouts, reusable patterns, and richer
                            application interfaces.
                        </Text>
                    </Card.Body>

                    <Card.Footer px="6" pt="3" pb="6">
                        <AppButton size="sm" variant="outline">
                            Learn More
                        </AppButton>
                    </Card.Footer>
                </AppCard>

                <AppCard>
                    <Card.Header px="6" pt="6" pb="3">
                        <Card.Title>Enterprise</Card.Title>

                        <Card.Description>
                            Built for complex product requirements.
                        </Card.Description>
                    </Card.Header>

                    <Card.Body px="6" py="4">
                        <Text color="fg.muted">
                            Scalable architecture, reusable systems, and
                            application-wide consistency.
                        </Text>
                    </Card.Body>

                    <Card.Footer px="6" pt="3" pb="6">
                        <AppButton size="sm" colorPalette="purple">
                            Contact Team
                        </AppButton>
                    </Card.Footer>
                </AppCard>
            </SimpleGrid>

            <CodeHint
                code={`<AppCard>
    <Card.Header>
        <Card.Title>Starter</Card.Title>
    </Card.Header>

    <Card.Body>
        Card content
    </Card.Body>
</AppCard>`}
            />
        </DemoCard>
    );
}

export default CardShowcase;
