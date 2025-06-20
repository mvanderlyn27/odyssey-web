import Link from "next/link";

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Support</h1>
        <p className="mb-4">If you need help with our application, please contact us at odyssey@sliceoflife.com</p>
      </main>
      <footer className="py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/" className="hover:underline">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
