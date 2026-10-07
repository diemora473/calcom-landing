import { Wordmark } from '../../shared/Wordmark.jsx';
import { Icon } from '../../shared/Icon.jsx';
import { HERO_PASSPORT_STAMPS } from '../../data/hero-collage.js';

export function HeroPhoneMockup() {
  return (
    <div class="relative w-[300px] h-[520px] bg-inverse-surface rounded-[40px] shadow-2xl p-3.5 flex flex-col z-10">
      {/* Phone speaker notch */}
      <div class="w-24 h-4 bg-inverse-surface rounded-full self-center mb-2 flex items-center justify-center">
        <div class="w-10 h-1.5 bg-secondary/30 rounded-full"></div>
      </div>

      {/* Phone screen */}
      <div class="flex-1 bg-surface rounded-[32px] overflow-hidden flex flex-col relative shadow-inner">
        {/* App top header */}
        <div class="bg-surface-container-high px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Wordmark className="font-headline-sm text-headline-sm font-extrabold tracking-tight" />
            <span class="px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm">
              Ruta 40
            </span>
          </div>
          <div class="flex items-center gap-1.5">
            <Icon name="stars" size={18} filled className="text-primary-container" />
            <span class="font-label-sm text-label-sm text-on-surface">1,450 pts</span>
          </div>
        </div>

        {/* Passport sheet preview */}
        <div class="p-4 flex flex-col gap-3 overflow-hidden">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Pasaporte Digital
              </div>
              <div class="font-headline-sm text-headline-sm text-on-surface">Mi Colección</div>
            </div>
            <span class="px-2 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
              18 / 24 Sellos
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2 mt-1">
            {HERO_PASSPORT_STAMPS.map((stamp) => (
              <div
                key={stamp.id}
                class={`p-2 rounded-xl flex flex-col items-center justify-center text-center shadow-sm ${stamp.wrapperClass}`}
              >
                <Icon
                  name={stamp.icon}
                  size={stamp.iconClass.match(/\d+/)?.[0] ? parseInt(stamp.iconClass.match(/\d+/)[0], 10) : 28}
                  filled={stamp.iconFilled}
                  className={stamp.iconClass}
                />
                <span class="font-label-sm text-label-sm mt-1 text-on-surface">{stamp.title}</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">{stamp.caption}</span>
              </div>
            ))}
          </div>

          <div class="mt-auto pt-2">
            <div class="w-full py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md text-center shadow-sm flex items-center justify-center gap-1.5">
              <Icon name="qr_code_scanner" size={16} />
              <span>Escanear Mostrador</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
