import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { execSync } from "node:child_process";

function getLastUpdated() {
    try {
        return execSync("git log -1 --format=%cI", {
            stdio: ["ignore", "pipe", "ignore"],
        })
            .toString()
            .trim();
    } catch {
        return new Date().toISOString();
    }
}

export default defineConfig(({ command }) => ({
    plugins: [react()],

    base: command === "build" ? "/chakra-ui-showcase/" : "/",

    define: {
        __LAST_UPDATED__: JSON.stringify(getLastUpdated()),
    },
}));
