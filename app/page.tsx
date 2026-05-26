const accent = "#8b5cf6";

const features = [
  "Real-time material swaps",
  "Smooth camera transitions",
  "Mobile gestures + haptics",
  "Shareable configurations",
];

export default function Home() {
  return (
    <main style={{ "--accent": accent } as React.CSSProperties}>
      <span className="pill">
        <span className="dot" /> In development
      </span>
      <h1>configurator-3d</h1>
      <p className="tagline">
        A 3D product configurator — customize materials and colors in real time,
        with motion and gestures treated as first-class UX.
      </p>
      <ul className="features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <footer>
        <span>By Jamison Kimminau</span>
        <a href="https://github.com/jkimminau/configurator-3d">
          View on GitHub →
        </a>
      </footer>
    </main>
  );
}
