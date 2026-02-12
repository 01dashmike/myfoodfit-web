import type { Metadata } from "next";
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
      <body className="flex min-h-screen flex-col bg-zinc-50">
        <header className="border-b border-zinc-200 bg-white print:hidden">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="/" className="logo-slot">
              MyFoodFit
            </a>
            <nav className="flex items-center gap-4 text-sm">
              <a
                href="/about"
                className="text-zinc-600 hover:text-zinc-900 transition"
              >
                About
              </a>
              <a
                href="/how-it-works"
                className="text-zinc-600 hover:text-zinc-900 transition"
              >
                How It Works
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {children}
        </main>

        <footer className="border-t border-zinc-200 bg-white print:hidden">
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">Company</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href="/about"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-it-works"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="/responsible-use"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Responsible Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/work-with-us"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Work With Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Research */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">Research</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href="/research-method"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Research Method
                    </a>
                  </li>
                  <li>
                    <a
                      href="/evidence-log"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Evidence Log
                    </a>
                  </li>
                  <li>
                    <a
                      href="/for-funders"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      For Funders
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">Legal</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href="/privacy"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cookies"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/data-handling"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Data Handling
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sub-processors"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Sub-Processors
                    </a>
                  </li>
                </ul>
              </div>

              {/* Data Rights */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">
                  Your Data Rights
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href="/data-requests"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Data Requests (DSAR)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/data-deletion"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      Delete Your Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:privacy@myfoodfit.co.uk"
                      className="text-zinc-600 hover:text-zinc-900 transition"
                    >
                      privacy@myfoodfit.co.uk
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-200 pt-6">
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
