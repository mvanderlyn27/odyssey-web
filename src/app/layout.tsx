import type { Metadata } from "next";
import { PHProvider } from "@/components/PostHogProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odyssey.",
  description: "Become Legend",
  metadataBase: new URL("https://www.odysseyfit.app"),
  openGraph: {
    images: ["/og_image.png"],
    type: "website",
    url: "https://www.odysseyfit.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className="antialiased">{children}</body>
      </PHProvider>
    </html>
  );
}
