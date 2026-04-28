"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

export function CalEmbed() {
  useEffect(() => {
    const initCal = () => {
      const Cal = window.Cal;
      if (!Cal) return;
      Cal("init", "30min", { origin: "https://app.cal.eu" });
      Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "gauransh5/30min",
      });
      Cal.ns["30min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    if (window.Cal) {
      initCal();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.eu/embed/embed.js";
    script.async = true;
    script.onload = initCal;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="my-cal-inline-30min"
      className="mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-mts-line"
      style={{ minHeight: 540 }}
    />
  );
}
