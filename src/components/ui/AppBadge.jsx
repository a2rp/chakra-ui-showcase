import { Badge } from "@chakra-ui/react";

function AppBadge({
    children,
    colorPalette = "teal",
    variant = "subtle",
    ...props
}) {
    return (
        <Badge
            colorPalette={colorPalette}
            variant={variant}
            px="3"
            py="1"
            borderRadius="md"
            {...props}
        >
            {children}
        </Badge>
    );
}

export default AppBadge;
