import { Box, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import MobileNavDrawer from "./MobileNavDrawer";
import headerLinks from "../../data/headerLinks";

function Header() {
    return (
        <Box
            as="header"
            h="72px"
            borderBottom="1px solid"
            borderColor="border"
            bg="bg"
            flexShrink="0"
        >
            <Flex
                h="100%"
                align="center"
                gap="6"
                px={{
                    base: "5",
                    md: "6",
                    lg: "8",
                }}
            >
                <Box>
                    <Heading size="lg" color="fg">
                        Chakra UI Showcase
                    </Heading>

                    <Text
                        mt="1"
                        fontSize="sm"
                        color="fg.muted"
                        display={{
                            base: "none",
                            sm: "block",
                        }}
                    >
                        Complete React component showcase
                    </Text>
                </Box>

                <HStack
                    ml="auto"
                    gap="5"
                    display={{
                        base: "none",
                        lg: "flex",
                    }}
                >
                    {headerLinks.map((item) => {
                        if (item.external) {
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontSize="sm"
                                    color="fg.muted"
                                    transition="color 0.2s ease"
                                    _hover={{
                                        color: "teal.500",
                                        textDecoration: "none",
                                    }}
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        return (
                            <Link
                                key={item.to}
                                asChild
                                _hover={{
                                    textDecoration: "none",
                                }}
                            >
                                <NavLink to={item.to}>
                                    {({ isActive }) => (
                                        <Text
                                            fontSize="sm"
                                            color={
                                                isActive
                                                    ? "teal.500"
                                                    : "fg.muted"
                                            }
                                            fontWeight={
                                                isActive ? "bold" : "normal"
                                            }
                                            transition="color 0.2s ease"
                                            _hover={{
                                                color: "teal.500",
                                            }}
                                        >
                                            {item.label}
                                        </Text>
                                    )}
                                </NavLink>
                            </Link>
                        );
                    })}

                    <ThemeToggle />
                </HStack>

                <HStack
                    ml="auto"
                    gap="2"
                    display={{
                        base: "flex",
                        lg: "none",
                    }}
                >
                    <ThemeToggle />

                    <MobileNavDrawer />
                </HStack>
            </Flex>
        </Box>
    );
}

export default Header;
