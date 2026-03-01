import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "White Noise: Sleep & Baby";

export const metadata: Metadata = {
  title: `${APP_NAME} — Legal`,
  description: "Privacy Policy and Terms & Conditions"
};

const containerStyle: React.CSSProperties = {
  maxWidth: 920,
  margin: "0 auto",
  padding: "24px 16px",
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  lineHeight: 1.6
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  gap: 16,
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #e5e7eb",
  paddingBottom: 12,
  marginBottom: 20
};

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  color: "#111827"
};

const footerStyle: React.CSSProperties = {
  marginTop: 32,
  paddingTop: 16,
  borderTop: "1px solid #e5e7eb",
  color: "#6b7280",
  fontSize: 14
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={containerStyle}>
          <header style={headerStyle}>
            <div>
              <div style={{ fontWeight: 700 }}>{APP_NAME}</div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                Privacy Policy & Terms
              </div>
            </div>
            <nav style={navStyle}>
              <Link href="/" style={linkStyle}>
                Home
              </Link>
              <Link href="/privacy" style={linkStyle}>
                Privacy
              </Link>
              <Link href="/terms" style={linkStyle}>
                Terms
              </Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer style={footerStyle}>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
