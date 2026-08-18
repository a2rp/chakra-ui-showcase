import { Button, HStack } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

const variants = ["solid", "subtle", "surface", "outline", "ghost", "plain"];

function ButtonVariantsShowcase() {
    return (
        <DemoCard
            title="Button Variants"
            text="Variants provide different visual emphasis levels while keeping the same button interaction model."
        >
            <HStack gap="4" flexWrap="wrap">
                {variants.map((variant) => (
                    <Button
                        key={variant}
                        variant={variant}
                        colorPalette="teal"
                        px="5"
                    >
                        {variant}
                    </Button>
                ))}
            </HStack>

            <CodeHint
                code={`<Button
    variant="outline"
    colorPalette="teal"
>
    Outline
</Button>`}
            />
        </DemoCard>
    );
}

export default ButtonVariantsShowcase;
