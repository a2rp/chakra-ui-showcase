import { Heading, Stack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function HeadingShowcase() {
    return (
        <DemoCard
            title="Heading"
            text="Heading creates clear content hierarchy using semantic heading elements and size tokens."
        >
            <Stack gap="4">
                <Heading size="4xl">Heading 4XL</Heading>

                <Heading size="3xl">Heading 3XL</Heading>

                <Heading size="2xl">Heading 2XL</Heading>

                <Heading size="xl">Heading XL</Heading>

                <Heading size="lg">Heading Large</Heading>

                <Heading size="md">Heading Medium</Heading>

                <Heading size="sm">Heading Small</Heading>
            </Stack>

            <CodeHint
                code={`<Heading size="2xl">
    Heading 2XL
</Heading>`}
            />
        </DemoCard>
    );
}

export default HeadingShowcase;
