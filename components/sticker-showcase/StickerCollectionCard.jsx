import { Icon } from '../../shared/Icon.jsx';

/**
 * One province card in the federal collection showcase.
 * Pure presentational; icon size is decoded out of `iconClass` so it stays in sync with className derived sizes.
 */
export function StickerCollectionCard({ sticker }) {
  const decodedSize = sticker.iconClass?.match(/text-\[(\d+)px\]/)?.[1]
    ? parseInt(sticker.iconClass.match(/text-\[(\d+)px\]/)[1], 10)
    : 44;

  return (
    <div className="bg-surface-container rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-transform hover:-translate-y-1">
      <div className="w-24 h-24 rounded-2xl bg-surface shadow-md flex items-center justify-center p-3 relative mb-4">
        <Icon name={sticker.icon} size={decodedSize} filled className={sticker.iconClass} />
        <span
          className={`absolute top-1 right-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${sticker.chipClass}`}
        >
          {sticker.chip}
        </span>
      </div>
      <span className="font-label-lg text-label-lg text-on-surface">{sticker.title}</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{sticker.subtitle}</span>
      <span className={`mt-3 px-2.5 py-1 rounded-full font-label-sm text-label-sm ${sticker.rarityClass}`}>
        {sticker.rarity}
      </span>
    </div>
  );
}
