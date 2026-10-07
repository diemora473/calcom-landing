import { Icon } from '../../shared/Icon.jsx';

/**
 * Two sticker variants: card-style and pill-style, both decorative.
 * Variants are driven by the `variant` prop on the data object.
 */
export function HeroFloatingSticker({ sticker }) {
  const { variant, position, rotateClass, transformClass } = sticker;
  const transform = transformClass ? `${transformClass} transition-transform duration-300` : `${rotateClass} transition-transform duration-300`;

  if (variant === 'pill') {
    return (
      <div className={`${position} ${transform}`}>
        <div className="px-4 py-2 bg-inverse-surface text-inverse-on-surface rounded-full shadow-xl flex items-center gap-2">
          <Icon
            name={sticker.icon}
            size={sticker.iconClass?.match(/\d+/)?.[0] ? parseInt(sticker.iconClass.match(/\d+/)[0], 10) : 20}
            filled
            className={sticker.iconClass}
          />
          <span className="font-label-md text-label-md">{sticker.title}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${position} ${transform}`}>
      <div className="p-3 bg-surface rounded-2xl shadow-xl flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${sticker.iconWrapperClass}`}>
          <Icon name={sticker.icon} size={28} filled />
        </div>
        <div className="pr-2">
          <span className="block font-label-md text-label-md text-on-surface">{sticker.title}</span>
          <span className="block font-body-sm text-body-sm text-on-surface-variant">
            {sticker.subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}
