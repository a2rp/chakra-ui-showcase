import { Box, Code, Text } from "@chakra-ui/react";

function CodeHint({ code }) {
    return (
        <Box
            mt="6"
            p="4"
            bg="bg.subtle"
            border="1px solid"
            borderColor="border"
            borderRadius="lg"
        >
            <Text mb="3" fontSize="sm" fontWeight="bold" color="fg.muted">
                Code Hint
            </Text>

            <Code
                display="block"
                whiteSpace="pre-wrap"
                px="4"
                py="3"
                borderRadius="md"
                colorPalette="teal"
                overflowX="auto"
            >
                {code}
            </Code>
        </Box>
    );
}

export default CodeHint;
