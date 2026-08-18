import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import navigationItems from "../../data/navigationItems";

function Sidebar() {
    return (
        <Box
            as="aside"
            w="280px"
            h="100%"
            flexShrink="0"
            overflow="hidden"
            borderRight="1px solid"
            borderColor="border"
            bg="bg"
            px="4"
            py="6"
            display={{
                base: "none",
                lg: "block",
            }}
        >
            <Box mb="6">
                <Heading size="sm" color="fg">
                    Explore Chakra UI
                </Heading>

                <Text mt="2" fontSize="sm" color="fg.muted" lineHeight="1.7">
                    Browse components, patterns, layouts, and practical
                    examples.
                </Text>
            </Box>

            <Stack gap="1">
                {navigationItems.map((item) => {
                    if (item.external) {
                        return (
                            <Button
                                key={item.label}
                                asChild
                                variant="ghost"
                                justifyContent="flex-start"
                                w="full"
                                px="4"
                                py="3"
                                borderRadius="md"
                                color="fg.muted"
                                _hover={{
                                    bg: "bg.subtle",
                                    color: "fg",
                                }}
                            >
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.label}
                                </a>
                            </Button>
                        );
                    }

                    return (
                        <NavLink key={item.to} to={item.to} end={item.end}>
                            {({ isActive }) => (
                                <Button
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    w="full"
                                    px="4"
                                    py="3"
                                    borderRadius="md"
                                    color={isActive ? "teal.500" : "fg.muted"}
                                    bg={isActive ? "bg.subtle" : "transparent"}
                                    _hover={{
                                        bg: "bg.subtle",
                                        color: "fg",
                                    }}
                                >
                                    {item.label}
                                </Button>
                            )}
                        </NavLink>
                    );
                })}
            </Stack>
        </Box>
    );
}

export default Sidebar;
