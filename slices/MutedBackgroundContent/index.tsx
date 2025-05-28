import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MutedBackgroundContent`.
 */
export type MutedBackgroundContentProps =
  SliceComponentProps<Content.MutedBackgroundContentSlice>;

/**
 * Component for "MutedBackgroundContent" Slices.
 */
const MutedBackgroundContent: FC<MutedBackgroundContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="extra-big-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 lg:p-10">
            <blockquote className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed italic">
              <p>
                &quot;Investing with Borgman Capital has opened another path to{" "}
                <span className="font-semibold text-gray-900">
                  achieving my financial goals and diversification.
                </span>{" "}
                The team&apos;s thorough diligence and investment approach,
                along with Sequoya&apos;s leadership, provide me with peace of
                mind. Their expertise and{" "}
                <span className="font-semibold text-gray-900">
                  commitment to transparency
                </span>{" "}
                make all the difference.
              </p>
            </blockquote>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <cite className="text-gray-600 text-sm md:text-base font-medium not-italic">
                -Randy S., Executive Search Partner, Investor since 2018
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MutedBackgroundContent;
