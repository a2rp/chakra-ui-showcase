import { IconButton } from "@chakra-ui/react";

function AppIconButton({ variant = "ghost", children, ...props }) {
    const variants = {
        ghost: {
            variant: "ghost",
            color: "fg.muted",
            _hover: {
                bg: "bg.subtle",
                color: "fg",
            },
        },

        outline: {
            variant: "outline",
            color: "fg",
            borderColor: "border",
            _hover: {
                bg: "bg.subtle",
                borderColor: "border.emphasized",
            },
        },

        primary: {
            colorPalette: "teal",
        },

        danger: {
            colorPalette: "red",
        },
    };

    return (
        <IconButton borderRadius="md" {...variants[variant]} {...props}>
            {children}
        </IconButton>
    );
}

export default AppIconButton;
