import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import AlertShowcase from "../components/feedback/AlertShowcase";
import ProgressShowcase from "../components/feedback/ProgressShowcase";
import ProgressCircleShowcase from "../components/feedback/ProgressCircleShowcase";
import SkeletonShowcase from "../components/feedback/SkeletonShowcase";
import SpinnerShowcase from "../components/feedback/SpinnerShowcase";
import WorkingFeedbackShowcase from "../components/feedback/WorkingFeedbackShowcase";

function FeedbackPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Feedback"
                text="Explore Chakra UI components for alerts, progress states, loading placeholders, spinners, and interactive feedback."
            />

            <AlertShowcase />

            <ProgressShowcase />

            <ProgressCircleShowcase />

            <SkeletonShowcase />

            <SpinnerShowcase />

            <WorkingFeedbackShowcase />
        </Stack>
    );
}

export default FeedbackPage;
