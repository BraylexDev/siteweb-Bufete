import { SiteContent } from '../../core/models/content.model';

/**
 * Contenido del sitio extraído del PDF
 * Corporación Colectivo de Abogados del Occidente Colombiano (CAOC)
 */
export const SITE_CONTENT: SiteContent = {
  general: {
    name: 'CORPORACIÓN COLECTIVO DE ABOGADOS DEL OCCIDENTE COLOMBIANO (CAOC)',
    shortName: 'Ramírez y Hernández abogados',
    tagline: 'Defendemos y promovemos los Derechos Humanos desde una perspectiva integral, impulsando la justicia social, la paz y la equidad en el suroccidente colombiano.',
    nit: '901.905.259-3',
    legalStatus: 'Entidad sin ánimo de lucro registrada ante la Cámara de Comercio del Cauca'
  },
  
  contact: {
    address: 'Carrera 2 N° 06-09, Barrio Loma de Cartagena',
    city: 'Popayán - Cauca',
    email: 'caocolombiano@outlook.com',
    phone: '323 406 9575'
  },
  
  mission: 'Defender y promover los derechos humanos mediante acciones jurídicas, sociales y de acompañamiento interdisciplinario, garantizando la igualdad, la inclusión y la paz territorial.',
  
  vision: 'Ser una organización referente en el suroccidente colombiano en la promoción de los derechos humanos, la justicia social y la sostenibilidad, contribuyendo activamente a la construcción de paz y equidad.',
  
  objetoSocial: `Somos una entidad sin ánimo de lucro cuya finalidad es defender y promover los Derechos Humanos desde una perspectiva integral, fundamentándose en la indivisibilidad e interdependencia de todos los derechos y libertades.

Para cumplir con estos objetivos, la Corporación desarrolla actividades de fortalecimiento, asesoría y acompañamiento jurídico e interdisciplinario, además de participar en procesos de denuncia, interlocución e incidencia política, incluyendo litigios estratégicos a nivel nacional e internacional.

Su propósito central es promover la resolución pacífica de conflictos, garantizar el acceso a la justicia en condiciones de igualdad, fomentar la inclusión social, la paz y la equidad, así como brindar apoyo psicológico y legal a víctimas de violaciones de derechos humanos, reconocidas o no, ayudándolas en su proceso de recuperación y reivindicación.

La Corporación también busca impulsar la equidad social y la eliminación de la pobreza mediante programas de desarrollo económico y social, así como abogar por la sostenibilidad ambiental y el respeto por los derechos ecológicos, reconociendo su relación con los derechos humanos.

Participa activamente en la formulación y revisión de políticas públicas con enfoque territorial, comprometiéndose con el goce pleno y efectivo de los derechos humanos para todas las personas, contribuyendo así a una sociedad más justa, equitativa y pacífica.`,
  
  services: [
    {
      title: 'Asesoría Jurídica y Acompañamiento Legal',
      description: 'Brindamos acompañamiento legal especializado a víctimas de violaciones de derechos humanos, garantizando acceso a la justicia en condiciones de igualdad.',
      icon: 'scale'
    },
    {
      title: 'Investigación y Documentación',
      description: 'Realizamos investigaciones rigurosas sobre casos relacionados con derechos fundamentales y publicamos informes que visibilizan las problemáticas.',
      icon: 'file-text'
    },
    {
      title: 'Formación y Sensibilización',
      description: 'Desarrollamos programas educativos sobre derechos humanos y justicia social dirigidos a comunidades y autoridades.',
      icon: 'book-open'
    },
    {
      title: 'Incidencia Política',
      description: 'Participamos activamente en la formulación de políticas públicas y leyes de protección a los derechos humanos con enfoque territorial.',
      icon: 'users'
    },
    {
      title: 'Apoyo Psicológico y Social',
      description: 'Ofrecemos atención integral a víctimas y comunidades vulnerables, apoyándolas en su proceso de recuperación y reivindicación.',
      icon: 'heart'
    },
    {
      title: 'Proyectos de Inclusión y Desarrollo Sostenible',
      description: 'Impulsamos programas de desarrollo económico y social que fomentan la equidad y la sostenibilidad ambiental.',
      icon: 'trending-up'
    }
  ],
  
  activities: [
    'Proveer servicios legales a individuos y grupos de víctimas de violaciones de derechos humanos',
    'Desarrollar programas de sensibilización sobre derechos humanos dirigidos a comunidades y autoridades',
    'Realizar investigaciones sobre violaciones a los derechos humanos y publicar informes que visibilicen las problemáticas',
    'Participar en la formulación de políticas públicas y leyes de protección a los derechos humanos',
    'Establecer alianzas con organizaciones nacionales e internacionales afines',
    'Promover la inclusión política, económica, social y cultural de todos los sectores',
    'Contribuir a la paz estable y duradera mediante el diálogo y la reconciliación',
    'Desarrollar proyectos sobre condiciones de personas privadas de libertad y sus derechos fundamentales',
    'Impulsar la visibilización y prevención de violaciones a los derechos humanos',
    'Brindar acompañamiento humanitario y asistencia legal integral a víctimas y grupos vulnerables',
    'Trabajar en la búsqueda de verdad, justicia y reparación, especialmente para personas judicializadas por razones políticas o sociales'
  ]
};