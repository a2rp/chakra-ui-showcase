import { Button } from "@chakra-ui/react";

function AppButton({ variant = "primary", children, ...props }) {
    const variants = {
        primary: {
            colorPalette: "teal",
            px: "5",
        },

        outline: {
            variant: "outline",
            px: "5",
            color: "fg",
            borderColor: "border",
            _hover: {
                bg: "bg.inverted",
                color: "fg.inverted",
                borderColor: "bg.inverted",
            },
        },

        success: {
            colorPalette: "green",
            px: "5",
        },

        danger: {
            colorPalette: "red",
            px: "5",
        },

        ghost: {
            variant: "ghost",
            px: "5",
            color: "fg.muted",
            _hover: {
                bg: "bg.subtle",
                color: "fg",
            },
        },
    };

    return (
        <Button {...variants[variant]} {...props}>
            {children}
        </Button>
    );
}

export default AppButton;
