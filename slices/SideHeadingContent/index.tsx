import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Props for `SideHeadingContent`.
 */
export type SideHeadingContentProps =
  SliceComponentProps<Content.SideHeadingContentSlice>;

/**
 * Component for "SideHeadingContent" Slices.
 */
const SideHeadingContent: FC<SideHeadingContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="extra-big-container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column - Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Your New Alternative Investment Platform
            </h1>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Pass the Hat connects accredited U.S. investors with
                high-potential private market opportunities once reserved for a
                select few. Conventional alternative investment platforms are
                aggregators of deals from several different sponsors. There, you
                might find something of interest if you do a lot of digging and
                are able to vet them yourself.
              </p>

              <p>
                But that&apos;s{" "}
                <em className="italic">tedious and time-consuming</em>. By the
                time an opportunity ends up on Pass the Hat, you can be sure
                it&apos;s been vetted. Each deal on Pass the Hat is sponsored by{" "}
                <span className="font-semibold text-gray-900">
                  Borgman Capital
                </span>
                , an investment firm with a sole focus on acquiring companies
                and real estate properties with untapped potential.
              </p>

              <p>
                Joining Pass the Hat is as simple as creating a profile. Once
                approved, you&apos;ll have unrestricted access to the platform
                so you can make an informed decision.
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-sky-400 hover:bg-sky-500 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 group"
              >
                START INVESTING
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideHeadingContent;
