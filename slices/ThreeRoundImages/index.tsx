import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ThreeRoundImages`.
 */
export type ThreeRoundImagesProps =
  SliceComponentProps<Content.ThreeRoundImagesSlice>;

/**
 * Component for "ThreeRoundImages" Slices.
 */
const ThreeRoundImages: FC<ThreeRoundImagesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="big-container">
        <div className="flex flex-col items-center text-center ">
          <h1 className="text-dark-blue font-bold text-center">
            {slice.primary.heading}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-16 w-full max-w-4xl">
            {slice.primary.cards.map((card, index) => {
              return (
                <div
                  className="flex flex-col items-center space-y-4"
                  key={index}
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-64 lg:h-64 rounded-full overflow-hidden">
                    <PrismicNextImage
                      field={card.card_image}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-600 tracking-wide">
                    {card.card_title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeRoundImages;
