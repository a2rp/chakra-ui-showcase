import { Box, Heading, Text } from "@chakra-ui/react";

function SectionHeader({ title, text }) {
    return (
        <Box mb="8">
            <Heading as="h1" size="2xl" color="fg">
                {title}
            </Heading>

            {text && (
                <Text
                    mt="3"
                    maxW="800px"
                    color="fg.muted"
                    fontSize="md"
                    lineHeight="1.8"
                >
                    {text}
                </Text>
            )}
        </Box>
    );
}

export default SectionHeader;
