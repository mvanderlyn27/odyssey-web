import Link from "next/link";

export default function Eula() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">End User License Agreement</h1>
        <p className="mb-4">
          This is the end user license agreement for our application. By using our application, you agree to be bound by
          this agreement.
        </p>
        <p>
          You are granted a non-exclusive, non-transferable, revocable license to access and use the application
          strictly in accordance with these terms of use.
        </p>
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
