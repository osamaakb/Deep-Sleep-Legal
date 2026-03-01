import Link from "next/link";

const APP_NAME = "White Noise: Sleep & Baby";

export default function HomePage() {
  return (
    <div>
      <h1 style={{ margin: "0 0 8px" }}>Legal Pages</h1>
      <ul style={{ paddingLeft: 18 }}>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms">Terms & Conditions</Link>
        </li>
        <li>
          <Link href="/support">Support & FAQ</Link>
        </li>
      </ul>
    </div>
  );
}
