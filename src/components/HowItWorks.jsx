import { SectionLabel } from '../shared/SectionLabel.jsx';
import { HowItWorksStep } from './how-it-works/HowItWorksStep.jsx';
import { HOW_IT_WORKS_STEPS } from '../data/how-it-works-steps.js';

export function HowItWorks() {
  return (
    <section class="w-full py-20 bg-surface" id="como-funciona">
      <div class="max-w-7xl mx-auto px-margin lg:px-space-xl flex flex-col gap-12">
        <SectionLabel
          label="Sin fricción ni contratiempos"
          headline="Simple para el viajero. Potente para el comercio."
          intro="Tres pasos ágiles para transformar una visita espontánea en un hito coleccionable registrado de por vida."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <HowItWorksStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
