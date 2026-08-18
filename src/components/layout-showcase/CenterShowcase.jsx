import { Center, Circle, HStack, Square, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";

function CenterShowcase() {
    return (
        <DemoCard
            title="Center"
            text="Center, Square, and Circle provide convenient primitives for centering content and creating equal-sized shapes."
        >
            <Stack gap="8">
                <Center
                    minH="140px"
                    bg="bg.subtle"
                    border="1px solid"
                    borderColor="border"
                    borderRadius="xl"
                >
                    <Text color="fg" fontWeight="bold">
                        Perfectly Centered
                    </Text>
                </Center>

                <HStack gap="5" flexWrap="wrap">
                    <Square size="100px" bg="teal.500" borderRadius="lg">
                        <Text color="white" fontWeight="bold">
                            Square
                        </Text>
                    </Square>

                    <Circle size="100px" bg="purple.500">
                        <Text color="white" fontWeight="bold">
                            Circle
                        </Text>
                    </Circle>
                </HStack>
            </Stack>
        </DemoCard>
    );
}

export default CenterShowcase;
