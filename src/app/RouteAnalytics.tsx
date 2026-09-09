// ── GA4 Route Analytics ────────────────────────────────────────────────────
//
// Sends GA4 page_view events on SPA navigation without duplicates.
//
// Design:
//  - The static HTML files already fire gtag('config', ...) on page load, which
//    sends the initial page_view for SSR/static pages.
//  - This component runs ONLY after React hydration. It uses a ref to track
//    whether the component has already sent a view for the current URL, so it
//    does NOT double-send the initial page load.
//  - React StrictMode double-invokes effects in development only, but because
//    we track the "last sent URL" the second invocation is a no-op.
//  - On subsequent client-side navigations (pathname or search changes) a fresh
//    page_view is sent.
//
// Event helpers are exported so components can call them directly.

import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtagEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

// ── Named event helpers (exported for use in components) ──────────────────

/** Call when a user clicks a WhatsApp CTA button. */
export function trackWhatsAppClick(source?: string) {
  gtagEvent("whatsapp_click", { event_category: "contact", source });
}

/** Call when a user clicks a phone number link. */
export function trackPhoneClick() {
  gtagEvent("phone_click", { event_category: "contact" });
}

/** Call when a user clicks an email link. */
export function trackEmailClick() {
  gtagEvent("email_click", { event_category: "contact" });
}

/** Call when a user clicks the main contact/consult CTA. */
export function trackContactCta(label?: string) {
  gtagEvent("contact_cta_click", { event_category: "engagement", label });
}

// ── RouteAnalytics component ───────────────────────────────────────────────

export function RouteAnalytics() {
  const location = useLocation();
  // Track the last URL we already reported so we never double-send.
  // Initialise to the current URL — the static HTML page_view covers it.
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    const url = window.location.href;

    // Skip if we already sent a view for this exact URL.
    if (lastSent.current === url) return;

    // Skip the very first render when it matches the SSR/static page_view.
    // The gtag('config') in the static HTML already fired for this URL.
    if (lastSent.current === null) {
      lastSent.current = url;
      return;
    }

    lastSent.current = url;

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: url,
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return null;
}
