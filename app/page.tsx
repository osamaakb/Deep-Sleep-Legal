import Link from "next/link";

const APP_NAME = "White Noise: Sleep & Baby";

export default function HomePage() {
  return (
    <div>
      <h1 style={{ margin: "0 0 8px" }}>Legal Pages</h1>
      <p style={{ marginTop: 0, color: "#374151" }}>
        Use these links for App Store Connect Privacy Policy and Terms URLs for{" "}
        <strong>{APP_NAME}</strong>.
      </p>

      <ul style={{ paddingLeft: 18 }}>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms">Terms & Conditions</Link>
        </li>
      </ul>

      <div
        style={{
          marginTop: 18,
          padding: 14,
          borderRadius: 14,
          border: "1px solid #e5e7eb",
          background: "#fafafa"
        }}
      >
        <div style={{ fontWeight: 600 }}>Quick setup</div>
        <ol style={{ margin: "8px 0 0", paddingLeft: 18 }}>
          <li>Deploy to Vercel.</li>
          <li>
            Add these URLs in App Store Connect:
            <div style={{ marginTop: 6 }}>
              <code>/privacy</code> and <code>/terms</code>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
