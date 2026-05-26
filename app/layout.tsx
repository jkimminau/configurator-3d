import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "configurator-3d — Real-time 3D product configurator",
  description:
    "A 3D product configurator with real-time material swaps, smooth camera transitions, and mobile gestures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
