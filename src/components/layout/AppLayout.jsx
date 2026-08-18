import { useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import RouteScrollToTop from "./RouteScrollToTop";

function AppLayout({ children }) {
    const mainRef = useRef(null);

    return (
        <Box h="100vh" bg="bg" color="fg" overflow="hidden">
            <Header />

            <Flex h="calc(100vh - 72px)" overflow="hidden">
                <Sidebar />

                <Box
                    ref={mainRef}
                    as="main"
                    flex="1"
                    minW="0"
                    h="100%"
                    overflowX="hidden"
                    overflowY="auto"
                    px={{
                        base: "5",
                        md: "8",
                        lg: "10",
                    }}
                    py={{
                        base: "8",
                        md: "10",
                    }}
                >
                    {children}

                    <Footer />
                </Box>
            </Flex>

            <RouteScrollToTop scrollContainerRef={mainRef} />

            <ScrollToTop scrollContainerRef={mainRef} />
        </Box>
    );
}

export default AppLayout;
