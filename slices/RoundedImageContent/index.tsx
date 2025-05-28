import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
      <div className="extra-big-container">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg min-h-[400px] lg:min-h-[500px]">
          {/* Left Content Section */}
          <div className="bg-slate-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center rounded-l-3xl lg:rounded-r-none rounded-r-3xl lg:rounded-tr-none lg:rounded-br-none">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Start Your PE Investing Journey
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Complete our easy sign-up process and you&apos;ll be one step
                closer to investing in private equity deals.
              </p>
              <Button
                className="bg-sky-300 hover:bg-sky-400 text-slate-800 font-semibold px-6 py-3 rounded-full text-base"
                size="lg"
              >
                GET STARTED
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative bg-gray-900 min-h-[300px] lg:min-h-full rounded-r-3xl lg:rounded-l-none rounded-l-3xl lg:rounded-tl-none lg:rounded-bl-none">
            <Image
              src="/placeholder.svg?height=500&width=600&query=professional business person working on laptop in modern office environment"
              alt="Professional working on laptop in modern office"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundedImageContent;
