import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Center, Spinner } from "@chakra-ui/react";

import AppLayout from "./components/layout/AppLayout";

const Home = lazy(() => import("./pages/Home"));
const FoundationsPage = lazy(() => import("./pages/FoundationsPage"));
const LayoutPage = lazy(() => import("./pages/LayoutPage"));
const TypographyPage = lazy(() => import("./pages/TypographyPage"));
const ButtonsPage = lazy(() => import("./pages/ButtonsPage"));
const FormsPage = lazy(() => import("./pages/FormsPage"));
const DataDisplayPage = lazy(() => import("./pages/DataDisplayPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage"));
const DisclosurePage = lazy(() => import("./pages/DisclosurePage"));
const OverlayPage = lazy(() => import("./pages/OverlayPage"));
const NavigationPage = lazy(() => import("./pages/NavigationPage"));
const AdvancedPage = lazy(() => import("./pages/AdvancedPage"));
const ExamplesPage = lazy(() => import("./pages/ExamplesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
    return (
        <AppLayout>
            <Suspense
                fallback={
                    <Center minH="50vh">
                        <Spinner size="xl" color="teal.500" />
                    </Center>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/foundations" element={<FoundationsPage />} />

                    <Route path="/layout" element={<LayoutPage />} />

                    <Route path="/typography" element={<TypographyPage />} />

                    <Route path="/buttons" element={<ButtonsPage />} />

                    <Route path="/forms" element={<FormsPage />} />

                    <Route path="/data-display" element={<DataDisplayPage />} />

                    <Route path="/feedback" element={<FeedbackPage />} />

                    <Route path="/disclosure" element={<DisclosurePage />} />

                    <Route path="/overlay" element={<OverlayPage />} />

                    <Route path="/navigation" element={<NavigationPage />} />

                    <Route path="/advanced" element={<AdvancedPage />} />

                    <Route path="/examples" element={<ExamplesPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </AppLayout>
    );
}

export default App;
