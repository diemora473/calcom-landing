import { SectionLabel } from '../shared/SectionLabel.jsx';
import { StickerCollectionCard } from './sticker-showcase/StickerCollectionCard.jsx';
import { STICKER_COLLECTION } from '../data/stickers.js';

export function StickerShowcase() {
  return (
    <section className="w-full py-20 bg-surface" id="album-y-provincias">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl flex flex-col gap-10">
        <SectionLabel
          label="Colección Federal"
          headline="Diseños icónicos con identidad provincial"
          intro={
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary-container"></span>
              <span>Actualización mensual con ediciones especiales</span>
            </span>
          }
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {STICKER_COLLECTION.map((sticker) => (
            <StickerCollectionCard key={sticker.id} sticker={sticker} />
          ))}
        </div>
      </div>
    </section>
  );
}
