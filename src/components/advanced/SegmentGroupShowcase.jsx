import { useState } from "react";
import { SegmentGroup, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const options = [
    {
        label: "React",
        value: "react",
    },
    {
        label: "Vue",
        value: "vue",
    },
    {
        label: "Solid",
        value: "solid",
    },
];

function SegmentGroupShowcase() {
    const [value, setValue] = useState("react");

    return (
        <DemoCard
            title="Segment Group"
            text="Segment Group lets users select one option from a compact horizontal set."
        >
            <Stack gap="6">
                <SegmentGroup.Root
                    value={value}
                    onValueChange={(details) => setValue(details.value)}
                >
                    <SegmentGroup.Indicator />

                    <SegmentGroup.Items items={options} />
                </SegmentGroup.Root>

                <Text color="fg.muted">
                    Selected:{" "}
                    <Text as="span" color="teal.500" fontWeight="bold">
                        {value}
                    </Text>
                </Text>
            </Stack>

            <CodeHint
                code={`<SegmentGroup.Root
    value={value}
    onValueChange={(details) => setValue(details.value)}
>
    <SegmentGroup.Indicator />
    <SegmentGroup.Items items={options} />
</SegmentGroup.Root>`}
            />
        </DemoCard>
    );
}

export default SegmentGroupShowcase;
