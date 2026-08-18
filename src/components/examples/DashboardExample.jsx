import {
    Badge,
    Box,
    Card,
    HStack,
    SimpleGrid,
    Stack,
    Stat,
    Text,
} from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";
import AppCard from "../ui/AppCard";

const stats = [
    {
        label: "Revenue",
        value: "$24.8K",
        help: "+12.4%",
        palette: "green",
    },
    {
        label: "Orders",
        value: "1,248",
        help: "+8.2%",
        palette: "teal",
    },
    {
        label: "Customers",
        value: "834",
        help: "+5.7%",
        palette: "blue",
    },
];

const activities = [
    {
        title: "New order received",
        time: "2 minutes ago",
        status: "New",
        palette: "teal",
    },
    {
        title: "Payment completed",
        time: "18 minutes ago",
        status: "Paid",
        palette: "green",
    },
    {
        title: "Refund requested",
        time: "1 hour ago",
        status: "Review",
        palette: "orange",
    },
];

function DashboardExample() {
    return (
        <DemoCard
            title="Dashboard Example"
            text="A compact dashboard combining statistics, cards, badges, responsive grids, and actions."
        >
            <Stack gap="6">
                <HStack justify="space-between" gap="4" flexWrap="wrap">
                    <Box>
                        <Text fontSize="xl" fontWeight="bold" color="fg">
                            Business Overview
                        </Text>

                        <Text mt="1" color="fg.muted" fontSize="sm">
                            Performance summary for this month
                        </Text>
                    </Box>

                    <AppButton>View Report</AppButton>
                </HStack>

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 3,
                    }}
                    gap="4"
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

                <AppCard>
                    <Card.Header px="6" pt="6" pb="3">
                        <Card.Title>Recent Activity</Card.Title>

                        <Card.Description>
                            Latest account and order updates.
                        </Card.Description>
                    </Card.Header>

                    <Card.Body px="6" pb="6">
                        <Stack gap="4">
                            {activities.map((item) => (
                                <HStack
                                    key={item.title}
                                    justify="space-between"
                                    gap="4"
                                    pb="4"
                                    borderBottom="1px solid"
                                    borderColor="border"
                                >
                                    <Box>
                                        <Text color="fg" fontWeight="bold">
                                            {item.title}
                                        </Text>

                                        <Text
                                            mt="1"
                                            color="fg.muted"
                                            fontSize="sm"
                                        >
                                            {item.time}
                                        </Text>
                                    </Box>

                                    <Badge
                                        colorPalette={item.palette}
                                        px="3"
                                        py="1"
                                        borderRadius="md"
                                    >
                                        {item.status}
                                    </Badge>
                                </HStack>
                            ))}
                        </Stack>
                    </Card.Body>
                </AppCard>
            </Stack>

            <CodeHint
                code={`<SimpleGrid columns={{ base: 1, md: 3 }}>
    <Stat.Root>
        <Stat.Label>Revenue</Stat.Label>
        <Stat.ValueText>$24.8K</Stat.ValueText>
    </Stat.Root>
</SimpleGrid>`}
            />
        </DemoCard>
    );
}

export default DashboardExample;
