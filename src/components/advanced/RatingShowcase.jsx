import { useState } from "react";
import { RatingGroup, Stack, Text } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function RatingShowcase() {
    const [rating, setRating] = useState(3);

    return (
        <DemoCard
            title="Rating"
            text="Rating lets users express scores, preferences, reviews, and satisfaction values."
        >
            <Stack gap="7">
                <Stack gap="3">
                    <Text color="fg.muted" fontSize="sm" fontWeight="bold">
                        Interactive Rating
                    </Text>

                    <RatingGroup.Root
                        count={5}
                        value={rating}
                        onValueChange={(details) => setRating(details.value)}
                        colorPalette="yellow"
                        size="lg"
                    >
                        <RatingGroup.HiddenInput />
                        <RatingGroup.Control />
                    </RatingGroup.Root>

                    <Text color="fg.muted">
                        Selected rating:{" "}
                        <Text as="span" color="yellow.500" fontWeight="bold">
                            {rating} / 5
                        </Text>
                    </Text>
                </Stack>

                <Stack gap="3">
                    <Text color="fg.muted" fontSize="sm" fontWeight="bold">
                        Read Only
                    </Text>

                    <RatingGroup.Root
                        count={5}
                        defaultValue={4}
                        readOnly
                        colorPalette="teal"
                    >
                        <RatingGroup.HiddenInput />
                        <RatingGroup.Control />
                    </RatingGroup.Root>
                </Stack>
            </Stack>

            <CodeHint
                code={`<RatingGroup.Root
    count={5}
    value={rating}
    onValueChange={(details) => setRating(details.value)}
>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control />
</RatingGroup.Root>`}
            />
        </DemoCard>
    );
}

export default RatingShowcase;
