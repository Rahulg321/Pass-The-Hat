import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
          <h2 className="">
            Investing with Pass the Hat means investing alongside our
            principals.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6 shadow-lg">
              <Image
                src="/placeholder.svg?height=256&width=256&query=professional headshot of businessman in navy suit with white shirt"
                alt="Sequoya Borgman"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Sequoya Borgman
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-1">
              FOUNDER AND CEO
            </p>
            <p className="text-sm text-gray-500 mb-4">BORGMAN CAPITAL</p>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              Before founding Borgman Capital, Sequoya was a partner and
              practice leader at RSM US LLP, a leading multi-national public
              accounting firm. Throughout his career, Sequoya has advised on
              complex transactions for both large public companies and small
              private firms, nationally and globally. He has been involved in
              hundreds of mergers, acquisitions, restructurings, and financing
              transactions. He brings extensive expertise in structuring,
              planning, and due diligence.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6 shadow-lg">
              <Image
                src="/placeholder.svg?height=256&width=256&query=professional headshot of businessman with beard in dark suit"
                alt="Brent Adam"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Brent Adam
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-1">
              MANAGING DIRECTOR AND SHAREHOLDER
            </p>
            <p className="text-sm text-gray-500 mb-4">BORGMAN CAPITAL</p>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              Brent has 20+ years of finance and accounting experience focusing
              on mergers and acquisitions, with many of those years spent at
              Ernst & Young. Brent then joined a venture capital firm and
              eventually became CFO of one of its portfolio companies, guiding
              it to a successful exit to a publicly traded company. He has been
              involved in hundreds of M&A transactions, with deals ranging from
              $1 million to $6 billion in enterprise value.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6 shadow-lg">
              <Image
                src="/placeholder.svg?height=256&width=256&query=professional headshot of older businessman in dark suit smiling"
                alt="Michael Pepke"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Michael Pepke
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-1">
              MANAGING DIRECTOR AND SHAREHOLDER
            </p>
            <p className="text-sm text-gray-500 mb-4">BORGMAN CAPITAL</p>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              Prior to joining Borgman Capital, Mike practiced corporate law at
              Reinhart Boerner Van Deuren s.c. for 41 years. Over his career,
              Mike has provided legal counsel to a wide range of companies
              involved in various industries. He also served as general counsel
              to privately-owned companies, with a focus on acquisitions and
              succession planning. Mike&apos;s extensive experience allows him
              to contribute practical, real-world advice on complex legal and
              business matters.
            </p>
          </div>
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
