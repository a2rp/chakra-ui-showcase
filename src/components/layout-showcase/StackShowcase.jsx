import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function StackItem({ children }) {
    return (
        <Box
            px="5"
            py="4"
            bg="bg.subtle"
            border="1px solid"
            borderColor="border"
            borderRadius="lg"
        >
            <Text color="fg" fontWeight="bold">
                {children}
            </Text>
        </Box>
    );
}

function StackShowcase() {
    return (
        <DemoCard
            title="Stack"
            text="Stack, HStack, and VStack make it easy to arrange elements with consistent spacing."
        >
            <Stack gap="8">
                <Stack gap="3">
                    <Text color="fg.muted" fontSize="sm" fontWeight="bold">
                        Vertical Stack
                    </Text>

                    <VStack gap="3" align="stretch">
                        <StackItem>First Item</StackItem>
                        <StackItem>Second Item</StackItem>
                        <StackItem>Third Item</StackItem>
                    </VStack>
                </Stack>

                <Stack gap="3">
                    <Text color="fg.muted" fontSize="sm" fontWeight="bold">
                        Horizontal Stack
                    </Text>

                    <HStack gap="3" flexWrap="wrap">
                        <StackItem>First</StackItem>
                        <StackItem>Second</StackItem>
                        <StackItem>Third</StackItem>
                    </HStack>
                </Stack>
            </Stack>
            <CodeHint
                code={`<Stack gap="3">
    <Box>First</Box>
    <Box>Second</Box>
    <Box>Third</Box>
</Stack>`}
            />
        </DemoCard>
    );
}

export default StackShowcase;
