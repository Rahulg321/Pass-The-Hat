"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

const testimonials = [
  [
    {
      id: 1,
      rating: 5,
      quote:
        "The team exercises tremendous care and diligence in choosing quality companies. All these factors coalesce to provide above average returns, lower volatility compared to the stock market, and personal portfolio diversification.",
      name: "Ann H.",
      since: "Investor since 2021",
    },
    {
      id: 2,
      rating: 5,
      quote:
        "When Borgman Capital presents me with a new opportunity, I always want to invest because I believe that they are committed to making great companies even greater and more valuable.",
      name: "Mike M.",
      since: "Investor since 2018",
    },
    {
      id: 3,
      rating: 5,
      quote:
        "I firmly believe that their approach to investing will yield impressive returns for their investors for many years to come.",
      name: "Max M.",
      since: "Investor since 2018",
    },
  ],
  // Additional slides can be added here
  [
    {
      id: 4,
      rating: 5,
      quote:
        "Outstanding performance and professional service. The team consistently delivers results that exceed expectations.",
      name: "Sarah K.",
      since: "Investor since 2019",
    },
    {
      id: 5,
      rating: 5,
      quote:
        "Their strategic approach and market insights have been invaluable to my investment portfolio growth.",
      name: "David L.",
      since: "Investor since 2020",
    },
    {
      id: 6,
      rating: 5,
      quote:
        "Transparent communication and excellent returns make them my preferred investment partner.",
      name: "Jennifer R.",
      since: "Investor since 2017",
    },
  ],
];

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
          {testimonials[currentSlide].map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="text-gray-500 text-sm">
                <div className="font-medium text-gray-700">
                  {testimonial.name}
                </div>
                <div>{testimonial.since}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
