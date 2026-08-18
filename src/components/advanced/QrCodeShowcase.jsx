import { useState } from "react";
import { QrCode, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";
import AppInput from "../ui/AppInput";

function QrCodeShowcase() {
    const [value, setValue] = useState("https://chakra-ui.com");

    return (
        <DemoCard
            title="QR Code"
            text="QR Code generates scannable QR graphics directly from text or URL values."
        >
            <Stack gap="6" align="flex-start">
                <AppInput
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="Enter text or URL"
                    maxW="500px"
                />

                <QrCode.Root value={value || " "} size="xl">
                    <QrCode.Frame>
                        <QrCode.Pattern />
                    </QrCode.Frame>
                </QrCode.Root>

                <QrCode.Root value={value || " "} size="xl">
                    <QrCode.Frame>
                        <QrCode.Pattern />
                    </QrCode.Frame>

                    <QrCode.DownloadTrigger
                        fileName="chakra-ui-qr-code.png"
                        mimeType="image/png"
                        asChild
                    >
                        <AppButton variant="outline">
                            Download QR Code
                        </AppButton>
                    </QrCode.DownloadTrigger>
                </QrCode.Root>

                <Text color="fg.muted" fontSize="sm">
                    Update the input and the QR code changes automatically.
                </Text>
            </Stack>

            <CodeHint
                code={`<QrCode.Root value={value}>
    <QrCode.Frame>
        <QrCode.Pattern />
    </QrCode.Frame>
</QrCode.Root>`}
            />
        </DemoCard>
    );
}

export default QrCodeShowcase;
