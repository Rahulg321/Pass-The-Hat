import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Link } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ArrowRightIcon, DotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";

/**
 * Props for `UpdatedHeroSection`.
 */
export type UpdatedHeroSectionProps =
  SliceComponentProps<Content.UpdatedHeroSectionSlice>;

/**
 * Component for "UpdatedHeroSection" Slices.
 */
const UpdatedHeroSection: FC<UpdatedHeroSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative mix-h-[50vh] bg-gradient-to-br from-slate-100 via-sky-50 to-slate-200 py-12 md:py-20">
        <PrismicNextImage
          field={slice.primary.background_image}
          className="object-cover opacity-90 w-full h-full absolute inset-0 z-0"
          fill
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <Heading size="md" className="text-[#19124B] font-bold">
              {slice.primary.heading}
            </Heading>
          </div>
          <div className="rounded-3xl mt-4 bg-white p-8 shadow-xl md:p-12 lg:p-16">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-black sm:text-5xl">
                  {slice.primary.title}
                </h2>

                <p className="text-xl text-gray-700">{slice.primary.tagline}</p>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="prose prose-sm">
                  <PrismicRichText field={slice.primary.content} />
                </div>
                <Button
                  size="lg"
                  className="mt-4 w-full bg-sky-500 text-white hover:bg-sky-600 sm:w-auto"
                  asChild
                >
                  <PrismicNextLink field={slice.primary.button_link}>
                    {slice.primary.button_link.text}
                    <ArrowRightIcon className="ml-2 size-4" />
                  </PrismicNextLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatedHeroSection;
