import { Menu } from "@chakra-ui/react";
import {
    LuCopy,
    LuDownload,
    LuPencil,
    LuShare2,
    LuTrash2,
} from "react-icons/lu";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function MenuShowcase() {
    return (
        <DemoCard
            title="Menu"
            text="Menu provides a compact list of actions or options from an interactive trigger."
        >
            <Menu.Root>
                <Menu.Trigger asChild>
                    <AppButton variant="outline">Open Actions</AppButton>
                </Menu.Trigger>

                <Menu.Positioner>
                    <Menu.Content
                        minW="220px"
                        p="2"
                        bg="bg"
                        color="fg"
                        border="1px solid"
                        borderColor="border"
                        borderRadius="xl"
                        boxShadow="xl"
                    >
                        <Menu.Item
                            value="edit"
                            px="4"
                            py="3"
                            gap="3"
                            borderRadius="md"
                            cursor="pointer"
                        >
                            <LuPencil />
                            Edit
                        </Menu.Item>

                        <Menu.Item
                            value="copy"
                            px="4"
                            py="3"
                            gap="3"
                            borderRadius="md"
                            cursor="pointer"
                        >
                            <LuCopy />
                            Duplicate
                        </Menu.Item>

                        <Menu.Item
                            value="share"
                            px="4"
                            py="3"
                            gap="3"
                            borderRadius="md"
                            cursor="pointer"
                        >
                            <LuShare2 />
                            Share
                        </Menu.Item>

                        <Menu.Item
                            value="download"
                            px="4"
                            py="3"
                            gap="3"
                            borderRadius="md"
                            cursor="pointer"
                        >
                            <LuDownload />
                            Download
                        </Menu.Item>

                        <Menu.Separator my="2" borderColor="border" />

                        <Menu.Item
                            value="delete"
                            px="4"
                            py="3"
                            gap="3"
                            borderRadius="md"
                            color="red.500"
                            cursor="pointer"
                            _highlighted={{
                                bg: "red.subtle",
                                color: "red.fg",
                            }}
                        >
                            <LuTrash2 />
                            Delete
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Menu.Root>

            <CodeHint
                code={`<Menu.Root>
    <Menu.Trigger asChild>
        <AppButton variant="outline">
            Open Actions
        </AppButton>
    </Menu.Trigger>

    <Menu.Positioner>
        <Menu.Content>
            <Menu.Item value="edit">
                Edit
            </Menu.Item>
        </Menu.Content>
    </Menu.Positioner>
</Menu.Root>`}
            />
        </DemoCard>
    );
}

export default MenuShowcase;
