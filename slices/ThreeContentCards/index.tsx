import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ThreeContentCards`.
 */
export type ThreeContentCardsProps =
  SliceComponentProps<Content.ThreeContentCardsSlice>;

/**
 * Component for "ThreeContentCards" Slices.
 */
const ThreeContentCards: FC<ThreeContentCardsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="big-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-blue mb-8">
            {slice.primary.heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {slice.primary.tagline}
          </p>
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {slice.primary.cards.map((card, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="mb-6">
                  <PrismicNextImage
                    field={card.card_image}
                    className="w-full h-64 sm:h-72 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-dark-blue mb-4">
                  {card.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {card.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreeContentCards;
