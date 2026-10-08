export const storeUrls = {
  ios: "https://apps.apple.com/us/app/chesspawn/id6760585822",
  android: "https://play.google.com/store/apps/details?id=com.gicklatt.chesspawn",
};

export function getDownloadStore(navigator) {
  const userAgent = navigator.userAgent || "";
  const platform = navigator.userAgentData?.platform;

  if (platform === "Android" || /Android/i.test(userAgent)) {
    return storeUrls.android;
  }

  // iPadOS can identify itself as a Mac when requesting the desktop site.
  const touchMac =
    (navigator.platform === "MacIntel" || /Macintosh/i.test(userAgent)) &&
    navigator.maxTouchPoints > 1;

  if (platform === "iOS" || /iPhone|iPad|iPod/i.test(userAgent) || touchMac) {
    return storeUrls.ios;
  }

  return null;
}

export function installDownloadRedirect(window, document, navigator) {
  const store = getDownloadStore(navigator);
  if (!store) return;

  const redirect = () => {
    if (window.location.hash === "#download") {
      // Replace the landing URL so Back does not reopen a redirect loop.
      window.location.replace(store);
    }
  };

  const onClick = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    ) return;

    const anchor = event.target?.closest?.("a[href]");
    if (!anchor || anchor.hasAttribute("download")) return;
    if (anchor.target && anchor.target !== "_self") return;

    const destination = new URL(anchor.href, window.location.href);
    const current = new URL(window.location.href);
    if (
      destination.origin !== current.origin ||
      destination.pathname !== current.pathname ||
      destination.hash !== "#download"
    ) return;

    // Also handle clicks when #download is already the current hash.
    event.preventDefault();
    window.location.replace(store);
  };

  window.addEventListener("hashchange", redirect);
  document.addEventListener("click", onClick);
  redirect();

  return () => {
    window.removeEventListener("hashchange", redirect);
    document.removeEventListener("click", onClick);
  };
}
