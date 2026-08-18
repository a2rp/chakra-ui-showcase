import { Card } from "@chakra-ui/react";

function AppCard({ children, variant = "default", ...props }) {
    const variants = {
        default: {
            bg: "bg.panel",
            border: "1px solid",
            borderColor: "border",
        },

        subtle: {
            bg: "bg.subtle",
            border: "1px solid",
            borderColor: "border",
        },

        elevated: {
            bg: "bg.panel",
            border: "1px solid",
            borderColor: "border",
            boxShadow: "lg",
        },
    };

    return (
        <Card.Root
            borderRadius="xl"
            overflow="hidden"
            {...variants[variant]}
            {...props}
        >
            {children}
        </Card.Root>
    );
}

export default AppCard;
