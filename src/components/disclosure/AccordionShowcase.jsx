import { Accordion, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const items = [
    {
        value: "getting-started",
        title: "Getting Started",
        text: "Install Chakra UI, configure ChakraProvider, and begin composing components using Chakra style props.",
    },
    {
        value: "styling",
        title: "Styling",
        text: "Use style props, semantic tokens, responsive values, and component variants to build consistent interfaces.",
    },
    {
        value: "responsive",
        title: "Responsive Design",
        text: "Responsive objects let you change layout and styling at different breakpoints without writing manual media queries.",
    },
];

function AccordionShowcase() {
    return (
        <DemoCard
            title="Accordion"
            text="Accordion displays expandable content sections while keeping the interface compact."
        >
            <Accordion.Root defaultValue={["getting-started"]} collapsible>
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
                code={`<Accordion.Root collapsible>
    <Accordion.Item value="item-1">
        <Accordion.ItemTrigger>
            Section title
            <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>

        <Accordion.ItemContent>
            <Accordion.ItemBody>
                Section content
            </Accordion.ItemBody>
        </Accordion.ItemContent>
    </Accordion.Item>
</Accordion.Root>`}
            />
        </DemoCard>
    );
}

export default AccordionShowcase;
