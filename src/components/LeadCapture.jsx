import { useState } from 'preact/hooks';
import { Icon } from '../shared/Icon.jsx';
import { Wordmark } from '../shared/Wordmark.jsx';

const FORM_FIELDS = [
  { name: 'comercio', placeholder: 'Nombre del comercio', type: 'text' },
  { name: 'ubicacion', placeholder: 'Provincia / Ciudad', type: 'text' },
  { name: 'contacto', placeholder: 'WhatsApp o Email', type: 'text' }
];

export function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('¡Gracias! Nos pondremos en contacto para enviar tu Tótem Oficial.');
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <section
      class="w-full py-20 bg-inverse-surface text-inverse-on-surface relative overflow-hidden"
      id="unirse-red"
    >
      <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"></div>

      <div class="max-w-5xl mx-auto px-margin lg:px-space-xl flex flex-col items-center text-center gap-8 relative z-10">
        <span class="px-3.5 py-1.5 rounded-full bg-surface/10 text-primary-fixed font-label-md text-label-md uppercase tracking-wider">
          Red Oficial de Comercios & Destinos
        </span>

        <div class="flex flex-col gap-3 max-w-2xl">
          <h2 class="font-headline-xl text-headline-xl text-inverse-on-surface tracking-tight">
            Sumá tu destino o comercio a la red oficial de{' '}
            <Wordmark className="font-headline-xl text-headline-xl font-extrabold inline-block" />
          </h2>
          <p class="font-body-lg text-body-lg text-inverse-on-surface/80">
            Conectá tu negocio con la comunidad de viajeros más activa del país y recibí tu kit
            físico de mostrador sin costos iniciales.
          </p>
        </div>

        <form
          data-lead-capture
          onSubmit={handleSubmit}
          class="w-full max-w-3xl mt-4 flex flex-col sm:flex-row items-center gap-3 bg-surface/5 p-3 rounded-2xl shadow-inner backdrop-blur-sm"
        >
          {FORM_FIELDS.map((field) => (
            <input
              key={field.name}
              class="w-full sm:flex-1 px-4 py-3.5 rounded-xl bg-surface text-on-surface font-body-md text-body-md focus:outline-none placeholder:text-on-surface-variant/60"
              placeholder={field.placeholder}
              required
              type={field.type}
            />
          ))}
          <button
            class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg hover:shadow-lg transition-transform active:scale-95 shrink-0 whitespace-nowrap"
            type="submit"
          >
            {submitted ? '¡Enviado!' : 'Solicitar Tótem Oficial'}
          </button>
        </form>

        <span class="font-body-sm text-body-sm text-inverse-on-surface/60 -mt-2">
          Te contactamos en menos de 24 horas hábiles. Incluye soporte de activación y
          visibilidad en app.
        </span>

        <div class="pt-8 border-t border-inverse-on-surface/10 w-full flex flex-col items-center gap-4">
          <span class="font-label-sm text-label-sm uppercase tracking-widest text-inverse-on-surface/70">
            ¿Sos viajero? Descargá la app y comenzá tu ruta hoy:
          </span>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <StoreBadge iconName="phone_iphone" caption="Disponible en" store="App Store" href="#" />
            <StoreBadge
              iconName="play_arrow"
              iconClass="text-primary-container"
              caption="Disponible en"
              store="Google Play"
              href="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreBadge({ iconName, iconClass = '', caption, store, href }) {
  return (
    <a
      class="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-surface text-on-surface shadow-sm hover:shadow-md transition-transform active:scale-95"
      href={href}
    >
      <Icon name={iconName} size={28} className={iconClass} />
      <div class="text-left">
        <span class="block font-label-sm text-label-sm text-on-surface-variant">{caption}</span>
        <span class="block font-label-lg text-label-lg text-on-surface">{store}</span>
      </div>
    </a>
  );
}
