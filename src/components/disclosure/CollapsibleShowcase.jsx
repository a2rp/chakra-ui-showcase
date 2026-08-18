import { Box, Collapsible, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function CollapsibleShowcase() {
    return (
        <DemoCard
            title="Collapsible"
            text="Collapsible reveals or hides a single content region through an interactive trigger."
        >
            <Collapsible.Root>
                <Stack gap="4" align="flex-start">
                    <Collapsible.Trigger asChild>
                        <AppButton variant="outline">Show Details</AppButton>
                    </Collapsible.Trigger>

                    <Collapsible.Content>
                        <Box
                            p="5"
                            bg="bg.subtle"
                            border="1px solid"
                            borderColor="border"
                            borderRadius="xl"
                        >
                            <Text color="fg.muted" lineHeight="1.8">
                                This content can be revealed or hidden without
                                navigating away from the current page.
                            </Text>
                        </Box>
                    </Collapsible.Content>
                </Stack>
            </Collapsible.Root>

            <CodeHint
                code={`<Collapsible.Root>
    <Collapsible.Trigger asChild>
        <AppButton variant="outline">
            Show Details
        </AppButton>
    </Collapsible.Trigger>

    <Collapsible.Content>
        Hidden content
    </Collapsible.Content>
</Collapsible.Root>`}
            />
        </DemoCard>
    );
}

export default CollapsibleShowcase;
