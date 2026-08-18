import { Stack } from "@chakra-ui/react";
import SectionHeader from "../components/layout/SectionHeader";
import HeadingShowcase from "../components/typography/HeadingShowcase";
import TextShowcase from "../components/typography/TextShowcase";
import HighlightShowcase from "../components/typography/HighlightShowcase";
import CodeShowcase from "../components/typography/CodeShowcase";
import KbdShowcase from "../components/typography/KbdShowcase";
import MarkShowcase from "../components/typography/MarkShowcase";
import BlockquoteShowcase from "../components/typography/BlockquoteShowcase";

function TypographyPage() {
    return (
        <Stack gap="8">
            <SectionHeader
                title="Typography"
                text="Explore Chakra UI typography components for headings, readable text, highlights, inline code, keyboard shortcuts, marked content, and quotations."
            />

            <HeadingShowcase />

            <TextShowcase />

            <HighlightShowcase />

            <CodeShowcase />

            <KbdShowcase />

            <MarkShowcase />

            <BlockquoteShowcase />
        </Stack>
    );
}

export default TypographyPage;
