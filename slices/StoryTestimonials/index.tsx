import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in-up">
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
              <div className="px-6 py-3 border-2 border-gray-900 rounded-full transition-all duration-300 hover:bg-gray-900 hover:text-white">
                <span className="text-sm font-semibold tracking-wider text-gray-900 uppercase hover:text-white transition-colors duration-300">
                  The Story Behind Pass The Hat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 animate-fade-in-up animation-delay-300">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Reimagining Access to Institutional-Grade Investments
          </h1>
        </div>

        {/* Testimonial Quote */}
        <div className="mb-16 animate-fade-in-up animation-delay-500">
          <blockquote className="text-lg sm:text-xl leading-relaxed text-gray-700 text-center max-w-5xl mx-auto">
            &quot;When I left my role as a Partner at a national accounting firm
            to start Borgman Capital in 2017, someone jokingly suggested
            I&apos;d need to &apos;pass a hat around&apos; to raise capital.
            That phrase became more than a quip—it embodied our mission to make
            institutional-quality investments accessible. We&apos;ve grown from
            27 investors in our first deal to a network of more than 400 today,
            proving that collaborative investing isn&apos;t just a strategy,
            it&apos;s a movement. Pass the Hat represents our core philosophy:
            building wealth through transparent, relationship-driven investment
            opportunities that empower investors beyond traditional market
            constraints.
          </blockquote>
        </div>

        {/* Attribution Section */}
        <div className="text-center animate-fade-in-up animation-delay-700">
          <div className="flex items-center justify-center mb-6">
            {/* Left decorative line */}
            <div className="flex-1 max-w-32 sm:max-w-48 h-px bg-gray-300"></div>

            {/* Attribution content - Column Layout */}
            <div className="flex flex-col items-center px-8">
              <div className="text-lg font-bold text-gray-900 tracking-wide mb-1">
                SEQUOYA, BORGMAN
              </div>
              <div className="text-base italic text-gray-600 mb-4">
                FOUNDER AND CEO
              </div>
            </div>

            {/* Right decorative line */}
            <div className="flex-1 max-w-32 sm:max-w-48 h-px bg-gray-300"></div>
          </div>

          {/* Company Logo - Column Layout */}
          <div className="flex flex-col items-center">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold">
                <span className="text-slate-800">Borgman</span>
              </div>
              <div className="text-lg sm:text-xl font-medium text-sky-400 tracking-widest mt-1">
                CAPITAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTestimonials;
