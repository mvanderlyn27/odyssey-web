import { Link } from "react-router-dom";

export default function Eula() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-24 py-12 animate-fade-in relative">
        <Link to="/" className="absolute top-8 left-8 text-white hover:underline">
          &larr; Back
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">End User License Agreement</h1>
        <div className="text-center">
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer">
            {"Apple's Standard EULA"}
          </a>
        </div>
      </main>
      <footer className="py-4">
        <div className="container mx-auto flex justify-center">
          <Link to="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
