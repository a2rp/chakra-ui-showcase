import { CloseButton, Drawer, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function DrawerShowcase() {
    return (
        <DemoCard
            title="Drawer"
            text="Drawer slides supporting content into view and works well for navigation, filters, settings, carts, and secondary panels."
        >
            <Drawer.Root placement="end">
                <Drawer.Trigger asChild>
                    <AppButton variant="outline">Open Drawer</AppButton>
                </Drawer.Trigger>

                <Drawer.Backdrop />

                <Drawer.Positioner>
                    <Drawer.Content maxW="420px" bg="bg" color="fg">
                        <Drawer.Header px="6" pt="6" pb="3">
                            <Drawer.Title>Project Settings</Drawer.Title>
                        </Drawer.Header>

                        <Drawer.Body px="6" py="4">
                            <Stack gap="4">
                                <Text color="fg.muted">
                                    This drawer opens from the end side.
                                </Text>

                                <Text color="fg.muted" lineHeight="1.8">
                                    It can contain forms, menus, filters, or
                                    supporting application content.
                                </Text>
                            </Stack>
                        </Drawer.Body>

                        <Drawer.Footer px="6" pt="3" pb="6" gap="3">
                            <Drawer.ActionTrigger asChild>
                                <AppButton variant="outline">Cancel</AppButton>
                            </Drawer.ActionTrigger>

                            <Drawer.ActionTrigger asChild>
                                <AppButton colorPalette="blue">Save</AppButton>
                            </Drawer.ActionTrigger>
                        </Drawer.Footer>

                        <Drawer.CloseTrigger asChild>
                            <CloseButton
                                position="absolute"
                                top="4"
                                right="4"
                                size="sm"
                            />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Drawer.Root>

            <CodeHint
                code={`<Drawer.Root placement="end">
    <Drawer.Trigger asChild>
        <AppButton variant="outline">
            Open Drawer
        </AppButton>
    </Drawer.Trigger>

    <Drawer.Positioner>
        <Drawer.Content>
            ...
        </Drawer.Content>
    </Drawer.Positioner>
</Drawer.Root>`}
            />
        </DemoCard>
    );
}

export default DrawerShowcase;
