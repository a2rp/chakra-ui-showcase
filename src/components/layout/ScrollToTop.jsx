import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import AppIconButton from "../ui/AppIconButton";

const SCROLL_THRESHOLD = 400;

function ScrollToTop({ scrollContainerRef }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) {
            return;
        }

        const handleScroll = () => {
            setVisible(scrollContainer.scrollTop > SCROLL_THRESHOLD);
        };

        handleScroll();

        scrollContainer.addEventListener("scroll", handleScroll);

        return () => {
            scrollContainer.removeEventListener("scroll", handleScroll);
        };
    }, [scrollContainerRef]);

    const handleScrollToTop = () => {
        scrollContainerRef.current?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) {
        return null;
    }

    return (
        <AppIconButton
            aria-label="Scroll to top"
            variant="primary"
            position="fixed"
            right={{
                base: "5",
                md: "7",
            }}
            bottom={{
                base: "5",
                md: "7",
            }}
            zIndex="200"
            size="lg"
            borderRadius="full"
            boxShadow="xl"
            onClick={handleScrollToTop}
            transition="transform 0.2s ease"
            _hover={{
                transform: "translateY(-3px)",
            }}
        >
            <LuArrowUp />
        </AppIconButton>
    );
}

export default ScrollToTop;
