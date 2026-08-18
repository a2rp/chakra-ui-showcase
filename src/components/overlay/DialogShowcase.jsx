import { CloseButton, Dialog, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function DialogShowcase() {
    return (
        <DemoCard
            title="Dialog"
            text="Dialog displays focused content above the current interface for confirmations, forms, warnings, and important actions."
        >
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <AppButton>Open Dialog</AppButton>
                </Dialog.Trigger>

                <Dialog.Backdrop />

                <Dialog.Positioner
                    p={{
                        base: "4",
                        md: "6",
                    }}
                >
                    <Dialog.Content
                        maxW="520px"
                        borderRadius="xl"
                        overflow="hidden"
                    >
                        <Dialog.Header px="6" pt="6" pb="3">
                            <Dialog.Title>Confirm Action</Dialog.Title>
                        </Dialog.Header>

                        <Dialog.Body px="6" py="4">
                            <Stack gap="4">
                                <Text color="fg.muted">
                                    This is a working Chakra UI dialog.
                                </Text>

                                <Text color="fg.muted" lineHeight="1.8">
                                    Dialogs are useful when users need to focus
                                    on a specific action without leaving the
                                    current page.
                                </Text>
                            </Stack>
                        </Dialog.Body>

                        <Dialog.Footer px="6" pt="3" pb="6" gap="3">
                            <Dialog.ActionTrigger asChild>
                                <AppButton variant="outline">Cancel</AppButton>
                            </Dialog.ActionTrigger>

                            <Dialog.ActionTrigger asChild>
                                <AppButton>Confirm</AppButton>
                            </Dialog.ActionTrigger>
                        </Dialog.Footer>

                        <Dialog.CloseTrigger asChild>
                            <CloseButton
                                position="absolute"
                                top="4"
                                right="4"
                                size="sm"
                            />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Dialog.Root>

            <CodeHint
                code={`<Dialog.Root>
    <Dialog.Trigger asChild>
        <AppButton>
            Open Dialog
        </AppButton>
    </Dialog.Trigger>

    <Dialog.Positioner>
        <Dialog.Content>
            ...
        </Dialog.Content>
    </Dialog.Positioner>
</Dialog.Root>`}
            />
        </DemoCard>
    );
}

export default DialogShowcase;
