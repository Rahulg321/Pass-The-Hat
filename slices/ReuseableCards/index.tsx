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
        <h2 className="text-dark-blue font-bold text-center">
          {slice.primary.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-8 lg:mt-12">
          {slice.primary.cards.map((card, index) => {
            return (
              <div className="bg-slate-50 p-6 rounded-lg" key={index}>
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <Check className="h-5 w-5 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {card.card_heading}
                </h3>
                <p className="text-slate-600">{card.card_description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReuseableCards;
