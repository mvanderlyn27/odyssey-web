export default function StoreButtons() {
  return (
    <div className="flex flex-row justify-center md:justify-start gap-4 my-6 w-full max-w-sm mx-auto md:mx-0">
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 transform transition-transform hover:scale-105">
        <img src="/app_store.png" alt="App Store" className="h-12 md:h-16 w-auto object-contain" />
      </a>
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 transform transition-transform hover:scale-105">
        <img src="/play_store.png" alt="Google Play" className="h-12 md:h-16 w-auto object-contain" />
      </a>
    </div>
  );
}
