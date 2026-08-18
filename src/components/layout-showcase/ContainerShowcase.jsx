import { Box, Container, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";

function ContainerShowcase() {
    return (
        <DemoCard
            title="Container"
            text="Container constrains content to a maximum width while keeping it centered within the available space."
        >
            <Box
                bg="bg.subtle"
                border="1px solid"
                borderColor="border"
                borderRadius="xl"
                py="6"
            >
                <Container maxW="3xl" px="5">
                    <Stack
                        gap="3"
                        p="6"
                        bg="bg"
                        border="1px solid"
                        borderColor="border"
                        borderRadius="lg"
                    >
                        <Text color="fg" fontWeight="bold">
                            Centered Container Content
                        </Text>

                        <Text color="fg.muted" lineHeight="1.8">
                            This content has a maximum width and remains
                            centered as the available screen width changes.
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </DemoCard>
    );
}

export default ContainerShowcase;
