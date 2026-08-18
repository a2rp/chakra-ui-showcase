import { Field, SimpleGrid, Stack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppInput from "../ui/AppInput";

function InputShowcase() {
    return (
        <DemoCard
            title="Input"
            text="Input collects single-line text values such as names, email addresses, passwords, and search terms."
        >
            <Stack gap="6">
                <Field.Root>
                    <Field.Label>Name</Field.Label>

                    <AppInput placeholder="Enter your name" />

                    <Field.HelperText>Enter your full name.</Field.HelperText>
                </Field.Root>

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 3,
                    }}
                    gap="4"
                >
                    <AppInput variant="outline" placeholder="Outline" />

                    <AppInput variant="subtle" placeholder="Subtle" />

                    <AppInput variant="flushed" placeholder="Flushed" />
                </SimpleGrid>

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 3,
                    }}
                    gap="4"
                >
                    <AppInput type="email" placeholder="Email address" />

                    <AppInput type="password" placeholder="Password" />

                    <AppInput type="search" placeholder="Search" />
                </SimpleGrid>

                <AppInput disabled placeholder="Disabled input" />
            </Stack>

            <CodeHint
                code={`<AppInput
    type="email"
    placeholder="Email address"
/>`}
            />
        </DemoCard>
    );
}

export default InputShowcase;
