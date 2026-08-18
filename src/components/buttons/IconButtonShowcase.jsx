import { HStack, Stack, Text } from "@chakra-ui/react";
import {
    LuBell,
    LuHeart,
    LuSearch,
    LuSettings,
    LuTrash2,
} from "react-icons/lu";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppIconButton from "../ui/AppIconButton";

function IconButtonShowcase() {
    return (
        <DemoCard
            title="Icon Button"
            text="Icon buttons provide compact actions when a familiar icon can clearly communicate the intended behavior."
        >
            <Stack gap="5">
                <HStack gap="4" flexWrap="wrap">
                    <AppIconButton aria-label="Search" variant="primary">
                        <LuSearch />
                    </AppIconButton>

                    <AppIconButton aria-label="Notifications" variant="outline">
                        <LuBell />
                    </AppIconButton>

                    <AppIconButton aria-label="Favorite" variant="ghost">
                        <LuHeart />
                    </AppIconButton>

                    <AppIconButton aria-label="Settings" variant="ghost">
                        <LuSettings />
                    </AppIconButton>

                    <AppIconButton aria-label="Delete" variant="danger">
                        <LuTrash2 />
                    </AppIconButton>
                </HStack>

                <Text color="fg.muted" fontSize="sm" lineHeight="1.8">
                    Icon-only controls should include an aria-label so their
                    purpose remains accessible.
                </Text>
            </Stack>

            <CodeHint
                code={`<AppIconButton
    aria-label="Search"
    variant="primary"
>
    <LuSearch />
</AppIconButton>`}
            />
        </DemoCard>
    );
}

export default IconButtonShowcase;
