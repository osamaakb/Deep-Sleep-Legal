const APP_NAME = "White Noise: Sleep & Baby";
const SUPPORT_EMAIL = "sparklestudiohelp@gmail.com";
const LAST_UPDATED = "March 1, 2026"; // change anytime

export default function PrivacyPage() {
  return (
    <article>
      <h1 style={{ margin: "0 0 6px" }}>Privacy Policy</h1>
      <p style={{ marginTop: 0, color: "#6b7280" }}>
        For {APP_NAME} — Last updated: {LAST_UPDATED}
      </p>

      <h2>Overview</h2>
      <p>
        {APP_NAME} respects your privacy. This app is designed to provide
        relaxing white noise and sleep sounds without collecting personal
        information.
      </p>
      <p>We do not collect, store, or share any personal data.</p>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "18px 0"
        }}
      />

      <h2>Information We Do Not Collect</h2>
      <p>
        We do <strong>not</strong> collect:
      </p>
      <ul>
        <li>Names</li>
        <li>Email addresses</li>
        <li>Phone numbers</li>
        <li>Location data</li>
        <li>Device identifiers</li>
        <li>Advertising identifiers (IDFA)</li>
        <li>Usage analytics</li>
        <li>Audio recordings</li>
        <li>Contacts or photos</li>
        <li>Any personally identifiable information</li>
      </ul>
      <p>The app works fully offline and does not require account creation.</p>

      <h2>In-App Purchases</h2>
      <p>
        The app offers optional in-app purchases processed securely through
        Apple’s App Store. We do not process payments directly and do not store
        payment information.
      </p>
      <p>
        Purchase validation is handled by Apple and RevenueCat. We do not store
        any personal data on our own servers.
      </p>
      <p>
        Apple Privacy Policy:{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.apple.com/legal/privacy/
        </a>
        <br />
        RevenueCat Privacy Policy:{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          https://www.revenuecat.com/privacy
        </a>
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We use RevenueCat solely to manage in-app purchase functionality. We do
        not use advertising SDKs, tracking technologies, or analytics services.
      </p>

      <h2>Data Storage</h2>
      <p>
        Any sound settings and preferences are stored locally on your device. We
        do not operate servers and do not store user data externally.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        This app is designed for a general audience and may be used by parents
        for baby sleep sounds. We do not knowingly collect personal information
        from children under 13.
      </p>

      <h2>Your Privacy Rights</h2>
      <p>
        Because we do not collect or store personal data, there is no personal
        information to access, modify, or delete.
      </p>
      <p>
        If you have any privacy-related questions, contact us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy if the app’s functionality changes.
        Updates will be posted on this page with a revised “Last updated” date.
      </p>
    </article>
  );
}
