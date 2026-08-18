import { Button, HStack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"];

function ButtonSizesShowcase() {
    return (
        <DemoCard
            title="Button Sizes"
            text="Button sizes help communicate hierarchy and adapt controls to different interface densities."
        >
            <HStack gap="4" align="center" flexWrap="wrap">
                {sizes.map((size) => (
                    <Button key={size} size={size} colorPalette="teal">
                        {size}
                    </Button>
                ))}
            </HStack>

            <CodeHint
                code={`<Button
    size="lg"
    colorPalette="teal"
>
    Large Button
</Button>`}
            />
        </DemoCard>
    );
}

export default ButtonSizesShowcase;
