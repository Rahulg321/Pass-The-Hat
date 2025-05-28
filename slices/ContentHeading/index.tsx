import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { cn } from "@/lib/utils";

/**
 * Props for `ContentHeading`.
 */
export type ContentHeadingProps =
  SliceComponentProps<Content.ContentHeadingSlice>;

/**
 * Component for "ContentHeading" Slices.
 */
const ContentHeading: FC<ContentHeadingProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("w-full block-space")}
    >
      <div
        className={cn(
          "big-container",
          slice.variation === "contentNarrowContainer" && "narrow-container"
        )}
      >
        <div className="prose">
          <PrismicRichText field={slice.primary.main_content} />
        </div>
      </div>
    </section>
  );
};

export default ContentHeading;
