import { Box, Tabs, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function TabsShowcase() {
    return (
        <DemoCard
            title="Tabs"
            text="Tabs organize related content into switchable panels without navigating away from the current page."
        >
            <Tabs.Root defaultValue="overview" colorPalette="teal">
                <Tabs.List gap="4">
                    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>

                    <Tabs.Trigger value="features">Features</Tabs.Trigger>

                    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>

                    <Tabs.Indicator />
                </Tabs.List>

                <Box pt="6">
                    <Tabs.Content value="overview">
                        <Text color="fg.muted" lineHeight="1.8">
                            This panel contains overview content.
                        </Text>
                    </Tabs.Content>

                    <Tabs.Content value="features">
                        <Text color="fg.muted" lineHeight="1.8">
                            This panel contains feature-related content.
                        </Text>
                    </Tabs.Content>

                    <Tabs.Content value="settings">
                        <Text color="fg.muted" lineHeight="1.8">
                            This panel contains settings information.
                        </Text>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>

            <CodeHint
                code={`<Tabs.Root defaultValue="overview">
    <Tabs.List>
        <Tabs.Trigger value="overview">
            Overview
        </Tabs.Trigger>

        <Tabs.Trigger value="features">
            Features
        </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content value="overview">
        Overview content
    </Tabs.Content>
</Tabs.Root>`}
            />
        </DemoCard>
    );
}

export default TabsShowcase;
