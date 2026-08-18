import { Code, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function CodeShowcase() {
    return (
        <DemoCard
            title="Code"
            text="Code displays inline commands, property names, values, and short technical references."
        >
            <Stack gap="5">
                <Text>
                    Install Chakra UI using{" "}
                    <Code px="2" py="1" borderRadius="md" colorPalette="teal">
                        npm install @chakra-ui/react
                    </Code>
                </Text>

                <Text>
                    Wrap the app with{" "}
                    <Code px="2" py="1" borderRadius="md" colorPalette="blue">
                        ChakraProvider
                    </Code>
                </Text>

                <Stack gap="3" align="flex-start">
                    <Code px="2" py="1" borderRadius="md" colorPalette="purple">
                        px="5"
                    </Code>

                    <Code px="2" py="1" borderRadius="md" colorPalette="orange">
                        borderRadius="xl"
                    </Code>

                    <Code px="2" py="1" borderRadius="md" colorPalette="green">
                        color="fg"
                    </Code>
                </Stack>
            </Stack>

            <CodeHint
                code={`<Code
    px="2"
    py="1"
    colorPalette="teal"
>
    npm install @chakra-ui/react
</Code>`}
            />
        </DemoCard>
    );
}

export default CodeShowcase;
