import { HStack, ProgressCircle, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const items = [
    {
        value: 25,
        palette: "teal",
    },
    {
        value: 50,
        palette: "blue",
    },
    {
        value: 75,
        palette: "purple",
    },
    {
        value: 100,
        palette: "green",
    },
];

function ProgressCircleShowcase() {
    return (
        <DemoCard
            title="Progress Circle"
            text="Circular progress indicators provide compact visual feedback for completion values."
        >
            <HStack gap="8" flexWrap="wrap">
                {items.map((item) => (
                    <Stack key={item.value} align="center" gap="3">
                        <ProgressCircle.Root
                            value={item.value}
                            colorPalette={item.palette}
                            size="xl"
                        >
                            <ProgressCircle.Circle>
                                <ProgressCircle.Track />
                                <ProgressCircle.Range />
                            </ProgressCircle.Circle>

                            <ProgressCircle.ValueText />
                        </ProgressCircle.Root>

                        <Text color="fg.muted" fontSize="sm">
                            {item.value}%
                        </Text>
                    </Stack>
                ))}
            </HStack>

            <CodeHint
                code={`<ProgressCircle.Root value={75}>
    <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
    </ProgressCircle.Circle>

    <ProgressCircle.ValueText />
</ProgressCircle.Root>`}
            />
        </DemoCard>
    );
}

export default ProgressCircleShowcase;
