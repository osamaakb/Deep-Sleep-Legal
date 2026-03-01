import Link from "next/link";

const APP_NAME = "White Noise: Sleep & Baby";
const SUPPORT_EMAIL = "sparklestudiohelp@gmail.com";

export default function SupportPage() {
  return (
    <article>
      <h1 style={{ margin: "0 0 6px" }}>App Support</h1>
      <p style={{ marginTop: 0, color: "#6b7280" }}>
        Support for {APP_NAME}
      </p>

      <div
        style={{
          padding: 14,
          borderRadius: 14,
          border: "1px solid #e5e7eb",
          background: "#fafafa",
          margin: "14px 0 18px"
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: 6 }}>Contact</div>
        <div style={{ color: "#111827" }}>
          Email us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} style={{ fontWeight: 600 }}>
            {SUPPORT_EMAIL}
          </a>
        </div>
        <div style={{ color: "#6b7280", fontSize: 14, marginTop: 6 }}>
          Please include your device model, iOS version, and what you expected to
          happen vs. what happened.
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>

      <h3>How do I use the sleep timer?</h3>
      <p>
        Open the player, select a sound (or Mix Mode), then choose a duration in
        the Sleep Timer. You can enable Fade-out to lower volume smoothly before
        stopping.
      </p>

      <h3>Does the app work offline?</h3>
      <p>
        Yes. {APP_NAME} is designed to work offline. Once installed, you can
        play sounds without an internet connection.
      </p>

      <h3>There are no ads—how is the app supported?</h3>
      <p>
        The app is free to use with optional in-app purchases. Purchases are
        handled securely through Apple’s App Store.
      </p>

      <h3>I made a purchase—how do I restore it?</h3>
      <p>
        In the app, open Settings (or Premium), then tap <strong>Restore Purchases</strong>.
        If it still doesn’t restore, email us and include your Apple ID email
        (only if you’re comfortable) and the purchase date.
      </p>

      <h3>My sound stops or the volume changes unexpectedly</h3>
      <ul>
        <li>Check Silent Mode / Focus mode settings.</li>
        <li>Disable Low Power Mode to improve background playback stability.</li>
        <li>Close other audio apps that may take over playback.</li>
      </ul>

      <h3>How do I request a sound or feature?</h3>
      <p>
        Email us with the subject <strong>Feature Request</strong> and tell us
        what sound you want (example: “rain on tent”, “pink noise”, “dryer”).
      </p>

      <h3>Is this app for kids?</h3>
      <p>
        The app is designed for a general audience and includes a baby sleep
        section that parents may use. The app does not collect personal data.
      </p>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "18px 0"
        }}
      />

      <h2>Legal</h2>
      <p style={{ marginBottom: 6 }}>
        <Link href="/privacy">Privacy Policy</Link>
      </p>
      <p style={{ marginTop: 0 }}>
        <Link href="/terms">Terms & Conditions</Link>
      </p>
    </article>
  );
}
