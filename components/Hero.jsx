import { Icon } from '../shared/Icon.jsx';
import { HeroPhoneMockup } from './hero/HeroPhoneMockup.jsx';
import { HeroFloatingSticker } from './hero/HeroFloatingSticker.jsx';
import { HERO_FLOATING_STICKERS } from '../data/hero-collage.js';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface to-surface-container-low pt-12 pb-20 lg:pt-16 lg:pb-28">
      <div className="max-w-7xl mx-auto px-margin lg:px-space-xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left column: copy & actions */}
        <div className="flex-1 flex flex-col items-start gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/80 text-on-secondary-fixed shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-md text-label-md tracking-wide uppercase">
              El pasaporte coleccionable del turismo argentino
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight max-w-xl">
            Cada viaje tiene una historia. <br />
            <span className="text-primary-container relative inline-block">
              Ahora tiene su calco oficial.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-tertiary-container/30"
                fill="none"
                viewBox="0 0 240 12"
              >
                <path
                  d="M3 9C60 2.5 180 2 237 9"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="4"
                ></path>
              </svg>
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Conectamos a exploradores con comercios y destinos en las 24 provincias mediante
            calcos físicos y digitales con beneficios exclusivos.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg transition-transform active:scale-95"
              href="#"
            >
              <Icon name="download" size={20} filled />
              <span>Descargar App Gratuita</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg shadow-sm hover:shadow-md transition-transform active:scale-95"
              href="#unirse-red"
            >
              <Icon name="storefront" size={20} />
              <span>Sumar mi Local como Punto Oficial</span>
            </a>
          </div>

          <div className="mt-4 flex items-center gap-3 py-2.5 px-4 rounded-xl bg-surface-container shadow-sm">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm shadow-sm font-bold">
                24
              </div>
              <div className="w-7 h-7 rounded-full bg-inverse-surface text-inverse-on-surface flex items-center justify-center font-label-sm text-label-sm shadow-sm font-bold">
                +120
              </div>
              <div className="w-7 h-7 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center font-label-sm text-label-sm shadow-sm font-bold">
                AR
              </div>
            </div>
            <span className="font-label-md text-label-md text-on-surface">
              24 Provincias · +120 Ciudades · Beneficios Reales
            </span>
          </div>
        </div>

        {/* Right column: phone mockup + floating stickers */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative flex justify-center items-center py-8">
          <div className="absolute w-72 h-72 rounded-full bg-primary-container/10 filter blur-3xl pointer-events-none -z-0"></div>
          <div className="absolute w-60 h-60 rounded-full bg-secondary-container/40 filter blur-2xl pointer-events-none -z-0"></div>

          <HeroPhoneMockup />

          {HERO_FLOATING_STICKERS.map((sticker) => (
            <HeroFloatingSticker key={sticker.id} sticker={sticker} />
          ))}
        </div>
      </div>
    </section>
  );
}
