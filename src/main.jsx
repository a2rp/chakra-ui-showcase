import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import App from "./App.jsx";
import system from "./theme/system.js";
import "./index.css";

const basename = import.meta.env.PROD ? "/chakra-ui-showcase" : "/";

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={basename}>
        <ChakraProvider value={system}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={false}
            >
                <App />
            </ThemeProvider>
        </ChakraProvider>
    </BrowserRouter>,
);
