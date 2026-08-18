import { HStack, Spinner, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function SpinnerShowcase() {
    return (
        <DemoCard
            title="Spinner"
            text="Spinner indicates that an operation or piece of content is currently loading."
        >
            <Stack gap="7">
                <HStack gap="6" align="center" flexWrap="wrap">
                    <Spinner size="xs" />
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                    <Spinner size="xl" />
                </HStack>

                <HStack gap="6" flexWrap="wrap">
                    <Spinner color="teal.500" />
                    <Spinner color="blue.500" />
                    <Spinner color="purple.500" />
                    <Spinner color="orange.500" />
                </HStack>

                <HStack gap="3">
                    <Spinner size="sm" color="teal.500" />

                    <Text color="fg.muted">Loading your data...</Text>
                </HStack>
            </Stack>

            <CodeHint
                code={`<Spinner
    size="lg"
    color="teal.500"
/>`}
            />
        </DemoCard>
    );
}

export default SpinnerShowcase;
