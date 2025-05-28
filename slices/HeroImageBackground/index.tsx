import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "@/components/ui/button";

export type HeroImageBackgroundProps =
  SliceComponentProps<Content.HeroImageBackgroundSlice>;

const HeroImageBackground: FC<HeroImageBackgroundProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <PrismicNextImage
        field={slice.primary.background_image}
        className="object-cover absolute inset-0"
        priority
        sizes="100vw"
      />

      <div className="relative z-20 big-container">
        <div className="max-w-2xl">
          <h1 className="">Transform Your</h1>

          <p className="">
            Discover innovative solutions that drive growth, enhance
            productivity, and unlock your business potential in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageBackground;
