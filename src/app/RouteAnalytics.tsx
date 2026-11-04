// ── GTM Route Analytics ────────────────────────────────────────────────────
//
// Pushes page views and conversion events to the GTM-owned dataLayer.
//
// Design:
//  - Google Tag Manager is installed globally in the HTML shell.
//  - This module never initializes analytics or replaces window.dataLayer.
//  - This component tracks the last URL sent to avoid duplicate page views.
//  - React StrictMode double-invokes effects in development only, but because
//    we track the "last sent URL" the second invocation is a no-op.
//  - Initial loads and subsequent SPA navigations push a page_view event.
//
// Event helpers are exported so components can call them directly.

import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function pushDataLayerEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }
}

// ── Named event helpers (exported for use in components) ──────────────────

/** Call when a user clicks a WhatsApp CTA button. */
export function trackWhatsAppClick(source?: string) {
  pushDataLayerEvent("whatsapp_click", { event_category: "contact", source });
}

/** Call when a user clicks a phone number link. */
export function trackPhoneClick() {
  pushDataLayerEvent("phone_click", { event_category: "contact" });
}

/** Call when a user clicks an email link. */
export function trackEmailClick() {
  pushDataLayerEvent("email_click", { event_category: "contact" });
}

/** Call when a user clicks the main contact/consult CTA. */
export function trackContactCta(label?: string) {
  pushDataLayerEvent("contact_cta_click", { event_category: "engagement", label });
}

// ── RouteAnalytics component ───────────────────────────────────────────────

export function RouteAnalytics() {
  const location = useLocation();
  // Track the last URL we already reported so we never double-send.
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    const url = window.location.href;

    // Skip if we already sent a view for this exact URL.
    if (lastSent.current === url) return;

    lastSent.current = url;
    pushDataLayerEvent("page_view", {
      page_title: document.title,
      page_location: url,
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return null;
}
