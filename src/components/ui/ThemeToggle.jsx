import { IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark";

    return (
        <IconButton
            aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            variant="ghost"
            size="sm"
            color="fg"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? <LuSun /> : <LuMoon />}
        </IconButton>
    );
}

export default ThemeToggle;
