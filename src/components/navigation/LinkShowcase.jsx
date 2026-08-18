import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function LinkShowcase() {
    return (
        <DemoCard
            title="Link"
            text="Link provides accessible navigation to another page, resource, or external destination."
        >
            <Stack gap="6">
                <HStack gap="5" flexWrap="wrap">
                    <Link href="#" color="teal.500">
                        Default Link
                    </Link>

                    <Link href="#" color="blue.500" fontWeight="bold">
                        Bold Link
                    </Link>

                    <Link
                        href="#"
                        color="purple.500"
                        textDecoration="underline"
                        textUnderlineOffset="4px"
                    >
                        Underlined Link
                    </Link>
                </HStack>

                <Link
                    href="https://chakra-ui.com"
                    target="_blank"
                    rel="noreferrer"
                    display="inline-flex"
                    alignItems="center"
                    gap="2"
                    width="fit-content"
                    color="teal.500"
                >
                    Chakra UI Documentation
                    <LuExternalLink />
                </Link>

                <Text color="fg.muted" fontSize="sm">
                    External links should clearly communicate their destination.
                </Text>
            </Stack>

            <CodeHint
                code={`<Link
    href="https://chakra-ui.com"
    target="_blank"
>
    Chakra UI Documentation
</Link>`}
            />
        </DemoCard>
    );
}

export default LinkShowcase;
