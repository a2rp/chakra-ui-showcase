import { Field, Stack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppTextarea from "../ui/AppTextarea";

function TextareaShowcase() {
    return (
        <DemoCard
            title="Textarea"
            text="Textarea is useful for longer user input such as descriptions, messages, feedback, and comments."
        >
            <Stack gap="6">
                <Field.Root>
                    <Field.Label>Message</Field.Label>

                    <AppTextarea
                        placeholder="Write your message..."
                        minH="140px"
                    />

                    <Field.HelperText>
                        Keep your message clear and concise.
                    </Field.HelperText>
                </Field.Root>

                <AppTextarea
                    variant="subtle"
                    placeholder="Subtle textarea"
                    minH="100px"
                />

                <AppTextarea disabled placeholder="Disabled textarea" />
            </Stack>

            <CodeHint
                code={`<AppTextarea
    placeholder="Write your message..."
    minH="140px"
/>`}
            />
        </DemoCard>
    );
}

export default TextareaShowcase;
