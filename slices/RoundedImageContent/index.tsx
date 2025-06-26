import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowRight } from "lucide-react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `RoundedImageContent`.
 */
export type RoundedImageContentProps =
  SliceComponentProps<Content.RoundedImageContentSlice>;

/**
 * Component for "RoundedImageContent" Slices.
 */
const RoundedImageContent: FC<RoundedImageContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="big-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg min-h-[20vh] sm:min-h-[25vh] md:min-h-[30vh] lg:min-h-[40vh] xl:min-h-[50vh]">
          {/* Left Content Section */}
          <div className="bg-slate-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center order-2 lg:order-1 rounded-b-2xl md:rounded-b-3xl lg:rounded-b-none lg:rounded-l-3xl">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
                {slice.primary.heading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed">
                {slice.primary.description}
              </p>
            </div>
          </div>

          <div className="relative bg-gray-900 min-h-[15vh] sm:min-h-[20vh] md:min-h-[25vh] lg:min-h-full order-1 lg:order-2 rounded-t-2xl md:rounded-t-3xl lg:rounded-t-none lg:rounded-r-3xl">
            <PrismicNextImage
              field={slice.primary.main_image}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundedImageContent;
