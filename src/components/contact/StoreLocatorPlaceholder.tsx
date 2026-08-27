function MapPinIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/**
 * Placeholder for a future store locator / availability map.
 * No fabricated locations. Provides the layout slot for a real map or list.
 */
export function StoreLocatorPlaceholder() {
  return (
    <div className="overflow-hidden rounded-xl2 border border-line bg-white">
      <div className="relative flex min-h-64 items-center justify-center bg-cream-100 p-8">
        {/* Subtle map-like grid, purely decorative */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,61,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,61,42,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-md text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green/12 text-green-600">
            <MapPinIcon />
          </span>
          <h3 className="mt-4 text-xl font-bold text-green-deep">
            Availability information is coming soon
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            We&rsquo;re not listing stores or locations yet. When Fruiticana is
            available to buy, a store locator and availability map will live
            right here.
          </p>
        </div>
      </div>
    </div>
  );
}
