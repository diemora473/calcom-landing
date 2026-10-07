/**
 * Brand wordmark "CALCO·M" using the Days One display face.
 * Falls back to Plus Jakarta Sans if Days One hasn't loaded yet.
 */
export function Wordmark({ className = 'font-headline-lg text-headline-lg font-extrabold tracking-tight', innerClassName = '' }) {
  return (
    <span
      className={className}
      style={{ 'font-family': "'Days One', 'Plus Jakarta Sans', sans-serif" }}
    >
      <span className={`text-on-surface ${innerClassName}`}>CALCO</span>
      <span className={`text-primary-container ${innerClassName}`}>M</span>
    </span>
  );
}
