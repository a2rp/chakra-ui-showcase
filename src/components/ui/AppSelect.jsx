import { NativeSelect } from "@chakra-ui/react";

function AppSelect({ children, ...props }) {
    return (
        <NativeSelect.Root>
            <NativeSelect.Field
                px="4"
                color="fg"
                borderColor="border"
                _hover={{
                    borderColor: "border.emphasized",
                }}
                _focusVisible={{
                    borderColor: "teal.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
                }}
                {...props}
            >
                {children}
            </NativeSelect.Field>

            <NativeSelect.Indicator />
        </NativeSelect.Root>
    );
}

export default AppSelect;
