// ── GA4 Route Analytics ────────────────────────────────────────────────────
//
// Sends GA4 page_view events on SPA navigation without duplicates.
//
// Design:
//  - initGa4() runs once on the client after React mounts. It injects the
//    gtag.js script dynamically and calls gtag('config', ...), which sends the
//    initial page_view. Static HTML files contain NO GA4 scripts.
//  - This component tracks the "last sent URL" so it does NOT double-send the
//    initial page_view that gtag('config') already fired.
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

const GA4_ID = "G-GM03DD1T2R";

// Injects GA4 once on the client. SSR-safe: never touches window/document
// during prerender. Idempotent: a flag prevents double-initialization.
function initGa4() {
  if (typeof window === "undefined") return;
  if ((window as Window & { __ga4Init?: boolean }).__ga4Init) return;
  (window as Window & { __ga4Init?: boolean }).__ga4Init = true;

  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function() { window.dataLayer!.push(arguments as unknown); };
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID);

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);
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
  const lastSent = useRef<string | null>(null);

  // Initialize GA4 once on the client after React mounts.
  useEffect(() => { initGa4(); }, []);

  useEffect(() => {
    const url = window.location.href;

    // Skip if we already sent a view for this exact URL.
    if (lastSent.current === url) return;

    // Skip the very first render — gtag('config') in initGa4() already fired
    // the initial page_view for this URL.
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
