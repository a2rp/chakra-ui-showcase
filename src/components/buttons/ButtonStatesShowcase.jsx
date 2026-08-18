import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function ButtonStatesShowcase() {
    return (
        <DemoCard
            title="Button States"
            text="Buttons communicate whether an action is available, disabled, or currently processing."
        >
            <Stack gap="5">
                <HStack gap="4" flexWrap="wrap">
                    <Button colorPalette="teal" px="5">
                        Normal
                    </Button>

                    <Button colorPalette="teal" px="5" disabled>
                        Disabled
                    </Button>

                    <Button colorPalette="teal" px="5" loading>
                        Loading
                    </Button>

                    <Button
                        colorPalette="teal"
                        px="5"
                        loading
                        loadingText="Saving"
                    >
                        Save
                    </Button>
                </HStack>

                <Text color="fg.muted" fontSize="sm">
                    Loading states help prevent duplicate actions while
                    communicating progress to the user.
                </Text>
            </Stack>

            <CodeHint
                code={`<Button
    loading
    loadingText="Saving"
>
    Save
</Button>`}
            />
        </DemoCard>
    );
}

export default ButtonStatesShowcase;
