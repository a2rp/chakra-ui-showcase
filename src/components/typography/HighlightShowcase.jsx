import { Highlight, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function HighlightShowcase() {
    return (
        <DemoCard
            title="Highlight"
            text="Highlight emphasizes specific words inside larger pieces of text."
        >
            <Stack gap="5">
                <Text fontSize="lg" lineHeight="1.8">
                    <Highlight
                        query="Chakra UI"
                        styles={{
                            px: "2",
                            py: "1",
                            bg: "teal.500",
                            color: "white",
                            borderRadius: "md",
                        }}
                    >
                        Chakra UI helps build reusable and accessible React
                        interfaces.
                    </Highlight>
                </Text>

                <Text fontSize="lg" lineHeight="1.8">
                    <Highlight
                        query={["responsive", "accessible"]}
                        styles={{
                            color: "teal.500",
                            fontWeight: "bold",
                        }}
                    >
                        Build responsive and accessible frontend interfaces.
                    </Highlight>
                </Text>
            </Stack>

            <CodeHint
                code={`<Highlight
    query="Chakra UI"
    styles={{
        bg: "teal.500",
        color: "white",
    }}
>
    Chakra UI example
</Highlight>`}
            />
        </DemoCard>
    );
}

export default HighlightShowcase;
