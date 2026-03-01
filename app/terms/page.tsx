const APP_NAME = "White Noise: Sleep & Baby";
const SUPPORT_EMAIL = "sparklestudiohelp@gmail.com";
const LAST_UPDATED = "March 1, 2026"; // change anytime

export default function TermsPage() {
  return (
    <article>
      <h1 style={{ margin: "0 0 6px" }}>Terms & Conditions</h1>
      <p style={{ marginTop: 0, color: "#6b7280" }}>
        For {APP_NAME} — Last updated: {LAST_UPDATED}
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading or using {APP_NAME}, you agree to these Terms &
        Conditions. If you do not agree, please do not use the app.
      </p>

      <h2>2. Use of the App</h2>
      <p>
        {APP_NAME} provides white noise and sleep sounds for personal,
        non-commercial use. You agree not to misuse the app, attempt to disrupt
        it, or use it in violation of applicable laws.
      </p>

      <h2>3. In-App Purchases</h2>
      <p>
        The app may offer optional in-app purchases through Apple’s App Store.
        All payments and refunds are handled by Apple under their terms and
        policies. We do not store payment information.
      </p>

      <h2>4. No Medical Advice</h2>
      <p>
        {APP_NAME} is not a medical device and does not provide medical advice.
        If you have a medical concern, please consult a qualified professional.
      </p>

      <h2>5. Availability & Changes</h2>
      <p>
        We may modify, suspend, or discontinue parts of the app at any time,
        including sound content and features. We may also update these Terms.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        The app, its content, and all related intellectual property are owned by
        or licensed to us. You may not copy, redistribute, or resell any portion
        of the app except as permitted by law.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        The app is provided “as is” and “as available” without warranties of any
        kind, express or implied, including fitness for a particular purpose.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, we will not be liable for any
        indirect, incidental, special, consequential, or punitive damages arising
        from your use of the app.
      </p>

      <h2>9. Contact</h2>
      <p>
        If you have questions about these Terms, contact us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of your place of residence, unless
        applicable law requires otherwise.
      </p>
    </article>
  );
}
