import { useState } from "react";
import { Alert, Box, Checkbox, Field, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";
import AppCard from "../ui/AppCard";
import AppInput from "../ui/AppInput";

function AuthExample() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <DemoCard
            title="Authentication Example"
            text="A working frontend-only login interface combining reusable inputs, checkbox, actions, card layout, and feedback."
        >
            <Box maxW="520px">
                <AppCard>
                    <Stack p="6" gap="6">
                        <Box>
                            <Text color="fg" fontSize="2xl" fontWeight="bold">
                                Welcome Back
                            </Text>

                            <Text mt="2" color="fg.muted">
                                Sign in to continue to your account.
                            </Text>
                        </Box>

                        <Box as="form" onSubmit={handleSubmit}>
                            <Stack gap="5">
                                <Field.Root required>
                                    <Field.Label>
                                        Email
                                        <Field.RequiredIndicator />
                                    </Field.Label>

                                    <AppInput
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </Field.Root>

                                <Field.Root required>
                                    <Field.Label>
                                        Password
                                        <Field.RequiredIndicator />
                                    </Field.Label>

                                    <AppInput
                                        type="password"
                                        placeholder="Enter password"
                                        required
                                    />
                                </Field.Root>

                                <Checkbox.Root colorPalette="teal">
                                    <Checkbox.HiddenInput />

                                    <Checkbox.Control>
                                        <Checkbox.Indicator />
                                    </Checkbox.Control>

                                    <Checkbox.Label>Remember me</Checkbox.Label>
                                </Checkbox.Root>

                                <AppButton type="submit" size="lg">
                                    Sign In
                                </AppButton>
                            </Stack>
                        </Box>

                        {submitted && (
                            <Alert.Root
                                status="success"
                                px="4"
                                py="3"
                                borderRadius="lg"
                            >
                                <Alert.Indicator />

                                <Alert.Content>
                                    <Alert.Title>Demo Submitted</Alert.Title>

                                    <Alert.Description>
                                        The frontend login example handled the
                                        form submission successfully.
                                    </Alert.Description>
                                </Alert.Content>
                            </Alert.Root>
                        )}

                        <Text color="fg.muted" fontSize="sm">
                            No backend or authentication service is connected.
                        </Text>
                    </Stack>
                </AppCard>
            </Box>

            <CodeHint
                code={`<Box as="form" onSubmit={handleSubmit}>
    <AppInput
        type="email"
        placeholder="you@example.com"
    />

    <AppButton type="submit">
        Sign In
    </AppButton>
</Box>`}
            />
        </DemoCard>
    );
}

export default AuthExample;
