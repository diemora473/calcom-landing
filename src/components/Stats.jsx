import { StatBox } from './stats/StatBox.jsx';
import { STATS } from '../data/stats.js';

export function Stats() {
  return (
    <section class="w-full py-16 bg-surface-container">
      <div class="max-w-7xl mx-auto px-margin lg:px-space-xl">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat) => (
            <StatBox key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
