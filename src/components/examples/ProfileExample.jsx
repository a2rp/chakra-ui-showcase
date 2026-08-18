import { Avatar, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppBadge from "../ui/AppBadge";
import AppButton from "../ui/AppButton";
import AppCard from "../ui/AppCard";

function ProfileExample() {
    return (
        <DemoCard
            title="Profile Example"
            text="A responsive user profile interface built from reusable Chakra UI components."
        >
            <AppCard>
                <Stack p="6" gap="7">
                    <Stack
                        direction={{
                            base: "column",
                            md: "row",
                        }}
                        gap="6"
                        align={{
                            base: "flex-start",
                            md: "center",
                        }}
                    >
                        <Avatar.Root size="2xl">
                            <Avatar.Fallback name="Chakra Developer" />
                        </Avatar.Root>

                        <Stack gap="2">
                            <Text fontSize="2xl" fontWeight="bold" color="fg">
                                Chakra Developer
                            </Text>

                            <Text color="teal.500">Frontend Engineer</Text>

                            <HStack gap="2" flexWrap="wrap">
                                <AppBadge>React</AppBadge>

                                <AppBadge colorPalette="purple">
                                    Chakra UI
                                </AppBadge>

                                <AppBadge colorPalette="blue">
                                    JavaScript
                                </AppBadge>
                            </HStack>
                        </Stack>
                    </Stack>

                    <Text maxW="760px" color="fg.muted" lineHeight="1.8">
                        Frontend developer focused on reusable interfaces,
                        responsive layouts, accessibility, and modern React
                        application architecture.
                    </Text>

                    <SimpleGrid
                        columns={{
                            base: 1,
                            sm: 3,
                        }}
                        gap="4"
                    >
                        {[
                            ["Projects", "48"],
                            ["Followers", "2.8K"],
                            ["Contributions", "1.4K"],
                        ].map(([label, value]) => (
                            <Stack
                                key={label}
                                p="4"
                                gap="1"
                                bg="bg.subtle"
                                border="1px solid"
                                borderColor="border"
                                borderRadius="lg"
                            >
                                <Text color="fg.muted" fontSize="sm">
                                    {label}
                                </Text>

                                <Text
                                    color="fg"
                                    fontSize="2xl"
                                    fontWeight="bold"
                                >
                                    {value}
                                </Text>
                            </Stack>
                        ))}
                    </SimpleGrid>

                    <HStack gap="3" flexWrap="wrap">
                        <AppButton>Follow</AppButton>

                        <AppButton variant="outline">View Profile</AppButton>
                    </HStack>
                </Stack>
            </AppCard>

            <CodeHint
                code={`<Avatar.Root size="2xl">
    <Avatar.Fallback name="Chakra Developer" />
</Avatar.Root>

<AppBadge>React</AppBadge>

<AppButton>
    Follow
</AppButton>`}
            />
        </DemoCard>
    );
}

export default ProfileExample;
