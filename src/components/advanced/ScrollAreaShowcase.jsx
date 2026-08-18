import { Box, ScrollArea, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const items = Array.from(
    {
        length: 20,
    },
    (_, index) => `Scrollable Item ${index + 1}`,
);

function ScrollAreaShowcase() {
    return (
        <DemoCard
            title="Scroll Area"
            text="Scroll Area creates controlled scrollable regions with Chakra-styled scrollbars."
        >
            <ScrollArea.Root
                height="300px"
                variant="always"
                colorPalette="teal"
            >
                <ScrollArea.Viewport>
                    <ScrollArea.Content>
                        <Stack gap="3">
                            {items.map((item) => (
                                <Box
                                    key={item}
                                    p="4"
                                    bg="bg.subtle"
                                    border="1px solid"
                                    borderColor="border"
                                    borderRadius="lg"
                                >
                                    <Text color="fg">{item}</Text>
                                </Box>
                            ))}
                        </Stack>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>

                <ScrollArea.Scrollbar>
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>

            <CodeHint
                code={`<ScrollArea.Root height="300px">
    <ScrollArea.Viewport>
        <ScrollArea.Content>
            Scrollable content
        </ScrollArea.Content>
    </ScrollArea.Viewport>

    <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
</ScrollArea.Root>`}
            />
        </DemoCard>
    );
}

export default ScrollAreaShowcase;
