"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ArrowRight, Minus, Plus } from "lucide-react";

/**
 * Props for `ImageHeadingToggle`.
 */
export type ImageHeadingToggleProps =
  SliceComponentProps<Content.ImageHeadingToggleSlice>;

/**
 * Component for "ImageHeadingToggle" Slices.
 */
const ImageHeadingToggle: FC<ImageHeadingToggleProps> = ({ slice }) => {
  const [openSections, setOpenSections] = useState<string[]>([
    "individuals-joint",
  ]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const sections = [
    {
      id: "individuals",
      title: "Individuals",
      content: (
        <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-6 pr-4 pb-6">
          <p>
            - with an annual income exceeding $200,000 in each of the two most
            recent years or joint income with a spouse exceeding $300,000 for
            those years and a reasonable expectation of the same income level in
            the current year; OR
          </p>
          <p>
            - with a net worth over $1 million, either alone or together with a
            spouse (excluding the value of the person&apos;s primary residence)
          </p>
        </div>
      ),
    },
    {
      id: "individuals-joint",
      title: "Individuals - Joint with Spouse or Spousal Equivalent",
      content: (
        <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-6 pr-4 pb-6">
          <p>
            - with a combined pre-tax income exceeding $300,000 annually for the
            past two years, with reasonable expectation of maintaining or
            exceeding that total income the following year; OR
          </p>
          <p>
            - with a combined net worth of more than $1 million, excluding the
            value of the primary residence
          </p>
        </div>
      ),
    },
    {
      id: "trusts",
      title: "Trusts",
      content: (
        <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-6 pr-4 pb-6">
          <p>
            - with total assets in excess of $5 million, not formed to acquire
            the securities offered, whose purchases a sophisticated person makes
            or gives investment advice
          </p>
          <p>
            - revocable trusts may qualify if the person who has the power to
            revoke the trust is an accredited investor
          </p>
        </div>
      ),
    },
    {
      id: "entities",
      title: "Entities",
      content: (
        <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-6 pr-4 pb-6">
          <p>
            - a corporation, partnership, limited liability company or similar
            entity with total assets in excess of $5 million and not formed for
            the specific purpose of acquiring the securities offered
          </p>
          <p>
            - a bank, insurance company, registered investment company, business
            development company, or small business investment company
          </p>
          <p>
            - an employee benefit plan with total plan assets in excess of $5
            million or whose investment decision is made by a plan fiduciary
            that is an accredited investor
          </p>
        </div>
      ),
    },
    {
      id: "us-residents",
      title: "U.S. Residents",
      content: (
        <div className="space-y-3 text-gray-600 text-sm leading-relaxed pl-6 pr-4 pb-6">
          <p>
            - any natural person who is a resident of the United States and
            meets the individual accredited investor criteria listed above
          </p>
          <p>
            - foreign nationals may also qualify as accredited investors if they
            meet the financial thresholds and other applicable requirements
          </p>
          <p>
            - verification of accredited investor status may be required through
            financial documentation
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="extra-big-container grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left side - Image */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none">
            <Image
              src="/investment-chart.png"
              alt="Professional investment charts and financial documents"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2 space-y-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              What are the requirements to invest in private equity as a retail
              investor?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our deals are open to accredited investors, as defined by the SEC
              in <span className="underline font-medium">Rule 501</span> of
              Regulation D, who meet the following criteria:
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
            {sections.map((section, index) => (
              <Collapsible
                key={section.id}
                open={openSections.includes(section.id)}
                onOpenChange={() => toggleSection(section.id)}
              >
                <CollapsibleTrigger className="w-full">
                  <div
                    className={`flex items-center justify-between py-5 px-6 hover:bg-gray-50 transition-colors ${
                      index !== sections.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    } ${openSections.includes(section.id) ? "bg-gray-50" : "bg-white"}`}
                  >
                    <span className="text-left font-medium text-gray-900 text-base pr-4">
                      {section.title}
                    </span>
                    {openSections.includes(section.id) ? (
                      <Minus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    )}
                  </div>
                </CollapsibleTrigger>
                {section.content && (
                  <CollapsibleContent className="overflow-hidden bg-gray-50">
                    {section.content}
                  </CollapsibleContent>
                )}
              </Collapsible>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-md font-medium text-sm transition-colors inline-flex items-center gap-2">
              VIEW FULL SEC GUIDELINES
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageHeadingToggle;
