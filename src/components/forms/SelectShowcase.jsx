import { Field, Stack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";
import AppSelect from "../ui/AppSelect";

function SelectShowcase() {
    return (
        <DemoCard
            title="Native Select"
            text="Native Select provides a familiar browser-native selection control styled through Chakra UI."
        >
            <Stack gap="6">
                <Field.Root>
                    <Field.Label>Framework</Field.Label>

                    <AppSelect defaultValue="">
                        <option value="" disabled>
                            Select a framework
                        </option>

                        <option value="react">React</option>

                        <option value="vue">Vue</option>

                        <option value="angular">Angular</option>

                        <option value="svelte">Svelte</option>
                    </AppSelect>
                </Field.Root>

                <AppSelect disabled>
                    <option>Disabled select</option>
                </AppSelect>
            </Stack>

            <CodeHint
                code={`<AppSelect defaultValue="">
    <option value="" disabled>
        Select a framework
    </option>

    <option value="react">
        React
    </option>
</AppSelect>`}
            />
        </DemoCard>
    );
}

export default SelectShowcase;
