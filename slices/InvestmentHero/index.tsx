import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Heading from "@/components/Heading";
import Link from "next/link";

export type InvestmentHeroProps =
  SliceComponentProps<Content.InvestmentHeroSlice>;

const InvestmentHero: FC<InvestmentHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden py-10 sm:py-16 lg:py-24"
    >
      <div className="absolute inset-0">
        <PrismicNextImage
          field={slice.primary.background_image}
          className="object-cover opacity-90 w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/80 via-slate-50/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center w-full">
          <Card className="w-full shadow-xl rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200">
            <CardContent className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
              <div className="mb-6 md:mb-0 flex-1 flex items-center justify-center">
                <PrismicNextImage
                  field={slice.primary.featured_image}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-md border border-slate-100"
                  priority
                />
              </div>

              <div className="space-y-6 flex-1 flex flex-col">
                <Heading size="xs" as="h2" className="text-dark-blue">
                  {slice.primary.heading}
                </Heading>

                <div className="prose prose-sm">
                  <PrismicRichText field={slice.primary.content} />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    variant="outline"
                    asChild
                    className="flex items-center gap-2 bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-sm rounded-lg px-4 py-2 w-full sm:w-auto justify-center"
                  >
                    <PrismicNextLink
                      field={slice.primary.pdf_guide}
                      target="_blank"
                    >
                      <Download className="w-4 h-4" />
                      <span className="font-medium">
                        {slice.primary.pdf_guide.text}
                      </span>
                    </PrismicNextLink>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-sm rounded-lg px-4 py-2 w-full sm:w-auto justify-center"
                  >
                    <PrismicNextLink
                      className="flex items-center gap-2"
                      field={slice.primary.guide_image}
                      target="_blank"
                    >
                      <Download className="size-4" />
                      <span className="font-medium">
                        {slice.primary.guide_image.text}
                      </span>
                    </PrismicNextLink>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHero;
