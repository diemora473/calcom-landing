import { Icon } from '../../shared/Icon.jsx';

export function HowItWorksStep({ step }) {
  return (
    <div class="bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div class="absolute top-0 right-0 p-6 font-headline-xl text-headline-xl text-on-surface-variant/10 select-none">
        {step.index}
      </div>
      <div class={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${step.iconWrapperClass}`}>
        <Icon name={step.icon} size={32} />
      </div>
      <div>
        <span class="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
          {step.label}
        </span>
        <h3 class="font-headline-md text-headline-md text-on-surface mt-1 mb-2">
          {step.title}
        </h3>
        <p class="font-body-md text-body-md text-on-surface-variant">{step.body}</p>
      </div>
      <div class={`mt-6 pt-4 flex items-center gap-2 font-label-md text-label-md ${step.footer.color}`}>
        <Icon name={step.footer.icon} size={16} />
        <span>{step.footer.text}</span>
      </div>
    </div>
  );
}
