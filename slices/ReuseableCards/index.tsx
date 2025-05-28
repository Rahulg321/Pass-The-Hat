import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Check } from "lucide-react";

/**
 * Props for `ReuseableCards`.
 */
export type ReuseableCardsProps =
  SliceComponentProps<Content.ReuseableCardsSlice>;

/**
 * Component for "ReuseableCards" Slices.
 */
const ReuseableCards: FC<ReuseableCardsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="extra-big-container">
        <h1 className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12 md:text-4xl lg:text-5xl">
          3 Easy Steps to Private Market Investing
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <Check className="h-5 w-5 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Browse Our Pre-Vetted Offerings
            </h3>
            <p className="text-slate-600">
              Review our active opportunities that have Borgman Capital&apos;s
              seal of approval.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <Check className="h-5 w-5 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Create Your Free Account
            </h3>
            <p className="text-slate-600">
              Gain unrestricted access to everything you&apos;ll need to make an
              informed decision.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center mb-4">
              <Check className="h-5 w-5 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Become a Pass the Hat Investor
            </h3>
            <p className="text-slate-600">
              Join our community of more than 400 investors from across the U.S.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReuseableCards;
