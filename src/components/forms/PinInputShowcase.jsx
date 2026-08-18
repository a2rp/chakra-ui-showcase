import { PinInput, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function PinInputShowcase() {
    return (
        <DemoCard
            title="Pin Input"
            text="Pin Input is useful for OTP codes, verification codes, and short character sequences."
        >
            <Stack gap="7">
                <Stack gap="3">
                    <Text color="fg.muted">Verification Code</Text>

                    <PinInput.Root otp>
                        <PinInput.HiddenInput />

                        <PinInput.Control>
                            {[0, 1, 2, 3].map((index) => (
                                <PinInput.Input key={index} index={index} />
                            ))}
                        </PinInput.Control>
                    </PinInput.Root>
                </Stack>

                <Stack gap="3">
                    <Text color="fg.muted">Masked PIN</Text>

                    <PinInput.Root mask>
                        <PinInput.HiddenInput />

                        <PinInput.Control>
                            {[0, 1, 2, 3].map((index) => (
                                <PinInput.Input key={index} index={index} />
                            ))}
                        </PinInput.Control>
                    </PinInput.Root>
                </Stack>
            </Stack>

            <CodeHint
                code={`<PinInput.Root otp>
    <PinInput.HiddenInput />

    <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
    </PinInput.Control>
</PinInput.Root>`}
            />
        </DemoCard>
    );
}

export default PinInputShowcase;
