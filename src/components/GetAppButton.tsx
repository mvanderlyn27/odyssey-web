const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // Windows Phone must come first because its user agent also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from userAgent includes iPhone, iPad, and iPod
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return "iOS";
  }

  return "unknown";
};

const GetAppButton = () => {
  const handleGetAppClick = () => {
    const os = getMobileOperatingSystem();

    if (os === "iOS") {
      window.location.href = import.meta.env.VITE_APP_STORE_URL;
    } else if (os === "Android") {
      window.location.href = import.meta.env.VITE_PLAY_STORE_URL;
    } else {
      const storeButtons = document.getElementById("store-buttons");
      if (storeButtons) {
        storeButtons.scrollIntoView({ behavior: "smooth", block: "center" });

        const shake = (count: number) => {
          if (count === 0) return;
          storeButtons.classList.add("animate-shake");
          setTimeout(() => {
            storeButtons.classList.remove("animate-shake");
            setTimeout(() => shake(count - 1), 500);
          }, 1500);
        };

        shake(3);
      }
    }
  };

  return (
    <button
      onClick={handleGetAppClick}
      className="bg-white text-black text-sm md:text-md lg:text-lg font-bold py-2 px-8 rounded-full">
      Get App
    </button>
  );
};

export default GetAppButton;
