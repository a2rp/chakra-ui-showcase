import { useEffect, useState } from "react";
import { Alert, Box, Progress, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function WorkingFeedbackShowcase() {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        if (status !== "loading") {
            return undefined;
        }

        const interval = window.setInterval(() => {
            setProgress((current) => {
                const next = current + 10;

                if (next >= 100) {
                    window.clearInterval(interval);
                    setStatus("success");
                    return 100;
                }

                return next;
            });
        }, 180);

        return () => {
            window.clearInterval(interval);
        };
    }, [status]);

    const handleStart = () => {
        setProgress(0);
        setStatus("loading");
    };

    const handleReset = () => {
        setProgress(0);
        setStatus("idle");
    };

    return (
        <DemoCard
            title="Working Feedback"
            text="This example combines React state with Chakra UI progress and alert components to simulate a real process."
        >
            <Stack gap="6">
                <Box>
                    <Text mb="3" color="fg.muted">
                        Process progress: {progress}%
                    </Text>

                    <Progress.Root
                        value={progress}
                        colorPalette={status === "success" ? "green" : "teal"}
                    >
                        <Progress.Track>
                            <Progress.Range />
                        </Progress.Track>
                    </Progress.Root>
                </Box>

                <Stack
                    direction={{
                        base: "column",
                        sm: "row",
                    }}
                    gap="3"
                >
                    <AppButton
                        onClick={handleStart}
                        disabled={status === "loading"}
                    >
                        Start Process
                    </AppButton>

                    <AppButton variant="outline" onClick={handleReset}>
                        Reset
                    </AppButton>
                </Stack>

                {status === "loading" && (
                    <Alert.Root status="info" px="4" py="3" borderRadius="lg">
                        <Alert.Indicator />

                        <Alert.Content>
                            <Alert.Title>Processing</Alert.Title>

                            <Alert.Description>
                                Please wait while the simulated process
                                completes.
                            </Alert.Description>
                        </Alert.Content>
                    </Alert.Root>
                )}

                {status === "success" && (
                    <Alert.Root
                        status="success"
                        px="4"
                        py="3"
                        borderRadius="lg"
                    >
                        <Alert.Indicator />

                        <Alert.Content>
                            <Alert.Title>Complete</Alert.Title>

                            <Alert.Description>
                                The simulated process completed successfully.
                            </Alert.Description>
                        </Alert.Content>
                    </Alert.Root>
                )}
            </Stack>

            <CodeHint
                code={`const [progress, setProgress] = useState(0);

<Progress.Root value={progress}>
    <Progress.Track>
        <Progress.Range />
    </Progress.Track>
</Progress.Root>`}
            />
        </DemoCard>
    );
}

export default WorkingFeedbackShowcase;
