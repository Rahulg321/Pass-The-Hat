import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left section - Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">PASS</span>
              <div className="w-8 h-6 bg-blue-400 rounded-sm flex items-center justify-center">
                <div className="w-4 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-blue-400">HAT</span>
            </div>
            <p className="text-sm text-gray-600">
              An affiliate of Borgman Capital LLC
            </p>
            <div className="flex items-center space-x-2 text-blue-500">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:PassTheHat@borgmancapital.com"
                className="text-sm hover:underline"
              >
                PassTheHat@borgmancapital.com
              </a>
            </div>
          </div>

          {/* Middle section - Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/how-it-works"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                How it Works
              </Link>
              <Link
                href="/offerings"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Offerings
              </Link>
              <Link
                href="/track-record"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Track Record
              </Link>
              <Link
                href="/faq"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                FAQ
              </Link>
              <Link
                href="/investment-process"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Investment Process
              </Link>
            </div>
            <div className="space-y-3">
              <Link
                href="/privacy-policy"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/non-disclosure"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Non-Disclosure Agreement
              </Link>
              <Link
                href="/support"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="border-t border-gray-200 py-8">
          <div className="space-y-4 text-xs text-gray-500 leading-relaxed">
            <p>
              This website is for informational purposes only and does not
              constitute an offer to sell any security. This website does not
              constitute a solicitation to buy any security in any jurisdiction
              where such solicitation would be unlawful. Investment
              opportunities available through Pass the Hat are speculative and
              involve substantial risk. You should not invest unless you can
              sustain the risk of loss of capital, including the risk of total
              loss of capital. Our efforts to vet investment opportunities may
              not reveal or highlight all relevant facts that are necessary or
              helpful and will not eliminate the substantial risk of loss from
              any investment opportunity. All investors should consider their
              individual factors and risk tolerance with a professional advisor
              of their choosing when deciding if an investment is appropriate.
              Private placements are illiquid investments, in that they cannot
              be easily sold or exchanged for cash, and are intended for
              investors who do not need a liquid investment.
            </p>
            <p>
              Performance information presented on this website has not been
              audited or verified by a third party. Nothing on this website
              should be interpreted to state or imply that past performance is
              an indication of future performance. All investments involve risk
              and are not guaranteed. By accessing Pass the Hat, you agree to be
              bound by its Terms and Conditions, Non-Disclosure Agreement,
              Privacy Policy, and any other policies posted on this website.
              Pass the Hat is only intended for accredited investors in the
              United States.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            ©2025 Pass the Hat. All rights reserved.
          </p>
          <Button variant="outline" size="sm" className="mt-4 sm:mt-0">
            Cookie Preferences
          </Button>
        </div>
      </div>
    </footer>
  );
}
