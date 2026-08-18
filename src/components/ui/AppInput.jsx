import { Input } from "@chakra-ui/react";

function AppInput(props) {
    return (
        <Input
            px="4"
            color="fg"
            borderColor="border"
            _placeholder={{
                color: "fg.muted",
            }}
            _hover={{
                borderColor: "border.emphasized",
            }}
            _focusVisible={{
                borderColor: "teal.500",
                boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
            }}
            {...props}
        />
    );
}

export default AppInput;
