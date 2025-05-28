import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Realized Investments
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We aim to make win-win investment decisions, achieve best in class
            returns, and be responsible stewards of the companies and real
            estate properties in our portfolio.
          </p>
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Material Handling Holdings */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=300&width=400&query=forklift in warehouse with wooden pallets and industrial setting"
                alt="Material Handling Holdings - Forklift in warehouse"
                width={400}
                height={300}
                className="w-full h-64 sm:h-72 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Material Handling Holdings
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              Borgman Capital integrated three businesses and collaborated with
              management on organic growth initiatives to create long-term value
              over a five-year hold period.
            </p>
            <Link
              href="#"
              className="text-gray-900 font-semibold underline hover:text-gray-700 transition-colors"
            >
              READ SUCCESS STORY
            </Link>
          </div>

          {/* Aerial Work Platforms */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=300&width=400&query=blue aerial work platform lift against red brick building construction site"
                alt="Aerial Work Platforms - Construction equipment"
                width={400}
                height={300}
                className="w-full h-64 sm:h-72 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aerial Work Platforms
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              Growth was driven by strategic equipment purchases, fleet
              diversification, operational improvements, geographic expansion
              and increasing market share.
            </p>
            <Link
              href="#"
              className="text-gray-900 font-semibold underline hover:text-gray-700 transition-colors"
            >
              READ SUCCESS STORY
            </Link>
          </div>

          {/* Industrial Real Estate Properties */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=300&width=400&query=modern industrial building with corrugated metal siding and concrete base"
                alt="Industrial Real Estate Properties - Modern industrial building"
                width={400}
                height={300}
                className="w-full h-64 sm:h-72 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Industrial Real Estate Properties
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              Borgman Capital divested three industrial real estate assets
              located in Janesville, Neenan and Sussex, Wisconsin totaling
              56,500 square feet.
            </p>
            <Link
              href="#"
              className="text-gray-900 font-semibold underline hover:text-gray-700 transition-colors"
            >
              READ SUCCESS STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeContentCards;
