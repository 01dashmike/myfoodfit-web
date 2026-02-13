import type { Metadata } from "next";
import Image from "next/image";
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
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#fafafa' }}>
        <header className="print:hidden" style={{ background: '#fff', borderBottom: '1px solid #e4e4e7' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/logo.png"
                alt="MyFoodFit"
                width={36}
                height={36}
                style={{ height: '36px', width: 'auto' }}
              />
            </a>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <a href="/about">About</a>
              <a href="/how-it-works">How It Works</a>
              <a href="/work-with-us">Work With Us</a>
              <a href="/research-method">Research Method</a>
            </nav>
          </div>
        </header>

        <main style={{ maxWidth: '56rem', margin: '0 auto', width: '100%', flex: 1, padding: '2rem 1.5rem' }}>
          {children}
        </main>

        <footer className="print:hidden" style={{ background: '#fff', borderTop: '1px solid #e4e4e7' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
              {/* Company */}
              <div>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#18181b', marginBottom: '0.75rem' }}>Company</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <li><a href="/about">About</a></li>
                  <li><a href="/how-it-works">How It Works</a></li>
                  <li><a href="/responsible-use">Responsible Use</a></li>
                  <li><a href="/work-with-us">Work With Us</a></li>
                </ul>
              </div>

              {/* Research */}
              <div>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#18181b', marginBottom: '0.75rem' }}>Research</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <li><a href="/research-method">Research Method</a></li>
                  <li><a href="/evidence-log">Evidence Log</a></li>
                  <li><a href="/for-funders">For Funders</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#18181b', marginBottom: '0.75rem' }}>Legal</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/cookies">Cookie Policy</a></li>
                  <li><a href="/data-handling">Data Handling</a></li>
                  <li><a href="/sub-processors">Sub-Processors</a></li>
                </ul>
              </div>

              {/* Data Rights */}
              <div>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#18181b', marginBottom: '0.75rem' }}>Your Data Rights</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <li><a href="/data-requests">Data Requests (DSAR)</a></li>
                  <li><a href="/data-deletion">Delete Your Data</a></li>
                  <li><a href="mailto:support@myfoodfit.co.uk">support@myfoodfit.co.uk</a></li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e4e4e7' }}>
              <p style={{ fontSize: '0.75rem', color: '#71717a' }}>
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
