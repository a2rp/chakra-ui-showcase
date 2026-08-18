import {
    ButtonGroup,
    IconButton,
    Pagination,
    Stack,
    Text,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function PaginationShowcase() {
    return (
        <DemoCard
            title="Pagination"
            text="Pagination lets users navigate through large collections divided into multiple pages."
        >
            <Stack gap="5">
                <Pagination.Root count={100} pageSize={10} defaultPage={1}>
                    <ButtonGroup variant="ghost" size="sm">
                        <Pagination.PrevTrigger asChild>
                            <IconButton aria-label="Previous page">
                                <LuChevronLeft />
                            </IconButton>
                        </Pagination.PrevTrigger>

                        <Pagination.Items
                            render={(page) => (
                                <IconButton
                                    variant={{
                                        base: "ghost",
                                        _selected: "outline",
                                    }}
                                >
                                    {page.value}
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
                    This example represents 100 items with 10 items per page.
                </Text>
            </Stack>

            <CodeHint
                code={`<Pagination.Root
    count={100}
    pageSize={10}
>
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
</Pagination.Root>`}
            />
        </DemoCard>
    );
}

export default PaginationShowcase;
