import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RouteScrollToTop({ scrollContainerRef }) {
    const { pathname } = useLocation();

    useEffect(() => {
        scrollContainerRef.current?.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, [pathname, scrollContainerRef]);

    return null;
}

export default RouteScrollToTop;
