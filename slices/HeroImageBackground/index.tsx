import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import Link from "next/link";

export type HeroImageBackgroundProps =
  SliceComponentProps<Content.HeroImageBackgroundSlice>;

const HeroImageBackground: FC<HeroImageBackgroundProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      <PrismicNextImage
        field={slice.primary.background_image}
        className="object-cover absolute inset-0"
        priority
        sizes="100vw"
      />

      <div className="relative z-20 big-container">
        <div className="max-w-2xl space-y-4 md:space-y-6">
          <Heading size="md">{slice.primary.heading}</Heading>

          <Heading size="xs" className="font-normal text-primary">
            {slice.primary.tagline}
          </Heading>
        </div>
      </div>
    </section>
  );
};

export default HeroImageBackground;
