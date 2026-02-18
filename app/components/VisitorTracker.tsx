"use client";

import { useEffect } from "react";

const isMobileDevice = () =>
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

function getVisitorId() {
  let id = localStorage.getItem("visitor_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("visitor_id", id);
  }
  return id;
}

export default function VisitorTracker() {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitor_id: getVisitorId(),
        page: window.location.pathname,
        device: isMobileDevice() ? "mobile" : "desktop",
      }),
    }).catch(() => {});
  }, []);

  return null;
}
