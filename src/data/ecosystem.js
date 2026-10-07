export const ECOSYSTEM = [
  {
    id: 'b2c',
    audience: 'Para el Viajero (B2C)',
    audienceIcon: 'hiking',
    accentClass: 'text-primary-container',
    bgClass: 'bg-surface',
    chipClass: 'bg-primary-container/15 text-primary-container',
    title: 'Tu bitácora definitiva de ruta argentina',
    intro:
      'Dejá de acumular tickets arrugados. Llevá cada pueblo, parada y café en un pasaporte interactivo gamificado.',
    benefits: [
      {
        bold: 'Álbum tipo figuritas:',
        text: 'Completá provincias enteras y desbloqueá el rango de Explorador Federal.'
      },
      {
        bold: 'Comunidad y competencia sana:',
        text: 'Compartí tus calcos en redes, compará con amigos y liderá el ranking regional.'
      },
      {
        bold: 'Beneficios directos:',
        text:
          'Desde 15% off en bodegas y cervecerías hasta meriendas de bienvenida en hosterías.'
      }
    ],
    footerNote: { icon: 'auto_stories', text: 'Disponible en Google Play & App Store' },
    footerCta: { text: '100% Gratis', className: 'text-primary font-bold' }
  },
  {
    id: 'b2b',
    audience: 'Para el Comercio & Anfitrión (B2B)',
    audienceIcon: 'store',
    accentClass: 'text-primary-container',
    bgClass: 'bg-inverse-surface text-inverse-on-surface',
    chipClass: 'bg-surface/20 text-inverse-on-surface',
    title: 'Atracción garantizada de turistas a tu local',
    intro:
      'Convertí tu negocio en una parada obligatoria en la ruta de miles de viajeros con una inversión cero en equipos técnicos.',
    benefits: [
      {
        bold: 'Tráfico físico al mostrador:',
        text: 'Los viajeros buscan intencionalmente tu comercio para sellar su cuaderno.'
      },
      {
        bold: 'Tótem QR sin cables:',
        text: 'Colocás el expositor de madera con código QR anti-fraude en tu caja y listo.'
      },
      {
        bold: 'Métricas de procedencia:',
        text:
          'Panel mensual que te muestra de qué provincias provienen los clientes que te visitaron.'
      }
    ],
    footerNote: { icon: 'verified', text: 'Kit de bienvenida físico incluido' },
    footerCta: { text: 'Sumar mi negocio', href: '#unirse-red', className: 'text-primary-fixed underline hover:text-on-primary' }
  }
];
