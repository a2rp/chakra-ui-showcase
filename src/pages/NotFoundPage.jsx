import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import AppButton from "../components/ui/AppButton";
import AppCard from "../components/ui/AppCard";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Stack minH="60vh" align="center" justify="center">
            <AppCard w="full" maxW="720px">
                <Stack
                    p={{
                        base: "6",
                        md: "10",
                    }}
                    gap="6"
                    align="center"
                    textAlign="center"
                >
                    <Box>
                        <Text
                            color="teal.500"
                            fontSize={{
                                base: "5xl",
                                md: "7xl",
                            }}
                            fontWeight="bold"
                            lineHeight="1"
                        >
                            404
                        </Text>

                        <Heading as="h1" mt="4" size="2xl" color="fg">
                            Page Not Found
                        </Heading>

                        <Text
                            mt="4"
                            maxW="520px"
                            color="fg.muted"
                            lineHeight="1.8"
                        >
                            The page you are looking for does not exist, may
                            have been moved, or the URL may be incorrect.
                        </Text>
                    </Box>

                    <Stack
                        direction={{
                            base: "column",
                            sm: "row",
                        }}
                        gap="3"
                    >
                        <AppButton onClick={() => navigate("/")}>
                            Go to Overview
                        </AppButton>

                        <AppButton
                            variant="outline"
                            onClick={() => navigate(-1)}
                        >
                            <LuArrowLeft />
                            Go Back
                        </AppButton>
                    </Stack>
                </Stack>
            </AppCard>
        </Stack>
    );
}

export default NotFoundPage;
