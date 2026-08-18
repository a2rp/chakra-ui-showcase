import { Progress, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const items = [
    {
        label: "Upload",
        value: 35,
        palette: "teal",
    },
    {
        label: "Installation",
        value: 70,
        palette: "blue",
    },
    {
        label: "Complete",
        value: 90,
        palette: "green",
    },
];

function ProgressShowcase() {
    return (
        <DemoCard
            title="Progress"
            text="Progress indicators show how much of a task or process has been completed."
        >
            <Stack gap="7">
                {items.map((item) => (
                    <Stack key={item.label} gap="3">
                        <Text color="fg.muted">
                            {item.label}: {item.value}%
                        </Text>

                        <Progress.Root
                            value={item.value}
                            colorPalette={item.palette}
                        >
                            <Progress.Track>
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                    </Stack>
                ))}
            </Stack>

            <CodeHint
                code={`<Progress.Root
    value={70}
    colorPalette="blue"
>
    <Progress.Track>
        <Progress.Range />
    </Progress.Track>
</Progress.Root>`}
            />
        </DemoCard>
    );
}

export default ProgressShowcase;
