import { EcosystemCard } from './ecosystem/EcosystemCard.jsx';
import { ECOSYSTEM } from '../data/ecosystem.js';

export function Ecosystem() {
  return (
    <section className="w-full py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-label-md text-label-md text-primary-container uppercase tracking-widest font-bold">
            Ecosistema Integrado
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
            Una plataforma. Dos caras que se potencian mutuamente.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ECOSYSTEM.map((block) => (
            <EcosystemCard key={block.id} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
