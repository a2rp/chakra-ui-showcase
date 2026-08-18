import { Avatar, AvatarGroup, HStack, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function AvatarShowcase() {
    return (
        <DemoCard
            title="Avatar"
            text="Avatar represents users using profile images, initials, and fallback content."
        >
            <Stack gap="7">
                <HStack gap="4" flexWrap="wrap">
                    <Avatar.Root>
                        <Avatar.Fallback name="Ashish Ranjan" />
                    </Avatar.Root>

                    <Avatar.Root>
                        <Avatar.Fallback name="John Doe" />
                    </Avatar.Root>

                    <Avatar.Root>
                        <Avatar.Fallback name="Jane Smith" />
                    </Avatar.Root>
                </HStack>

                <Stack gap="3">
                    <Text color="fg.muted" fontSize="sm" fontWeight="bold">
                        Avatar Group
                    </Text>

                    <AvatarGroup>
                        {[
                            "Ashish Ranjan",
                            "John Doe",
                            "Jane Smith",
                            "React User",
                        ].map((name) => (
                            <Avatar.Root key={name}>
                                <Avatar.Fallback name={name} />
                            </Avatar.Root>
                        ))}
                    </AvatarGroup>
                </Stack>
            </Stack>

            <CodeHint
                code={`<Avatar.Root>
    <Avatar.Fallback name="Ashish Ranjan" />
</Avatar.Root>`}
            />
        </DemoCard>
    );
}

export default AvatarShowcase;
