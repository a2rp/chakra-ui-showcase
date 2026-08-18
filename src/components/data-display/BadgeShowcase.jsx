import { HStack, Stack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppBadge from "../ui/AppBadge";

function BadgeShowcase() {
    return (
        <DemoCard
            title="Badge"
            text="Badges display compact labels for status, categories, metadata, and small pieces of information."
        >
            <Stack gap="6">
                <HStack gap="3" flexWrap="wrap">
                    <AppBadge>Active</AppBadge>

                    <AppBadge colorPalette="green">Success</AppBadge>

                    <AppBadge colorPalette="orange">Pending</AppBadge>

                    <AppBadge colorPalette="red">Error</AppBadge>

                    <AppBadge colorPalette="purple">Premium</AppBadge>
                </HStack>

                <HStack gap="3" flexWrap="wrap">
                    <AppBadge variant="solid">Solid</AppBadge>

                    <AppBadge variant="subtle">Subtle</AppBadge>

                    <AppBadge variant="outline">Outline</AppBadge>

                    <AppBadge variant="surface">Surface</AppBadge>
                </HStack>
            </Stack>

            <CodeHint
                code={`<AppBadge colorPalette="green">
    Success
</AppBadge>`}
            />
        </DemoCard>
    );
}

export default BadgeShowcase;
