import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import ClipboardShowcase from "../components/advanced/ClipboardShowcase";
import RatingShowcase from "../components/advanced/RatingShowcase";
import SegmentGroupShowcase from "../components/advanced/SegmentGroupShowcase";
import QrCodeShowcase from "../components/advanced/QrCodeShowcase";
import FileUploadShowcase from "../components/advanced/FileUploadShowcase";
import ScrollAreaShowcase from "../components/advanced/ScrollAreaShowcase";
import ColorPickerShowcase from "../components/advanced/ColorPickerShowcase";

function AdvancedPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Advanced"
                text="Explore advanced Chakra UI components for clipboard interactions, ratings, segmented selection, QR generation, file uploads, scrolling, and color selection."
            />

            <ClipboardShowcase />

            <RatingShowcase />

            <SegmentGroupShowcase />

            <QrCodeShowcase />

            <FileUploadShowcase />

            <ScrollAreaShowcase />

            <ColorPickerShowcase />
        </Stack>
    );
}

export default AdvancedPage;
