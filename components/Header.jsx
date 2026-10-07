import { PRIMARY_NAV } from '../data/navigation.js';
import { Wordmark } from '../shared/Wordmark.jsx';
import { Icon } from '../shared/Icon.jsx';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin lg:px-space-xl flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <a className="flex items-center gap-space-xs" data-path="inicio" href="#">
            <Wordmark className="font-headline-lg text-headline-lg tracking-tight font-extrabold" />
            <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-primary-container"></span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-space-lg" data-active-classes="text-on-surface font-bold">
          {PRIMARY_NAV.map((link) => (
            <a
              key={link.id}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
              data-path={link.id}
              href="#"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors"
            data-path="sumar-comercio"
            href="#"
          >
            Sumar mi Comercio
          </a>
          <a
            className="inline-flex items-center justify-center px-space-md py-space-sm rounded-lg bg-primary-container hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-[0_4px_12px_rgba(255,138,0,0.25)] transition-all"
            data-path="descargar-app"
            href="#"
          >
            Descargar App
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs">
            <Icon name="person" size={18} className="text-on-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
