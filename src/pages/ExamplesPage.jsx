import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import DashboardExample from "../components/examples/DashboardExample";
import ProfileExample from "../components/examples/ProfileExample";
import PricingExample from "../components/examples/PricingExample";
import AuthExample from "../components/examples/AuthExample";

function ExamplesPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Real-World Examples"
                text="See how individual Chakra UI components and reusable application primitives can be combined into practical frontend interfaces."
            />

            <DashboardExample />

            <ProfileExample />

            <PricingExample />

            <AuthExample />
        </Stack>
    );
}

export default ExamplesPage;
