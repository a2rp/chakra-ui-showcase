import { Avatar, Box, HoverCard, HStack, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function HoverCardShowcase() {
    return (
        <DemoCard
            title="Hover Card"
            text="Hover Card displays supplementary information when the pointer rests over a trigger."
        >
            <HoverCard.Root>
                <HoverCard.Trigger asChild>
                    <Text
                        as="span"
                        display="inline-block"
                        color="teal.500"
                        fontWeight="bold"
                        cursor="pointer"
                        textDecoration="underline"
                        textUnderlineOffset="4px"
                    >
                        Hover over this profile
                    </Text>
                </HoverCard.Trigger>

                <HoverCard.Positioner>
                    <HoverCard.Content>
                        <HoverCard.Arrow>
                            <HoverCard.ArrowTip />
                        </HoverCard.Arrow>

                        <Box p="4">
                            <HStack gap="4" align="flex-start">
                                <Avatar.Root>
                                    <Avatar.Fallback name="Chakra Developer" />
                                </Avatar.Root>

                                <Stack gap="1">
                                    <Text fontWeight="bold">
                                        Chakra Developer
                                    </Text>

                                    <Text color="teal.500" fontSize="sm">
                                        Frontend Engineer
                                    </Text>

                                    <Text
                                        maxW="260px"
                                        color="fg.muted"
                                        fontSize="sm"
                                        lineHeight="1.7"
                                    >
                                        Builds reusable and accessible
                                        interfaces using React and Chakra UI.
                                    </Text>
                                </Stack>
                            </HStack>
                        </Box>
                    </HoverCard.Content>
                </HoverCard.Positioner>
            </HoverCard.Root>

            <CodeHint
                code={`<HoverCard.Root>
    <HoverCard.Trigger asChild>
        <Text>Hover over this profile</Text>
    </HoverCard.Trigger>

    <HoverCard.Positioner>
        <HoverCard.Content>
            Profile information
        </HoverCard.Content>
    </HoverCard.Positioner>
</HoverCard.Root>`}
            />
        </DemoCard>
    );
}

export default HoverCardShowcase;
