import { Grid, GridItem, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function GridShowcase() {
    return (
        <DemoCard
            title="Grid"
            text="Grid creates structured two-dimensional layouts using rows, columns, gaps, and responsive values."
        >
            <Grid
                templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                }}
                gap="4"
            >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <GridItem
                        key={item}
                        minH="100px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="bg.subtle"
                        border="1px solid"
                        borderColor="border"
                        borderRadius="xl"
                    >
                        <Text color="fg" fontWeight="bold">
                            Grid Item {item}
                        </Text>
                    </GridItem>
                ))}
            </Grid>
            <CodeHint
                code={`<Grid
    templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
    }}
    gap="4"
>
    ...
</Grid>`}
            />
        </DemoCard>
    );
}

export default GridShowcase;
