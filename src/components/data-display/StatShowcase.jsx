import { SimpleGrid, Stat } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const stats = [
    {
        label: "Projects",
        value: "48",
        help: "+6 this month",
        palette: "teal",
    },
    {
        label: "Visitors",
        value: "24.8K",
        help: "+12.4%",
        palette: "green",
    },
    {
        label: "Downloads",
        value: "8.2K",
        help: "+8.1%",
        palette: "blue",
    },
    {
        label: "Issues",
        value: "14",
        help: "-4 this week",
        palette: "orange",
    },
];

function StatShowcase() {
    return (
        <DemoCard
            title="Stat"
            text="Stat presents important numerical information with supporting labels and context."
        >
            <SimpleGrid
                columns={{
                    base: 1,
                    sm: 2,
                    xl: 4,
                }}
                gap="5"
            >
                {stats.map((item) => (
                    <Stat.Root
                        key={item.label}
                        p="5"
                        bg="bg.subtle"
                        border="1px solid"
                        borderColor="border"
                        borderRadius="xl"
                    >
                        <Stat.Label>{item.label}</Stat.Label>

                        <Stat.ValueText mt="2" fontSize="3xl">
                            {item.value}
                        </Stat.ValueText>

                        <Stat.HelpText color={`${item.palette}.500`}>
                            {item.help}
                        </Stat.HelpText>
                    </Stat.Root>
                ))}
            </SimpleGrid>

            <CodeHint
                code={`<Stat.Root>
    <Stat.Label>Projects</Stat.Label>
    <Stat.ValueText>48</Stat.ValueText>
</Stat.Root>`}
            />
        </DemoCard>
    );
}

export default StatShowcase;
