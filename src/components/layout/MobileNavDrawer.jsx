import { useState } from "react";
import {
    Box,
    CloseButton,
    Drawer,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import AppIconButton from "../ui/AppIconButton";
import navigationItems from "../../data/navigationItems";

function MobileNavDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <Drawer.Root
            open={open}
            onOpenChange={(details) => setOpen(details.open)}
            placement="end"
            size="xs"
        >
            <Drawer.Trigger asChild>
                <AppIconButton
                    aria-label="Open navigation menu"
                    variant="ghost"
                    display={{
                        base: "inline-flex",
                        lg: "none",
                    }}
                >
                    <LuMenu />
                </AppIconButton>
            </Drawer.Trigger>

            <Drawer.Backdrop />

            <Drawer.Positioner>
                <Drawer.Content bg="bg" color="fg">
                    <Drawer.Header
                        px="5"
                        py="5"
                        borderBottom="1px solid"
                        borderColor="border"
                    >
                        <Drawer.Title>Navigation</Drawer.Title>

                        <Drawer.CloseTrigger asChild>
                            <CloseButton
                                position="absolute"
                                top="4"
                                right="4"
                            />
                        </Drawer.CloseTrigger>
                    </Drawer.Header>

                    <Drawer.Body px="4" py="6" overflowY="auto">
                        <Box mb="6">
                            <Heading size="sm" color="fg">
                                Explore Chakra UI
                            </Heading>

                            <Text
                                mt="2"
                                color="fg.muted"
                                fontSize="sm"
                                lineHeight="1.7"
                            >
                                Browse components, patterns, layouts, and
                                practical examples.
                            </Text>
                        </Box>

                        <Stack gap="1">
                            {navigationItems.map((item) => {
                                if (item.external) {
                                    return (
                                        <Box
                                            key={item.label}
                                            as="a"
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            px="4"
                                            py="3"
                                            w="full"
                                            borderRadius="md"
                                            color="fg.muted"
                                            transition="0.2s ease"
                                            onClick={() => setOpen(false)}
                                            _hover={{
                                                bg: "bg.subtle",
                                                color: "fg",
                                            }}
                                        >
                                            {item.label}
                                        </Box>
                                    );
                                }

                                return (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        end={item.end}
                                        onClick={() => setOpen(false)}
                                    >
                                        {({ isActive }) => (
                                            <Box
                                                px="4"
                                                py="3"
                                                w="full"
                                                borderRadius="md"
                                                color={
                                                    isActive
                                                        ? "teal.500"
                                                        : "fg.muted"
                                                }
                                                bg={
                                                    isActive
                                                        ? "bg.subtle"
                                                        : "transparent"
                                                }
                                                fontWeight={
                                                    isActive ? "bold" : "normal"
                                                }
                                                transition="0.2s ease"
                                                _hover={{
                                                    bg: "bg.subtle",
                                                    color: "fg",
                                                }}
                                            >
                                                {item.label}
                                            </Box>
                                        )}
                                    </NavLink>
                                );
                            })}
                        </Stack>
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    );
}

export default MobileNavDrawer;
