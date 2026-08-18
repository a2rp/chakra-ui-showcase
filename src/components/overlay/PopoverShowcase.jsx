import { CloseButton, Popover, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function PopoverShowcase() {
    return (
        <DemoCard
            title="Popover"
            text="Popover displays contextual information or lightweight controls near an interactive trigger."
        >
            <Popover.Root>
                <Popover.Trigger asChild>
                    <AppButton variant="outline">Open Popover</AppButton>
                </Popover.Trigger>

                <Popover.Positioner>
                    <Popover.Content
                        maxW="320px"
                        borderRadius="xl"
                        overflow="hidden"
                    >
                        <Popover.Arrow>
                            <Popover.ArrowTip />
                        </Popover.Arrow>

                        <Popover.Body px="5" py="5">
                            <Stack gap="3">
                                <Popover.Title
                                    fontWeight="bold"
                                    color="fg"
                                    pr="8"
                                >
                                    Chakra UI
                                </Popover.Title>

                                <Text
                                    color="fg.muted"
                                    fontSize="sm"
                                    lineHeight="1.8"
                                >
                                    Popovers are useful for contextual help,
                                    supporting actions, and small controls.
                                </Text>
                            </Stack>
                        </Popover.Body>

                        <Popover.CloseTrigger asChild>
                            <CloseButton
                                position="absolute"
                                top="3"
                                right="3"
                                size="sm"
                            />
                        </Popover.CloseTrigger>
                    </Popover.Content>
                </Popover.Positioner>
            </Popover.Root>

            <CodeHint
                code={`<Popover.Root>
    <Popover.Trigger asChild>
        <AppButton variant="outline">
            Open Popover
        </AppButton>
    </Popover.Trigger>

    <Popover.Positioner>
        <Popover.Content>
            ...
        </Popover.Content>
    </Popover.Positioner>
</Popover.Root>`}
            />
        </DemoCard>
    );
}

export default PopoverShowcase;
