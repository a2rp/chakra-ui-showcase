import { useState } from "react";
import {
    Box,
    ButtonGroup,
    IconButton,
    Pagination,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const items = Array.from(
    {
        length: 24,
    },
    (_, index) => ({
        id: index + 1,
        title: `Project ${index + 1}`,
    }),
);

const pageSize = 6;

function WorkingPaginationShowcase() {
    const [page, setPage] = useState(1);

    const startIndex = (page - 1) * pageSize;

    const visibleItems = items.slice(startIndex, startIndex + pageSize);

    return (
        <DemoCard
            title="Working Pagination"
            text="This example connects Chakra UI Pagination with React state to control a real list."
        >
            <Stack gap="7">
                <SimpleGrid
                    columns={{
                        base: 1,
                        sm: 2,
                        lg: 3,
                    }}
                    gap="4"
                >
                    {visibleItems.map((item) => (
                        <Box
                            key={item.id}
                            p="5"
                            bg="bg.subtle"
                            border="1px solid"
                            borderColor="border"
                            borderRadius="xl"
                        >
                            <Text color="fg" fontWeight="bold">
                                {item.title}
                            </Text>

                            <Text mt="2" color="fg.muted" fontSize="sm">
                                Item #{item.id}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>

                <Pagination.Root
                    count={items.length}
                    pageSize={pageSize}
                    page={page}
                    onPageChange={(details) => setPage(details.page)}
                >
                    <ButtonGroup variant="ghost" size="sm" flexWrap="wrap">
                        <Pagination.PrevTrigger asChild>
                            <IconButton aria-label="Previous page">
                                <LuChevronLeft />
                            </IconButton>
                        </Pagination.PrevTrigger>

                        <Pagination.Items
                            render={(item) => (
                                <IconButton
                                    colorPalette="teal"
                                    variant={{
                                        base: "ghost",
                                        _selected: "solid",
                                    }}
                                >
                                    {item.value}
                                </IconButton>
                            )}
                        />

                        <Pagination.NextTrigger asChild>
                            <IconButton aria-label="Next page">
                                <LuChevronRight />
                            </IconButton>
                        </Pagination.NextTrigger>
                    </ButtonGroup>
                </Pagination.Root>

                <Text color="fg.muted" fontSize="sm">
                    Current page:{" "}
                    <Text as="span" color="teal.500" fontWeight="bold">
                        {page}
                    </Text>
                </Text>
            </Stack>

            <CodeHint
                code={`const [page, setPage] = useState(1);

<Pagination.Root
    count={items.length}
    pageSize={6}
    page={page}
    onPageChange={(details) => setPage(details.page)}
>
    ...
</Pagination.Root>`}
            />
        </DemoCard>
    );
}

export default WorkingPaginationShowcase;
