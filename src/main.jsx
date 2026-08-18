import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import App from "./App.jsx";
import "./index.css";

const basename = import.meta.env.PROD ? "/chakra-ui-showcase" : "/";

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={basename}>
        <ChakraProvider value={defaultSystem}>
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
