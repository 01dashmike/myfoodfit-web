import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | MyFoodFit",
    default: "MyFoodFit",
  },
  description:
    "MyFoodFit helps people understand food choices against their dietary needs using a clear green / amber / red system.",
  metadataBase: new URL("https://myfoodfit.co"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-zinc-50">
        <Header />

        <main className="max-w-4xl mx-auto w-full flex-1 px-6 py-8">
          {children}
        </main>

        <footer className="print:hidden bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-gunmetal mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about">About</a></li>
                  <li><a href="/how-it-works">How It Works</a></li>
                  <li><a href="/responsible-use">Responsible Use</a></li>
                  <li><a href="/work-with-us">Work With Us</a></li>
                </ul>
              </div>

              {/* Research */}
              <div>
                <h3 className="text-sm font-semibold text-gunmetal mb-3">Research</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/research-method">Research Method</a></li>
                  <li><a href="/evidence-log">Evidence Log</a></li>
                  <li><a href="/for-funders">For Funders</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-sm font-semibold text-gunmetal mb-3">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/cookies">Cookie Policy</a></li>
                  <li><a href="/data-handling">Data Handling</a></li>
                  <li><a href="/sub-processors">Sub-Processors</a></li>
                </ul>
              </div>

              {/* Data Rights */}
              <div>
                <h3 className="text-sm font-semibold text-gunmetal mb-3">Your Data Rights</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/data-requests">Data Requests (DSAR)</a></li>
                  <li><a href="/data-deletion">Delete Your Data</a></li>
                  <li><a href="mailto:support@myfoodfit.co.uk">support@myfoodfit.co.uk</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200">
              <p className="text-xs text-zinc-500">
                © {new Date().getFullYear()} Food Signal Ltd. Registered in
                England and Wales. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
