import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const APP_URL = "/bakery-webapp/index.html";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sugar & Crumb Bakery — Fresh Cakes, Pastries & Treats" },
      {
        name: "description",
        content:
          "Order freshly baked cakes, cupcakes, cookies, breads, donuts and desserts online. Handmade daily with premium ingredients.",
      },
      { property: "og:title", content: "Sugar & Crumb Bakery" },
      {
        property: "og:description",
        content: "Freshly baked cakes, pastries and treats for every special moment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace(APP_URL);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="text-4xl">🧁</p>
        <h1 className="mt-3 text-xl font-semibold text-foreground">Sugar &amp; Crumb Bakery</h1>
        <p className="mt-2 text-sm text-muted-foreground">Opening the bakery…</p>
        <a
          href={APP_URL}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Enter the bakery
        </a>
      </div>
    </div>
  );
}
