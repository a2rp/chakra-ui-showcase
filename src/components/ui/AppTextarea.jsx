import { Textarea } from "@chakra-ui/react";

function AppTextarea(props) {
    return (
        <Textarea
            px="4"
            py="3"
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

export default AppTextarea;
