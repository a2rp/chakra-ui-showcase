import { HStack, Kbd, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function Key({ children }) {
    return (
        <Kbd px="2" py="1" minW="32px" textAlign="center" borderRadius="md">
            {children}
        </Kbd>
    );
}

function KbdShowcase() {
    return (
        <DemoCard
            title="Keyboard"
            text="Kbd visually represents keyboard keys and shortcut combinations."
        >
            <Stack gap="5">
                <HStack gap="2">
                    <Text color="fg.muted">Copy:</Text>

                    <Key>Ctrl</Key>
                    <Text>+</Text>
                    <Key>C</Key>
                </HStack>

                <HStack gap="2">
                    <Text color="fg.muted">Paste:</Text>

                    <Key>Ctrl</Key>
                    <Text>+</Text>
                    <Key>V</Key>
                </HStack>

                <HStack gap="2">
                    <Text color="fg.muted">Save:</Text>

                    <Key>Ctrl</Key>
                    <Text>+</Text>
                    <Key>S</Key>
                </HStack>

                <HStack gap="2" flexWrap="wrap">
                    <Text color="fg.muted">Command Palette:</Text>

                    <Key>Ctrl</Key>
                    <Text>+</Text>
                    <Key>Shift</Key>
                    <Text>+</Text>
                    <Key>P</Key>
                </HStack>
            </Stack>

            <CodeHint
                code={`<Kbd px="2" py="1">
    Ctrl
</Kbd>`}
            />
        </DemoCard>
    );
}

export default KbdShowcase;
