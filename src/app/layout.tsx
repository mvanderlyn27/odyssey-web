import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odyssey.",
  description: "Become Legend",
  openGraph: {
    images: ["/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
