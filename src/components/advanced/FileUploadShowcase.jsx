import { FileUpload, Stack, Text } from "@chakra-ui/react";
import { LuUpload } from "react-icons/lu";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppButton from "../ui/AppButton";

function FileUploadShowcase() {
    return (
        <DemoCard
            title="File Upload"
            text="File Upload handles file selection, accepted formats, file limits, and selected-file lists."
        >
            <FileUpload.Root maxFiles={3} accept={["image/png", "image/jpeg"]}>
                <Stack gap="5" align="flex-start">
                    <FileUpload.HiddenInput />

                    <FileUpload.Trigger asChild>
                        <AppButton variant="outline">
                            <LuUpload />
                            Choose Files
                        </AppButton>
                    </FileUpload.Trigger>

                    <Text color="fg.muted" fontSize="sm">
                        PNG or JPEG. Maximum 3 files.
                    </Text>

                    <FileUpload.List />
                </Stack>
            </FileUpload.Root>

            <CodeHint
                code={`<FileUpload.Root
    maxFiles={3}
    accept={["image/png", "image/jpeg"]}
>
    <FileUpload.HiddenInput />

    <FileUpload.Trigger asChild>
        <AppButton>
            Choose Files
        </AppButton>
    </FileUpload.Trigger>

    <FileUpload.List />
</FileUpload.Root>`}
            />
        </DemoCard>
    );
}

export default FileUploadShowcase;
