import { Icon } from '../../shared/Icon.jsx';

export function EcosystemCard({ block }) {
  return (
    <div class={`${block.bgClass} rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between gap-8 relative overflow-hidden`}>
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <span class={`px-3 py-1 rounded-full font-label-md text-label-md ${block.chipClass}`}>
            {block.audience}
          </span>
          <Icon name={block.audienceIcon} size={24} className={block.accentClass} />
        </div>
        <h3 class={`font-headline-md text-headline-md ${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface' : 'text-on-surface'}`}>
          {block.title}
        </h3>
        <p class={`font-body-md text-body-md ${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface/80' : 'text-on-surface-variant'}`}>
          {block.intro}
        </p>

        <ul class="flex flex-col gap-3.5 mt-2">
          {block.benefits.map((benefit, i) => (
            <li key={i} class="flex items-start gap-3">
              <Icon name="check_circle" size={20} filled className={`shrink-0 mt-0.5 ${block.accentClass}`} />
              <span
                class={`font-body-md text-body-md ${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface' : 'text-on-surface'}`}
              >
                <strong
                  class={`${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface' : 'text-on-surface'} font-headline-sm text-headline-sm`}
                >
                  {benefit.bold}
                </strong>{' '}
                {benefit.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div class={`pt-4 flex items-center justify-between p-4 rounded-xl ${block.bgClass.includes('inverse-surface') ? 'bg-surface/10' : 'bg-surface-container-low'}`}>
        <div class="flex items-center gap-2">
          <Icon name={block.footerNote.icon} size={22} className={block.accentClass} />
          <span
            class={`font-label-md text-label-md ${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface' : 'text-on-surface'}`}
          >
            {block.footerNote.text}
          </span>
        </div>
        {block.footerCta.href ? (
          <a class={`font-label-md text-label-md ${block.footerCta.className}`} href={block.footerCta.href}>
            {block.footerCta.text}
          </a>
        ) : (
          <span class={`font-label-md text-label-md ${block.footerCta.className}`}>{block.footerCta.text}</span>
        )}
      </div>
    </div>
  );
}
