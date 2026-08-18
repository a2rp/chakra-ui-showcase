import { useState } from "react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function ButtonInteractionShowcase() {
    const [count, setCount] = useState(0);
    const [enabled, setEnabled] = useState(true);
    const [saving, setSaving] = useState(false);

    const handleSave = () => {
        setSaving(true);

        window.setTimeout(() => {
            setSaving(false);
        }, 1500);
    };

    return (
        <DemoCard
            title="Working Button Interactions"
            text="These examples connect Chakra UI buttons with real React state instead of showing only static styling."
        >
            <Stack gap="8">
                <Box>
                    <Text
                        mb="3"
                        color="fg.muted"
                        fontSize="sm"
                        fontWeight="bold"
                    >
                        Click Counter
                    </Text>

                    <HStack gap="4" flexWrap="wrap">
                        <AppButton
                            onClick={() => setCount((value) => value + 1)}
                        >
                            Click Me
                        </AppButton>

                        <Text color="fg">
                            Clicks:{" "}
                            <Text as="span" color="teal.500" fontWeight="bold">
                                {count}
                            </Text>
                        </Text>

                        <AppButton
                            variant="outline"
                            onClick={() => setCount(0)}
                        >
                            Reset
                        </AppButton>
                    </HStack>
                </Box>

                <Box>
                    <Text
                        mb="3"
                        color="fg.muted"
                        fontSize="sm"
                        fontWeight="bold"
                    >
                        Toggle State
                    </Text>

                    <HStack gap="4" flexWrap="wrap">
                        <AppButton
                            variant={enabled ? "success" : "danger"}
                            onClick={() => setEnabled((value) => !value)}
                        >
                            {enabled ? "Enabled" : "Disabled"}
                        </AppButton>

                        <Text color="fg.muted">
                            Current state:{" "}
                            <Text
                                as="span"
                                color={enabled ? "green.500" : "red.500"}
                                fontWeight="bold"
                            >
                                {enabled ? "Active" : "Inactive"}
                            </Text>
                        </Text>
                    </HStack>
                </Box>

                <Box>
                    <Text
                        mb="3"
                        color="fg.muted"
                        fontSize="sm"
                        fontWeight="bold"
                    >
                        Async Action
                    </Text>

                    <HStack gap="4" flexWrap="wrap">
                        <AppButton
                            colorPalette="blue"
                            loading={saving}
                            loadingText="Saving"
                            onClick={handleSave}
                        >
                            Save Changes
                        </AppButton>

                        <Text color="fg.muted">
                            {saving
                                ? "Simulating an async operation..."
                                : "Ready to save"}
                        </Text>
                    </HStack>
                </Box>
            </Stack>

            <CodeHint
                code={`const [count, setCount] = useState(0);

<AppButton
    onClick={() => setCount((value) => value + 1)}
>
    Click Me
</AppButton>`}
            />
        </DemoCard>
    );
}

export default ButtonInteractionShowcase;
