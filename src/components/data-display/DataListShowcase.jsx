import { DataList } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const items = [
    {
        label: "Framework",
        value: "React",
    },
    {
        label: "UI Library",
        value: "Chakra UI",
    },
    {
        label: "Build Tool",
        value: "Vite",
    },
    {
        label: "Language",
        value: "JavaScript",
    },
];

function DataListShowcase() {
    return (
        <DemoCard
            title="Data List"
            text="Data List displays related label and value pairs in a structured format."
        >
            <DataList.Root>
                {items.map((item) => (
                    <DataList.Item key={item.label}>
                        <DataList.ItemLabel>{item.label}</DataList.ItemLabel>

                        <DataList.ItemValue>{item.value}</DataList.ItemValue>
                    </DataList.Item>
                ))}
            </DataList.Root>

            <CodeHint
                code={`<DataList.Item>
    <DataList.ItemLabel>
        Framework
    </DataList.ItemLabel>

    <DataList.ItemValue>
        React
    </DataList.ItemValue>
</DataList.Item>`}
            />
        </DemoCard>
    );
}

export default DataListShowcase;
