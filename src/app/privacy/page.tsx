import Link from "next/link";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          This is the privacy policy for our application. We are committed to protecting your privacy.
        </p>
        <p>
          We collect information that you provide to us directly, such as when you create an account, and we also
          collect information automatically, such as your IP address and device type. We use this information to provide
          and improve our services, and to communicate with you.
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
