import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

/**
 * Props for `InvestmentHero`.
 */
export type InvestmentHeroProps =
  SliceComponentProps<Content.InvestmentHeroSlice>;

/**
 * Component for "InvestmentHero" Slices.
 */
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
        <div className="w-full text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 leading-tight">
            Private Equity Investment Process for Individuals
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700">
            A Step-by-Step Guide for Accredited U.S. Investors
          </p>
        </div>

        <div className="flex justify-center w-full">
          <Card className="w-full shadow-xl rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200">
            <CardContent className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
              <div className="mb-6 md:mb-0 flex-1 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=400&query=private equity investment process flowchart infographic with steps and icons"
                  alt="Private Equity Investment Process Infographic"
                  width={400}
                  height={300}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-md border border-slate-100"
                  priority
                />
              </div>

              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                  Getting Started with Private Equity Investments
                </h2>

                <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Private equity has long been the domain of institutional
                    investors and ultra-high-net-worth individuals. However,
                    accredited U.S. investors now have opportunities to
                    participate in private equity deals through platforms like
                    Pass the Hat. Before diving into your first PE investment,
                    it&apos;s important to understand the process.
                  </p>
                  <p>
                    Our visual guide walks you through each step of investing in
                    private equity deals through Pass the Hat - from initial
                    deal review to receiving quarterly investment updates.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-sm rounded-lg px-4 py-2 w-full sm:w-auto justify-center"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-medium">DOWNLOAD GUIDE (PDF)</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-sm rounded-lg px-4 py-2 w-full sm:w-auto justify-center"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-medium">DOWNLOAD IMAGE (JPEG)</span>
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
