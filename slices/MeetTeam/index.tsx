import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";

/**
 * Props for `MeetTeam`.
 */
export type MeetTeamProps = SliceComponentProps<Content.MeetTeamSlice>;

const MeetTeam: FC<MeetTeamProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-16 px-4 bg-gray-50"
    >
      <div className="big-container">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading size="md" className="text-[#19124B] font-bold">
            {slice.primary.heading}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {slice.primary.teams.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6 shadow-lg">
                <PrismicNextImage
                  field={member.person_image}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ">
                {member.person_name}
              </h3>
              <p className="text-sm font-medium text-gray-600 ">
                {member.person_designation}
              </p>
              <p className="text-sm text-gray-500 ">{member.person_company}</p>
              <div className="prose prose-sm">
                <PrismicRichText field={member.content} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
            MEET OUR TEAM
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
