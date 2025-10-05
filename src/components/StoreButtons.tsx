import { usePostHog } from "posthog-js/react";

export default function StoreButtons() {
  const posthog = usePostHog();

  return (
    <div className="flex flex-row justify-center md:justify-start gap-4 my-6 w-full max-w-sm mx-auto md:mx-0">
      <a
        href={import.meta.env.VITE_APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 overflow-visible"
        onClick={() => posthog.capture("app_store_button_clicked")}>
        <img
          src="/app_store.png"
          alt="App Store"
          className="h-auto w-auto min-w-38 transform transition-transform hover:scale-105"
        />
      </a>
      <a
        href={import.meta.env.VITE_PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 overflow-visible"
        onClick={() => posthog.capture("play_store_button_clicked")}>
        <img
          src="/play_store.png"
          alt="Google Play"
          className="h-auto w-auto min-w-38 transform transition-transform hover:scale-105"
        />
      </a>
    </div>
  );
}
