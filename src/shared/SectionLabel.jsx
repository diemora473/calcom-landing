/**
 * Repeated pill + h2 pattern used at the top of most sections.
 * Pure presentational; receives a label and an optional subtitle/intro on the right.
 */
export function SectionLabel({ label, headline, intro, introClassName = '' }) {
  return (
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <span class="font-label-md text-label-md text-primary-container uppercase tracking-widest font-bold">
          {label}
        </span>
        <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
          {headline}
        </h2>
      </div>
      {intro ? (
        <p class={`font-body-md text-body-md text-on-surface-variant max-w-sm ${introClassName}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
