import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";

/**
 * Props for `StoryTestimonials`.
 */
export type StoryTestimonialsProps =
  SliceComponentProps<Content.StoryTestimonialsSlice>;

/**
 * Component for "StoryTestimonials" Slices.
 */
const StoryTestimonials: FC<StoryTestimonialsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        {/* Logo Section - Column-based Layout */}
        <div className="flex flex-col items-center text-center mb-4 animate-fade-in-up">
          {/* Hat Logo Container */}
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-6 transform transition-transform duration-300 hover:scale-105">
              <div className="relative">
                {/* Hat Icon */}
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  className="text-white"
                >
                  {/* Hat brim */}
                  <ellipse cx="20" cy="26" rx="18" ry="4" fill="currentColor" />
                  {/* Hat crown */}
                  <path
                    d="M8 20c0-6.627 5.373-12 12-12s12 5.373 12 12v6H8v-6z"
                    fill="currentColor"
                  />
                  {/* Hat band */}
                  <rect
                    x="8"
                    y="20"
                    width="24"
                    height="3"
                    fill="currentColor"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>

            {/* Story Badge */}
            <div className="flex flex-col items-center">
              <div className="px-6 py-3 border-2 border-gray-900 rounded-full ">
                <span className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                  {slice.primary.tagline}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 animate-fade-in-up animation-delay-300">
          <Heading size="md" className="text-[#19124B] font-bold">
            {slice.primary.heading}
          </Heading>
        </div>

        {/* Testimonial Quote */}
        <div className="prose prose-sm mb-6 md:mb-8 lg:mb-12 text-center">
          <PrismicRichText field={slice.primary.content} />
        </div>

        {/* Attribution Section */}
        <div className="text-center animate-fade-in-up animation-delay-700">
          <div className="flex items-center justify-center mb-6">
            {/* Left decorative line */}
            <div className="flex-1 max-w-32 sm:max-w-48 h-px bg-gray-300"></div>

            {/* Attribution content - Column Layout */}
            <div className="flex flex-col items-center px-8">
              <div className="text-lg font-bold text-gray-900 tracking-wide mb-1">
                {slice.primary.founder_name}
              </div>
              <div className="text-base italic text-gray-600 mb-4">
                {slice.primary.founder_designation}
              </div>
            </div>

            {/* Right decorative line */}
            <div className="flex-1 max-w-32 sm:max-w-48 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTestimonials;
