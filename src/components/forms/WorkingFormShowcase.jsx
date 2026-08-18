import { useState } from "react";
import { Alert, Box, Field, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";
import AppInput from "../ui/AppInput";
import AppSelect from "../ui/AppSelect";
import AppTextarea from "../ui/AppTextarea";

function WorkingFormShowcase() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        message: "",
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmittedData(formData);
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            role: "",
            message: "",
        });

        setSubmittedData(null);
    };

    return (
        <DemoCard
            title="Working Form"
            text="This example combines reusable Chakra-based form controls with real React state and submission behavior."
        >
            <Stack gap="8">
                <Box as="form" onSubmit={handleSubmit}>
                    <Stack gap="5">
                        <Field.Root required>
                            <Field.Label>
                                Name
                                <Field.RequiredIndicator />
                            </Field.Label>

                            <AppInput
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </Field.Root>

                        <Field.Root required>
                            <Field.Label>
                                Email
                                <Field.RequiredIndicator />
                            </Field.Label>

                            <AppInput
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                            />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Role</Field.Label>

                            <AppSelect
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="">Select role</option>

                                <option value="frontend">
                                    Frontend Developer
                                </option>

                                <option value="backend">
                                    Backend Developer
                                </option>

                                <option value="fullstack">
                                    Full-Stack Developer
                                </option>
                            </AppSelect>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Message</Field.Label>

                            <AppTextarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us something..."
                                minH="120px"
                            />
                        </Field.Root>

                        <Stack
                            direction={{
                                base: "column",
                                sm: "row",
                            }}
                            gap="3"
                        >
                            <AppButton type="submit">Submit Form</AppButton>

                            <AppButton
                                type="button"
                                variant="outline"
                                onClick={handleReset}
                            >
                                Reset
                            </AppButton>
                        </Stack>
                    </Stack>
                </Box>

                {submittedData && (
                    <Alert.Root
                        status="success"
                        px="4"
                        py="3"
                        borderRadius="lg"
                    >
                        <Alert.Indicator />

                        <Alert.Content>
                            <Alert.Title>Form Submitted</Alert.Title>

                            <Alert.Description>
                                The frontend form state was submitted
                                successfully.
                            </Alert.Description>
                        </Alert.Content>
                    </Alert.Root>
                )}

                {submittedData && (
                    <Box
                        p="5"
                        bg="bg.subtle"
                        border="1px solid"
                        borderColor="border"
                        borderRadius="xl"
                    >
                        <Stack gap="2" color="fg.muted" fontSize="sm">
                            <Text>Name: {submittedData.name}</Text>

                            <Text>Email: {submittedData.email}</Text>

                            <Text>
                                Role: {submittedData.role || "Not selected"}
                            </Text>

                            <Text>
                                Message: {submittedData.message || "Empty"}
                            </Text>
                        </Stack>
                    </Box>
                )}
            </Stack>

            <CodeHint
                code={`const [formData, setFormData] = useState({
    name: "",
    email: "",
});

<AppInput
    name="name"
    value={formData.name}
    onChange={handleChange}
/>

<AppButton type="submit">
    Submit Form
</AppButton>`}
            />
        </DemoCard>
    );
}

export default WorkingFormShowcase;
