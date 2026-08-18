import { useState } from "react";
import { Box, Collapsible, HStack, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function ControlledDisclosureShowcase() {
    const [open, setOpen] = useState(false);

    return (
        <DemoCard
            title="Controlled Disclosure"
            text="A controlled disclosure keeps its open state inside React so other interface elements can react to the same state."
        >
            <Stack gap="5">
                <HStack gap="4" flexWrap="wrap">
                    <AppButton onClick={() => setOpen((value) => !value)}>
                        {open ? "Hide Panel" : "Show Panel"}
                    </AppButton>

                    <Text color="fg.muted">
                        State:{" "}
                        <Text
                            as="span"
                            color={open ? "green.500" : "orange.500"}
                            fontWeight="bold"
                        >
                            {open ? "Open" : "Closed"}
                        </Text>
                    </Text>
                </HStack>

                <Collapsible.Root
                    open={open}
                    onOpenChange={(details) => setOpen(details.open)}
                >
                    <Collapsible.Content>
                        <Box
                            p="6"
                            bg="bg.subtle"
                            border="1px solid"
                            borderColor="teal.500"
                            borderRadius="xl"
                        >
                            <Text color="fg.muted" lineHeight="1.8">
                                This panel is controlled through React state.
                                The same state could also drive labels, icons,
                                analytics, or other interface behavior.
                            </Text>
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>
            </Stack>

            <CodeHint
                code={`const [open, setOpen] = useState(false);

<Collapsible.Root
    open={open}
    onOpenChange={(details) => setOpen(details.open)}
>
    <Collapsible.Content>
        Controlled content
    </Collapsible.Content>
</Collapsible.Root>`}
            />
        </DemoCard>
    );
}

export default ControlledDisclosureShowcase;
