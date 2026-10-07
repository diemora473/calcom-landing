import { EcosystemCard } from './ecosystem/EcosystemCard.jsx';
import { ECOSYSTEM } from '../data/ecosystem.js';

export function Ecosystem() {
  return (
    <section class="w-full py-20 bg-surface-container-low">
      <div class="max-w-7xl mx-auto px-margin lg:px-space-xl flex flex-col gap-12">
        <div class="text-center max-w-2xl mx-auto">
          <span class="font-label-md text-label-md text-primary-container uppercase tracking-widest font-bold">
            Ecosistema Integrado
          </span>
          <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
            Una plataforma. Dos caras que se potencian mutuamente.
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ECOSYSTEM.map((block) => (
            <EcosystemCard key={block.id} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
