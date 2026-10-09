/**
 * Arche UI Official Logo Mark
 * Concept: Isometric Modular Cube (Feature-Sliced Design building blocks)
 * 3 geometric facets with natural lighting via opacities.
 */
export function ArcheLogo({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Facet */}
      <path
        d="M12 2.5L19.8 7L12 11.5L4.2 7L12 2.5Z"
        fill="currentColor"
        fillOpacity="1"
      />
      {/* Left Facet */}
      <path
        d="M3.5 8.8L11 13.2V21.8L3.5 17.3V8.8Z"
        fill="currentColor"
        fillOpacity="0.72"
      />
      {/* Right Facet */}
      <path
        d="M13 13.2L20.5 8.8V17.3L13 21.8V13.2Z"
        fill="currentColor"
        fillOpacity="0.45"
      />
    </svg>
  );
}

/**
 * Concept 2: Dynamic Stacked Slices (Direct visual representation of FSD layers)
 */
export function ArcheLayersLogo({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Slice */}
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        fillOpacity="1"
      />
      {/* Middle Slice */}
      <path
        d="M2 12L12 17L22 12L20 11L12 15L4 11L2 12Z"
        fillOpacity="0.75"
      />
      {/* Bottom Slice */}
      <path
        d="M2 17L12 22L22 17L20 16L12 20L4 16L2 17Z"
        fillOpacity="0.5"
      />
    </svg>
  );
}
