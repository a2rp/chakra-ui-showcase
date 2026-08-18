import { Alert, Stack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function AlertShowcase() {
    return (
        <DemoCard
            title="Alert"
            text="Alerts communicate important information such as success, warning, errors, and general status messages."
        >
            <Stack gap="4">
                <Alert.Root status="info" px="4" py="3" borderRadius="lg">
                    <Alert.Indicator />

                    <Alert.Content>
                        <Alert.Title>Information</Alert.Title>

                        <Alert.Description>
                            This is a general informational message.
                        </Alert.Description>
                    </Alert.Content>
                </Alert.Root>

                <Alert.Root status="success" px="4" py="3" borderRadius="lg">
                    <Alert.Indicator />

                    <Alert.Content>
                        <Alert.Title>Success</Alert.Title>

                        <Alert.Description>
                            Your changes were saved successfully.
                        </Alert.Description>
                    </Alert.Content>
                </Alert.Root>

                <Alert.Root status="warning" px="4" py="3" borderRadius="lg">
                    <Alert.Indicator />

                    <Alert.Content>
                        <Alert.Title>Warning</Alert.Title>

                        <Alert.Description>
                            Please review the information before continuing.
                        </Alert.Description>
                    </Alert.Content>
                </Alert.Root>

                <Alert.Root status="error" px="4" py="3" borderRadius="lg">
                    <Alert.Indicator />

                    <Alert.Content>
                        <Alert.Title>Error</Alert.Title>

                        <Alert.Description>
                            Something went wrong while processing the request.
                        </Alert.Description>
                    </Alert.Content>
                </Alert.Root>
            </Stack>

            <CodeHint
                code={`<Alert.Root status="success">
    <Alert.Indicator />

    <Alert.Content>
        <Alert.Title>Success</Alert.Title>
        <Alert.Description>
            Saved successfully.
        </Alert.Description>
    </Alert.Content>
</Alert.Root>`}
            />
        </DemoCard>
    );
}

export default AlertShowcase;
