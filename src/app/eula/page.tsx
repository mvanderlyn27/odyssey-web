import Link from "next/link";

export default function Eula() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-24 py-12 animate-fade-in relative">
        <Link href="/" className="absolute top-8 left-8 text-white hover:underline">
          &larr; Back
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">End User License Agreement</h1>
        <div className="text-center">
          <Link
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer">
            Apple's Standard EULA
          </Link>
        </div>
      </main>
      <footer className="py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
