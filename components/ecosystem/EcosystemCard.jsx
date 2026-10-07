import { Icon } from '../../shared/Icon.jsx';

export function EcosystemCard({ block }) {
  return (
    <div className={`${block.bgClass} rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between gap-8 relative overflow-hidden`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full font-label-md text-label-md ${block.chipClass}`}>
            {block.audience}
          </span>
          <Icon name={block.audienceIcon} size={24} className={block.accentClass} />
        </div>
        <h3 className={`font-headline-md text-headline-md ${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface' : 'text-on-surface'}`}>
          {block.title}
        </h3>
        <p className={`font-body-md text-body-md ${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface/80' : 'text-on-surface-variant'}`}>
          {block.intro}
        </p>

        <ul className="flex flex-col gap-3.5 mt-2">
          {block.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <Icon name="check_circle" size={20} filled className={`shrink-0 mt-0.5 ${block.accentClass}`} />
              <span
                className={`font-body-md text-body-md ${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface' : 'text-on-surface'}`}
              >
                <strong
                  className={`${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface' : 'text-on-surface'} font-headline-sm text-headline-sm`}
                >
                  {benefit.bold}
                </strong>{' '}
                {benefit.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`pt-4 flex items-center justify-between p-4 rounded-xl ${block.bgClass.includes('inverse-surface') ? 'bg-surface/10' : 'bg-surface-container-low'}`}>
        <div className="flex items-center gap-2">
          <Icon name={block.footerNote.icon} size={22} className={block.accentClass} />
          <span
            className={`font-label-md text-label-md ${block.bgClass.includes('inverse-surface') ? 'text-inverse-on-surface' : 'text-on-surface'}`}
          >
            {block.footerNote.text}
          </span>
        </div>
        {block.footerCta.href ? (
          <a className={`font-label-md text-label-md ${block.footerCta.className}`} href={block.footerCta.href}>
            {block.footerCta.text}
          </a>
        ) : (
          <span className={`font-label-md text-label-md ${block.footerCta.className}`}>{block.footerCta.text}</span>
        )}
      </div>
    </div>
  );
}
