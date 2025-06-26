import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MutedBackgroundContent`.
 */
export type MutedBackgroundContentProps =
  SliceComponentProps<Content.MutedBackgroundContentSlice>;

/**
 * Component for "MutedBackgroundContent" Slices.
 */
const MutedBackgroundContent: FC<MutedBackgroundContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="extra-big-container">
        <div className="max-w-4xl bg-gray-50 rounded-lg p-6 md:p-8 lg:p-10 mx-auto">
          <div className="prose">
            <PrismicRichText field={slice.primary.content} />
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <cite className="text-gray-600 text-sm md:text-base font-medium not-italic">
              {slice.primary.author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MutedBackgroundContent;
