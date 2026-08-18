import { useState } from "react";
import { RadioGroup, Stack, Text } from "@chakra-ui/react";
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
        label: "Angular",
        value: "angular",
    },
];

function RadioShowcase() {
    const [value, setValue] = useState("react");

    return (
        <DemoCard
            title="Radio Group"
            text="Radio buttons let users choose one option from a group of mutually exclusive choices."
        >
            <Stack gap="5">
                <RadioGroup.Root
                    value={value}
                    onValueChange={(details) => setValue(details.value)}
                    colorPalette="teal"
                >
                    <Stack gap="3">
                        {options.map((option) => (
                            <RadioGroup.Item
                                key={option.value}
                                value={option.value}
                            >
                                <RadioGroup.ItemHiddenInput />
                                <RadioGroup.ItemIndicator />

                                <RadioGroup.ItemText>
                                    {option.label}
                                </RadioGroup.ItemText>
                            </RadioGroup.Item>
                        ))}
                    </Stack>
                </RadioGroup.Root>

                <Text color="fg.muted">
                    Selected:{" "}
                    <Text as="span" color="teal.500" fontWeight="bold">
                        {value}
                    </Text>
                </Text>
            </Stack>

            <CodeHint
                code={`<RadioGroup.Root
    value={value}
    onValueChange={(details) => setValue(details.value)}
>
    ...
</RadioGroup.Root>`}
            />
        </DemoCard>
    );
}

export default RadioShowcase;
