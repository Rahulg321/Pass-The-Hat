import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/**
 * Props for `ThreeRoundImages`.
 */
export type ThreeRoundImagesProps =
  SliceComponentProps<Content.ThreeRoundImagesSlice>;

/**
 * Component for "ThreeRoundImages" Slices.
 */
const ThreeRoundImages: FC<ThreeRoundImagesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="big-container">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1e3a8a] max-w-5xl leading-tight">
            We&apos;re making private market investing more accessible.
          </h1>

          {/* CTA Button */}
          <Button
            className="bg-[#7dd3fc] hover:bg-[#38bdf8] text-white font-medium px-8 py-3 rounded-full text-sm md:text-base transition-colors duration-200"
            size="lg"
          >
            THE STORY BEHIND PASS THE HAT
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Investment Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-16 w-full max-w-4xl">
            {/* Private Equity */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <Image
                  src="/placeholder.svg?height=256&width=256&query=leather briefcase on modern desk workspace"
                  alt="Private Equity - Leather briefcase representing private equity investments"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                PRIVATE EQUITY
              </h3>
            </div>

            {/* Real Estate */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <Image
                  src="/placeholder.svg?height=256&width=256&query=modern glass building architecture from below blue sky"
                  alt="Real Estate - Modern glass building representing real estate investments"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                REAL ESTATE
              </h3>
            </div>

            {/* Growth Equity */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <Image
                  src="/placeholder.svg?height=256&width=256&query=small green plant seedling growing from sand minimal"
                  alt="Growth Equity - Small plant growing representing growth equity investments"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                GROWTH EQUITY
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeRoundImages;
