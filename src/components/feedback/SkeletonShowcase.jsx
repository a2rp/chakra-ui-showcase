import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function SkeletonShowcase() {
    return (
        <DemoCard
            title="Skeleton"
            text="Skeleton placeholders communicate that content is loading while preserving the approximate layout."
        >
            <Stack gap="8">
                <Stack gap="3">
                    <Skeleton height="20px" />
                    <Skeleton height="20px" width="80%" />
                    <Skeleton height="20px" width="60%" />
                </Stack>

                <HStack gap="4">
                    <SkeletonCircle size="12" />

                    <Stack flex="1" gap="3">
                        <Skeleton height="16px" width="40%" />

                        <Skeleton height="14px" width="70%" />
                    </Stack>
                </HStack>

                <Skeleton height="180px" borderRadius="xl" />
            </Stack>

            <CodeHint
                code={`<Skeleton height="20px" />

<SkeletonCircle size="12" />

<Skeleton
    height="180px"
    borderRadius="xl"
/>`}
            />
        </DemoCard>
    );
}

export default SkeletonShowcase;
