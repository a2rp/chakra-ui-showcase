import { Breadcrumb, Link } from "@chakra-ui/react";
import DemoCard from "../layout/DemoCard";
import CodeHint from "../ui/CodeHint";

function BreadcrumbShowcase() {
    return (
        <DemoCard
            title="Breadcrumb"
            text="Breadcrumb shows the current location inside a hierarchical navigation structure."
        >
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
                    </Breadcrumb.Item>

                    <Breadcrumb.Separator />

                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
                    </Breadcrumb.Item>

                    <Breadcrumb.Separator />

                    <Breadcrumb.Item>
                        <Breadcrumb.CurrentLink>
                            Navigation
                        </Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>

            <Link
                href="#"
                mt="5"
                display="inline-block"
                color="teal.500"
                fontSize="sm"
            >
                Example navigation link
            </Link>

            <CodeHint
                code={`<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link href="#">
                Home
            </Breadcrumb.Link>
        </Breadcrumb.Item>

        <Breadcrumb.Separator />

        <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>
                Navigation
            </Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>`}
            />
        </DemoCard>
    );
}

export default BreadcrumbShowcase;
