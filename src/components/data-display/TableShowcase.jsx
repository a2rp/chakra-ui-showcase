import { Table } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppBadge from "../ui/AppBadge";

const products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: "$999",
        status: "In Stock",
    },
    {
        name: "Keyboard",
        category: "Accessories",
        price: "$79",
        status: "In Stock",
    },
    {
        name: "Monitor",
        category: "Electronics",
        price: "$349",
        status: "Low Stock",
    },
    {
        name: "Desk Chair",
        category: "Furniture",
        price: "$220",
        status: "Out of Stock",
    },
];

function TableShowcase() {
    return (
        <DemoCard
            title="Table"
            text="Table displays structured information across rows and columns."
        >
            <Table.ScrollArea
                border="1px solid"
                borderColor="border"
                borderRadius="xl"
                overflow="hidden"
            >
                <Table.Root bg="bg">
                    <Table.Header>
                        <Table.Row bg="bg.subtle">
                            {["Product", "Category", "Price", "Status"].map(
                                (item) => (
                                    <Table.ColumnHeader
                                        key={item}
                                        px="5"
                                        py="4"
                                        color="fg"
                                        fontWeight="bold"
                                    >
                                        {item}
                                    </Table.ColumnHeader>
                                ),
                            )}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {products.map((product) => (
                            <Table.Row
                                key={product.name}
                                bg="bg"
                                _hover={{
                                    bg: "bg.subtle",
                                }}
                            >
                                <Table.Cell
                                    px="5"
                                    py="4"
                                    color="fg"
                                    fontWeight="medium"
                                >
                                    {product.name}
                                </Table.Cell>

                                <Table.Cell px="5" py="4" color="fg.muted">
                                    {product.category}
                                </Table.Cell>

                                <Table.Cell px="5" py="4" color="fg">
                                    {product.price}
                                </Table.Cell>

                                <Table.Cell px="5" py="4">
                                    <AppBadge
                                        colorPalette={
                                            product.status === "In Stock"
                                                ? "green"
                                                : product.status === "Low Stock"
                                                  ? "orange"
                                                  : "red"
                                        }
                                    >
                                        {product.status}
                                    </AppBadge>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Table.ScrollArea>

            <CodeHint
                code={`<Table.Row>
    <Table.Cell>Keyboard</Table.Cell>
    <Table.Cell>Accessories</Table.Cell>
    <Table.Cell>$79</Table.Cell>
</Table.Row>`}
            />
        </DemoCard>
    );
}

export default TableShowcase;
