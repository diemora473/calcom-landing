import { FOOTER_COLUMNS, FOOTER_LEGAL_LINKS } from '../data/navigation.js';
import { Wordmark } from '../shared/Wordmark.jsx';
import { Icon } from '../shared/Icon.jsx';

export function Footer() {
  return (
    <footer class="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-space-xl pb-space-lg">
      <div class="max-w-7xl mx-auto px-margin lg:px-space-xl flex flex-col gap-space-xl">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-space-xl">
          <div class="flex flex-col gap-space-sm md:col-span-1">
            <Wordmark
              className="font-headline-md text-headline-md font-extrabold tracking-tight"
              innerClassName=""
            />
            <p class="font-body-md text-body-md text-on-surface-variant">
              Dejá tu rastro por el mundo. El pasaporte digital coleccionable de experiencias,
              sellos y recompensas tangibles.
            </p>
            <div class="inline-flex items-center gap-space-xs mt-space-sm px-space-sm py-space-xs bg-surface-container rounded-full w-fit">
              <span class="w-2 h-2 rounded-full bg-tertiary-container"></span>
              <span class="font-label-sm text-label-sm text-on-surface">
                Red Oficial de Coleccionables
              </span>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} class="flex flex-col gap-space-sm">
              <span class="font-label-lg text-label-lg text-on-surface uppercase tracking-wide">
                {column.title}
              </span>
              {column.links.map((link) => (
                <a
                  key={link.id}
                  class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                  data-path={link.id}
                  href="#"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          <div class="flex flex-col gap-space-sm">
            <span class="font-label-lg text-label-lg text-on-surface uppercase tracking-wide">
              Sellos & Seguridad
            </span>
            <div class="p-space-sm bg-surface rounded-lg flex flex-col gap-space-xs">
              <span class="font-label-md text-label-md text-on-surface">
                Validación Geográfica Segura
              </span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">
                Stickers físicos con verificación criptográfica y geolocalizada en cada visita.
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-between pt-space-lg gap-space-md">
          <span class="font-body-sm text-body-sm text-on-surface-variant">
            © 2025{' '}
            <Wordmark className="text-body-sm" innerClassName="" />
            . Todos los derechos reservados. Dejá tu rastro por el mundo.
          </span>
          <div class="flex items-center gap-space-md">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <a
                key={link.id}
                class="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path={link.id}
                href="#"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
