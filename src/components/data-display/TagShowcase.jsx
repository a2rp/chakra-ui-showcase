import { HStack, Stack, Tag, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function AppTag({ children, colorPalette = "teal" }) {
    return (
        <Tag.Root colorPalette={colorPalette} px="3" py="1" borderRadius="md">
            <Tag.Label>{children}</Tag.Label>
        </Tag.Root>
    );
}

function TagShowcase() {
    return (
        <DemoCard
            title="Tag"
            text="Tags are useful for categories, skills, filters, labels, and compact metadata."
        >
            <Stack gap="6">
                <HStack gap="3" flexWrap="wrap">
                    {[
                        "React",
                        "Chakra UI",
                        "JavaScript",
                        "Vite",
                        "Frontend",
                    ].map((item) => (
                        <AppTag key={item}>{item}</AppTag>
                    ))}
                </HStack>

                <Stack gap="3">
                    <Text color="fg.muted" fontSize="sm" fontWeight="bold">
                        Different Colors
                    </Text>

                    <HStack gap="3" flexWrap="wrap">
                        <AppTag colorPalette="blue">Development</AppTag>

                        <AppTag colorPalette="purple">Design</AppTag>

                        <AppTag colorPalette="orange">Learning</AppTag>

                        <AppTag colorPalette="green">Complete</AppTag>
                    </HStack>
                </Stack>
            </Stack>

            <CodeHint
                code={`<Tag.Root
    colorPalette="teal"
    px="3"
    py="1"
>
    <Tag.Label>React</Tag.Label>
</Tag.Root>`}
            />
        </DemoCard>
    );
}

export default TagShowcase;
