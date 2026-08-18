import { Accordion, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const items = [
    {
        value: "components",
        title: "Components",
        text: "Explore reusable UI components such as buttons, forms, cards, alerts, dialogs, tables, and navigation.",
    },
    {
        value: "patterns",
        title: "Patterns",
        text: "Combine multiple components to create practical application interfaces and reusable frontend patterns.",
    },
    {
        value: "accessibility",
        title: "Accessibility",
        text: "Chakra UI components provide accessible interaction patterns and sensible semantic defaults.",
    },
];

function MultipleAccordionShowcase() {
    return (
        <DemoCard
            title="Multiple Accordion Items"
            text="Accordion can allow multiple sections to remain open at the same time."
        >
            <Accordion.Root multiple defaultValue={["components", "patterns"]}>
                {items.map((item) => (
                    <Accordion.Item key={item.value} value={item.value}>
                        <Accordion.ItemTrigger px="4" py="3">
                            <Text
                                flex="1"
                                textAlign="left"
                                fontWeight="bold"
                                color="fg"
                            >
                                {item.title}
                            </Text>

                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>

                        <Accordion.ItemContent>
                            <Accordion.ItemBody px="4" pb="4">
                                <Text color="fg.muted" lineHeight="1.8">
                                    {item.text}
                                </Text>
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>

            <CodeHint
                code={`<Accordion.Root
    multiple
    defaultValue={["components", "patterns"]}
>
    ...
</Accordion.Root>`}
            />
        </DemoCard>
    );
}

export default MultipleAccordionShowcase;
