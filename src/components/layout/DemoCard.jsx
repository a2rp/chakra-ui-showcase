import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import AppCard from "../ui/AppCard";

function DemoCard({ title, text, children }) {
    return (
        <AppCard>
            <Stack
                gap="5"
                p={{
                    base: "5",
                    md: "6",
                }}
            >
                <Box>
                    <Heading as="h2" size="md" color="fg">
                        {title}
                    </Heading>

                    {text && (
                        <Text
                            mt="2"
                            color="fg.muted"
                            fontSize="sm"
                            lineHeight="1.8"
                        >
                            {text}
                        </Text>
                    )}
                </Box>

                <Box>{children}</Box>
            </Stack>
        </AppCard>
    );
}

export default DemoCard;
