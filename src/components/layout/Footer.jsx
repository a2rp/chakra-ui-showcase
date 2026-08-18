/* global __LAST_UPDATED__ */

import { Box, Flex, Link, Text } from "@chakra-ui/react";

function formatDate(value) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    const formattedDate = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
    }).format(date);

    return `${formattedDate.replace(",", "")} hrs`;
}

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            as="footer"
            mt="12"
            pt="6"
            pb="2"
            borderTop="1px solid"
            borderColor="border"
        >
            <Flex
                direction={{
                    base: "column",
                    md: "row",
                }}
                align={{
                    base: "flex-start",
                    md: "center",
                }}
                justify="space-between"
                gap="3"
            >
                <Text color="fg.muted" fontSize="sm">
                    © {currentYear} Chakra UI Showcase. Developed by{" "}
                    <Link
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noreferrer"
                        color="teal.500"
                        fontWeight="bold"
                        _hover={{
                            textDecoration: "underline",
                        }}
                    >
                        Ashish Ranjan
                    </Link>
                    {" · "}
                    <Link
                        href="https://a2rp-donation-page.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        color="teal.500"
                        fontWeight="bold"
                        _hover={{
                            textDecoration: "underline",
                        }}
                    >
                        Support my work
                    </Link>
                </Text>

                <Text color="fg.muted" fontSize="sm">
                    Last Updated: {formatDate(__LAST_UPDATED__)}
                </Text>
            </Flex>
        </Box>
    );
}

export default Footer;
