export function StatBox({ stat }) {
  return (
    <div class="flex flex-col items-center text-center p-6 bg-surface rounded-2xl shadow-sm">
      <span class={`font-headline-xl text-headline-xl ${stat.valueClass}`}>{stat.value}</span>
      <span class="font-label-lg text-label-lg text-on-surface mt-1">{stat.label}</span>
      <span class="font-body-sm text-body-sm text-on-surface-variant">{stat.caption}</span>
    </div>
  );
}
