import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
    theme: {
        semanticTokens: {
            colors: {
                "app.bg": {
                    value: {
                        base: "{colors.gray.50}",
                        _dark: "{colors.gray.950}",
                    },
                },

                "app.panel": {
                    value: {
                        base: "{colors.white}",
                        _dark: "{colors.gray.900}",
                    },
                },

                "app.panelHover": {
                    value: {
                        base: "{colors.gray.100}",
                        _dark: "{colors.whiteAlpha.100}",
                    },
                },

                "app.text": {
                    value: {
                        base: "{colors.gray.950}",
                        _dark: "{colors.gray.50}",
                    },
                },

                "app.textMuted": {
                    value: {
                        base: "{colors.gray.600}",
                        _dark: "{colors.gray.400}",
                    },
                },

                "app.border": {
                    value: {
                        base: "{colors.gray.200}",
                        _dark: "{colors.whiteAlpha.200}",
                    },
                },

                "app.accent": {
                    value: {
                        base: "{colors.teal.600}",
                        _dark: "{colors.teal.300}",
                    },
                },
            },
        },
    },

    globalCss: {
        "html, body, #root": {
            width: "100%",
            height: "100%",
        },

        body: {
            margin: "0",
            bg: "app.bg",
            color: "app.text",
        },

        "*": {
            boxSizing: "border-box",
        },

        "*::before, *::after": {
            boxSizing: "border-box",
        },

        "::selection": {
            bg: "teal.500",
            color: "white",
        },

        "*::placeholder": {
            opacity: 1,
            color: "app.textMuted",
        },
    },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
