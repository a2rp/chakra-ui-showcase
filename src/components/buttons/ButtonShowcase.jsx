import { HStack, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function ButtonShowcase() {
    return (
        <DemoCard
            title="Button"
            text="Buttons trigger actions such as submitting forms, confirming operations, opening interfaces, and starting workflows."
        >
            <Stack gap="5">
                <HStack gap="4" flexWrap="wrap">
                    <AppButton>Primary Action</AppButton>

                    <AppButton colorPalette="blue">Save Changes</AppButton>

                    <AppButton colorPalette="purple">Continue</AppButton>

                    <AppButton colorPalette="orange">Upgrade</AppButton>
                </HStack>

                <Text color="fg.muted" fontSize="sm" lineHeight="1.8">
                    colorPalette changes the visual color system while the
                    reusable AppButton keeps spacing and common behavior
                    consistent.
                </Text>
            </Stack>

            <CodeHint
                code={`<AppButton colorPalette="teal">
    Primary Action
</AppButton>`}
            />
        </DemoCard>
    );
}

export default ButtonShowcase;
