"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ScrollCards`.
 */
export type ScrollCardsProps = SliceComponentProps<Content.ScrollCardsSlice>;

/**
 * Component for "ScrollCards" Slices.
 */
const ScrollCards: FC<ScrollCardsProps> = ({ slice }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "fill-orange-400 text-orange-400" : "fill-gray-300 text-gray-300"}`}
      />
    ));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="extra-big-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Just a Few Happy Investors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {slice.primary.cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {renderStars(Number(card.investor_rating))}
              </div>

              <blockquote className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                &quot;{card.investor_quote}&quot;
              </blockquote>

              <div className="text-gray-500 text-sm">
                <div className="font-medium text-gray-700">
                  {card.investor_name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
