/* global __LAST_UPDATED__ */

import { FiCode, FiCoffee, FiGlobe, FiLifeBuoy, FiMail } from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiPatreon } from "react-icons/si";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCode },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedinIn },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebookF },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiLifeBuoy },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: SiPatreon },
];

const linkProps = (href) => (href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" });

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
                    Copyright &copy; {currentYear} Chakra UI Showcase. Developed by{" "}
                    <Link
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="teal.500"
                        fontWeight="bold"
                        _hover={{
                            textDecoration: "underline",
                        }}
                    >
                        Ashish Ranjan
                    </Link>
                </Text>
                <Flex wrap="wrap" gap="2" aria-label="Social and support links">
                    {footerLinks.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            aria-label={label}
                            title={label}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            boxSize="34px"
                            border="1px solid"
                            borderColor="border"
                            borderRadius="9px"
                            color="fg.muted"
                            _hover={{ color: "teal.500", borderColor: "teal.500", textDecoration: "none" }}
                            {...linkProps(href)}
                        >
                            <Icon aria-hidden="true" />
                        </Link>
                    ))}
                </Flex>

                <Text color="fg.muted" fontSize="sm">
                    Last Updated: {formatDate(__LAST_UPDATED__)}
                </Text>
            </Flex>
        </Box>
    );
}

export default Footer;
