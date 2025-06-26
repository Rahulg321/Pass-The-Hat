import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `SideHeadingContent`.
 */
export type SideHeadingContentProps =
  SliceComponentProps<Content.SideHeadingContentSlice>;

/**
 * Component for "SideHeadingContent" Slices.
 */
const SideHeadingContent: FC<SideHeadingContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="extra-big-container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column - Heading */}
          <div className="space-y-4">
            <h1 className="text-dark-blue md:text-center">
              {slice.primary.heading}
            </h1>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="prose prose-sm">
              <PrismicRichText field={slice.primary.content} />
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-sky-400 hover:bg-sky-500 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 group"
                asChild
              >
                <PrismicNextLink field={slice.primary.button_link}>
                  {slice.primary.button_link.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </PrismicNextLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideHeadingContent;
