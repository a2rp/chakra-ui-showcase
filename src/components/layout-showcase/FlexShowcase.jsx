import { Box, Flex, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function FlexShowcase() {
    return (
        <DemoCard
            title="Flex"
            text="Flex provides a convenient way to create flexible horizontal and vertical layouts."
        >
            <Flex
                direction={{
                    base: "column",
                    md: "row",
                }}
                gap="4"
            >
                {[1, 2, 3].map((item) => (
                    <Box
                        key={item}
                        flex="1"
                        minH="100px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="bg.subtle"
                        border="1px solid"
                        borderColor="border"
                        borderRadius="xl"
                    >
                        <Text color="fg" fontWeight="bold">
                            Flex Item {item}
                        </Text>
                    </Box>
                ))}
            </Flex>
            <CodeHint
                code={`<Flex
    direction={{
        base: "column",
        md: "row",
    }}
    gap="4"
>
    ...
</Flex>`}
            />
        </DemoCard>
    );
}

export default FlexShowcase;
