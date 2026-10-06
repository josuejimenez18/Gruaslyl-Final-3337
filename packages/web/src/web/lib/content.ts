import type { L } from "./i18n";

/** Navegación principal. */
export const nav: { path: string; label: L }[] = [
  { path: "/", label: { es: "Inicio", en: "Home" } },
  { path: "/servicios", label: { es: "Servicios", en: "Services" } },
  { path: "/flota", label: { es: "Flota", en: "Fleet" } },
  { path: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
  { path: "/nosotros", label: { es: "Nosotros", en: "About" } },
  { path: "/seguridad", label: { es: "Seguridad", en: "Safety" } },
];

export const ui = {
  quote: { es: "Solicitar cotización", en: "Request a quote" },
  quoteShort: { es: "Cotizar", en: "Get a quote" },
  call: { es: "Llamar ahora", en: "Call now" },
  whatsapp: { es: "Escribir por WhatsApp", en: "Chat on WhatsApp" },
  seeMore: { es: "Ver más", en: "Learn more" },
  seeAll: { es: "Ver todo", en: "View all" },
  seeFleet: { es: "Ver la flota", en: "View the fleet" },
  seeServices: { es: "Ver servicios", en: "View services" },
  contact: { es: "Contacto", en: "Contact" },
  coverage: { es: "Cobertura nacional", en: "Nationwide coverage" },
  availability: { es: "Disponibilidad 24/7", en: "24/7 availability" },
  capacity: { es: "Capacidad", en: "Capacity" },
  specs: { es: "Ficha técnica", en: "Technical sheet" },
  applications: { es: "Aplicaciones", en: "Applications" },
  back: { es: "Volver", en: "Back" },
  phone: { es: "Teléfonos", en: "Phone" },
  emailLabel: { es: "Correo", en: "Email" },
  followUs: { es: "Síguenos", en: "Follow us" },
  hours: { es: "Horario", en: "Hours" },
  hoursValue: {
    es: "Lunes a sábado 6:00 a.m. – 6:00 p.m. · Emergencias 24/7",
    en: "Monday to Saturday 6:00 a.m. – 6:00 p.m. · 24/7 emergencies",
  },
  serviceArea: { es: "Zona de servicio", en: "Service area" },
  serviceAreaValue: {
    es: "Costa Rica",
    en: "Costa Rica",
  },
};

export const hero = {
  badge: {
    es: "Grúas telescópicas · Cobertura en todo Costa Rica",
    en: "Telescopic cranes · Nationwide service in Costa Rica",
  },
  title: {
    es: "Izaje y transporte de cargas pesadas, con la grúa correcta",
    en: "Heavy lifting and cargo transport, with the right crane",
  },
  subtitle: {
    es: "Alquiler de grúas telescópicas de 5 a 65 toneladas con operadores certificados, planes de izaje y respuesta rápida para industria, construcción y logística.",
    en: "Telescopic crane rental from 5 to 65 tons with certified operators, lift plans and fast response for industry, construction and logistics.",
  },
  stats: [
    {
      value: "65 T",
      label: { es: "Capacidad máxima de izaje", en: "Maximum lifting capacity" },
    },
    {
      value: "24/7",
      label: { es: "Atención a emergencias", en: "Emergency response" },
    },
    {
      value: "100%",
      label: { es: "Cobertura del territorio nacional", en: "National territory covered" },
    },
  ],
};

export const trustCards: { title: L; text: L; icon: "clock" | "shield" | "hardhat" }[] = [
  {
    icon: "clock",
    title: { es: "Respuesta rápida", en: "Fast response" },
    text: {
      es: "Coordinamos el equipo y el traslado en el menor tiempo posible, con confirmación de horario y personal asignado.",
      en: "We coordinate equipment and transport in the shortest time possible, with confirmed schedule and assigned crew.",
    },
  },
  {
    icon: "shield",
    title: { es: "Operación asegurada", en: "Insured operation" },
    text: {
      es: "Equipos con mantenimiento preventivo al día, pólizas vigentes y plan de izaje por maniobra.",
      en: "Equipment with up-to-date preventive maintenance, active insurance policies and a lift plan for every maneuver.",
    },
  },
  {
    icon: "hardhat",
    title: { es: "Operadores certificados", en: "Certified operators" },
    text: {
      es: "Personal capacitado en izaje seguro, señalización y trabajo en sitios industriales controlados.",
      en: "Crews trained in safe lifting, signaling and work inside controlled industrial sites.",
    },
  },
];

export interface Service {
  slug: string;
  title: L;
  summary: L;
  image: string;
  bullets: L[];
}

export const services: Service[] = [
  {
    slug: "izaje",
    title: { es: "Izaje y manejo de carga", en: "Lifting and load handling" },
    summary: {
      es: "Levantamiento y colocación de cargas pesadas con grúas telescópicas: equipos de aire acondicionado, tanques, transformadores, paneles y maquinaria.",
      en: "Lifting and placing heavy loads with telescopic cranes: HVAC units, tanks, transformers, panels and machinery.",
    },
    image: "/images/svc-izaje.jpg",
    bullets: [
      { es: "Estudio previo del sitio y plan de izaje", en: "Site study and lift plan beforehand" },
      { es: "Tablas de carga y radios de trabajo verificados", en: "Verified load charts and working radii" },
      { es: "Eslingas, grilletes y accesorios certificados", en: "Certified slings, shackles and rigging" },
      { es: "Canasta certificada para elevación de personal", en: "Certified man basket for personnel lifting" },
    ],
  },
  {
    slug: "montaje-industrial",
    title: { es: "Montaje industrial", en: "Industrial assembly" },
    summary: {
      es: "Apoyo en montaje de estructura metálica, naves industriales, equipos de proceso y líneas de producción, coordinado con su cronograma de obra.",
      en: "Support for steel structure erection, industrial buildings, process equipment and production lines, coordinated with your construction schedule.",
    },
    image: "/images/svc-montaje.jpg",
    bullets: [
      { es: "Montaje de vigas, columnas y cubiertas", en: "Beams, columns and roof deck erection" },
      { es: "Instalación de equipos de proceso", en: "Process equipment installation" },
      { es: "Trabajo por etapas y en horarios nocturnos", en: "Phased work and night shifts" },
      { es: "Coordinación con contratistas y seguridad ocupacional", en: "Coordination with contractors and safety teams" },
    ],
  },
  {
    slug: "transporte",
    title: { es: "Transporte de maquinaria y cargas", en: "Machinery and cargo transport" },
    summary: {
      es: "Traslado de maquinaria, contenedores y cargas sobredimensionadas con cabezales y plataformas lowboy, incluyendo permisos y escolta cuando aplica.",
      en: "Transport of machinery, containers and oversized loads with tractor units and lowboy trailers, including permits and escort when required.",
    },
    image: "/images/svc-transporte.jpg",
    bullets: [
      { es: "Plataformas lowboy y cama baja", en: "Lowboy and low-bed trailers" },
      { es: "Carga y descarga con grúa propia", en: "Loading and unloading with our own crane" },
      { es: "Amarre y trincado según norma", en: "Load securing to standard" },
      { es: "Rutas y permisos para carga especial", en: "Routes and permits for special cargo" },
    ],
  },
  {
    slug: "alquiler",
    title: { es: "Alquiler por hora, día o proyecto", en: "Hourly, daily or project rental" },
    summary: {
      es: "Grúa con operador bajo la modalidad que necesite: maniobras puntuales de pocas horas o equipo asignado a su proyecto por semanas.",
      en: "Crane with operator under the model you need: short one-off maneuvers or equipment assigned to your project for weeks.",
    },
    image: "/images/svc-alquiler.jpg",
    bullets: [
      { es: "Tarifas por hora, jornada o mes", en: "Hourly, daily or monthly rates" },
      { es: "Equipo dedicado para obras largas", en: "Dedicated equipment for long projects" },
      { es: "Facturación electrónica y órdenes de compra", en: "Electronic invoicing and purchase orders" },
      { es: "Atención a licitaciones públicas y privadas", en: "Support for public and private tenders" },
    ],
  },
];

export interface FleetUnit {
  id: string;
  capacity: string;
  name: L;
  image: string;
  summary: L;
  specs: { label: L; value: L }[];
  applications: L[];
}

export const fleet: FleetUnit[] = [
  {
    id: "5t",
    capacity: "5 - 10 T",
    name: { es: "Grúa hidráulica sobre camión 5 - 10 toneladas", en: "5-10 ton truck-mounted hydraulic crane" },
    image: "/images/fleet-5t.jpg",
    summary: {
      es: "Equipo ágil para trabajos urbanos, entregas con izaje y maniobras en espacios reducidos. Al ser una grúa aislada, suma la versatilidad necesaria para trabajos eléctricos y maniobras cerca de líneas energizadas.",
      en: "Agile unit for urban jobs, deliveries with lifting and maneuvers in tight spaces. As an insulated crane, it adds the versatility required for electrical work and maneuvers near live lines.",
    },
    specs: [
      { label: { es: "Capacidad máxima", en: "Max capacity" }, value: { es: "10 toneladas", en: "10 tons" } },
      { label: { es: "Alcance de pluma", en: "Boom reach" }, value: { es: "Hasta 16 m", en: "Up to 16 m" } },
      { label: { es: "Accesorios", en: "Attachments" }, value: { es: "Canasta para elevación de personal", en: "Man basket for personnel lifting" } },
      { label: { es: "Aislamiento", en: "Insulation" }, value: { es: "Grúa aislada para trabajos eléctricos", en: "Insulated crane for electrical work" } },
      { label: { es: "Ideal para", en: "Best for" }, value: { es: "Cargas livianas y medianas", en: "Light and medium loads" } },
    ],
    applications: [
      {
        es: "Una solución versátil y de alto rendimiento lista para adaptarse a cualquier desafío en tu obra, desde montajes estructurales y colocación de paneles hasta el izaje de equipos y cualquier otra maniobra especializada que tu proyecto requiera.",
        en: "A versatile, high-performance solution ready to adapt to any challenge on site, from structural erection and panel placement to equipment lifting and any other specialised maneuver your project calls for.",
      },
    ],
  },
  {
    id: "25t",
    capacity: "25 T",
    name: { es: "Grúa telescópica 25 toneladas", en: "25-ton telescopic crane" },
    image: "/images/fleet-25t.jpg",
    summary: {
      es: "Una solución versátil y de alto rendimiento lista para adaptarse a cualquier desafío en tu obra, desde montajes estructurales y colocación de paneles hasta el izaje de equipos y cualquier otra maniobra especializada que tu proyecto requiera.",
      en: "A versatile, high-performance solution ready to adapt to any challenge on site, from structural erection and panel placement to equipment lifting and any other specialised maneuver your project calls for.",
    },
    specs: [
      { label: { es: "Capacidad máxima", en: "Max capacity" }, value: { es: "25 toneladas", en: "25 tons" } },
      { label: { es: "Alcance de pluma", en: "Boom reach" }, value: { es: "Hasta 52 m", en: "Up to 52 m" } },
      { label: { es: "Plumín", en: "Jib" }, value: { es: "Opcional", en: "Optional" } },
      { label: { es: "Ideal para", en: "Best for" }, value: { es: "Montajes y prefabricados", en: "Assemblies and precast" } },
    ],
    applications: [
      { es: "Montaje de estructura metálica", en: "Steel structure erection" },
      { es: "Colocación de paneles prefabricados", en: "Precast panel placement" },
      { es: "Izaje de tanques y equipos", en: "Tank and equipment lifting" },
    ],
  },
  {
    id: "55t",
    capacity: "55 T",
    name: { es: "Grúa telescópica 55 toneladas", en: "55-ton telescopic crane" },
    image: "/images/fleet-55t.jpg",
    summary: {
      es: "Mayor capacidad y alcance para proyectos industriales y maniobras con radios de trabajo amplios.",
      en: "More capacity and reach for industrial projects and maneuvers with wide working radii.",
    },
    specs: [
      { label: { es: "Capacidad máxima", en: "Max capacity" }, value: { es: "55 toneladas", en: "55 tons" } },
      { label: { es: "Alcance de pluma", en: "Boom reach" }, value: { es: "Hasta 64 m", en: "Up to 64 m" } },
      { label: { es: "Ideal para", en: "Best for" }, value: { es: "Plantas y obra civil mayor", en: "Plants and major civil works" } },
    ],
    applications: [
      { es: "Montaje de puentes grúa", en: "Overhead crane installation" },
      { es: "Izaje de transformadores", en: "Transformer lifting" },
      { es: "Obra civil de gran formato", en: "Large-format civil works" },
    ],
  },
  {
    id: "65t",
    capacity: "65 T",
    name: { es: "Grúa telescópica 65 toneladas", en: "65-ton telescopic crane" },
    image: "/images/fleet-65t.jpg",
    summary: {
      es: "Nuestra unidad de mayor capacidad, para izajes críticos con carga alta o alcance extendido.",
      en: "Our highest-capacity unit, for critical lifts with heavy loads or extended reach.",
    },
    specs: [
      { label: { es: "Capacidad máxima", en: "Max capacity" }, value: { es: "65 toneladas", en: "65 tons" } },
      { label: { es: "Alcance de pluma", en: "Boom reach" }, value: { es: "Hasta 52 m", en: "Up to 52 m" } },
      { label: { es: "Ideal para", en: "Best for" }, value: { es: "Izajes críticos y proyectos industriales", en: "Critical lifts and industrial projects" } },
    ],
    applications: [
      { es: "Montaje de equipos de proceso", en: "Process equipment assembly" },
      { es: "Izaje sobre edificaciones", en: "Lifting over buildings" },
      { es: "Montaje de vallas publicitarias", en: "Billboard installation" },
      { es: "Movimiento de maquinaria", en: "Machinery relocation" },
    ],
  },
];

export const fleetNote = {
  es: "Las especificaciones son de referencia. Enviamos la tabla de carga y el plan de izaje del equipo exacto según la maniobra que necesite.",
  en: "Specifications are for reference. We send the load chart and lift plan for the exact unit based on your maneuver.",
};

export interface Project {
  title: L;
  sector: L;
  location: L;
  equipment: L;
  description: L;
  image: string;
}

export const projects: Project[] = [
  {
    title: { es: "Izaje con grúa telescópica en edificio comercial", en: "Telescopic crane lift at a commercial building" },
    sector: { es: "Comercial", en: "Commercial" },
    location: { es: "San José", en: "San José" },
    equipment: { es: "Grúa 25 T", en: "25 T crane" },
    description: {
      es: "Maniobra de elevación y posicionamiento de componentes pesados en azotea utilizando grúa móvil, delimitación de área con conos de seguridad y coordinación operativa en sitio.",
      en: "Lifting and positioning of heavy components on a rooftop using a mobile crane, with the area marked off by safety cones and operational coordination on site.",
    },
    image: "/images/proj-1.jpg",
  },
  {
    title: { es: "Maniobra e izaje de contenedores en sitio", en: "On-site container handling and lifting" },
    sector: { es: "Construcción", en: "Construction" },
    location: { es: "Alajuela", en: "Alajuela" },
    equipment: { es: "Grúa 55 T", en: "55 T crane" },
    description: {
      es: "Maniobra especializada con grúa móvil para la colocación de contenedores y elementos prefabricados, asegurando precisión milimétrica en terreno y estabilidad operativa.",
      en: "Specialised mobile crane work to place containers and precast elements, ensuring millimetre precision on the ground and operational stability.",
    },
    image: "/images/proj-2.jpg",
  },
  {
    title: { es: "Servicio de transporte de carga general", en: "General freight transport service" },
    sector: { es: "Infraestructura", en: "Infrastructure" },
    location: { es: "Guanacaste", en: "Guanacaste" },
    equipment: { es: "Cabezal + lowboy", en: "Tractor unit + lowboy" },
    description: {
      es: "Traslado de mercancía paletizada desde centro de distribución, asegurando la integridad de la carga con amarres certificados, revisión de ruta y seguimiento en tiempo real.",
      en: "Palletised cargo transport from a distribution centre, protecting load integrity with certified lashing, route review and real-time tracking.",
    },
    image: "/images/proj-3.jpg",
  },
  {
    title: { es: "Montaje de estructura metálica para nave industrial", en: "Steel structure erection for an industrial building" },
    sector: { es: "Industrial", en: "Industrial" },
    location: { es: "Heredia", en: "Heredia" },
    equipment: { es: "Grúa 65 T", en: "65 T crane" },
    description: {
      es: "Izaje de estructuras metálicas en jornadas nocturnas para mantener la operación de la planta durante el día.",
      en: "Steel structure lifting on night shifts to keep the plant running during the day.",
    },
    image: "/images/proj-4.jpg",
  },
];

export const projectsNote = {
  es: "Casos de referencia representativos del tipo de maniobras que ejecutamos. Podemos compartir detalles y referencias específicas para procesos de licitación.",
  en: "Reference cases representative of the maneuvers we perform. We can share specific details and references for tender processes.",
};

export const about = {
  eyebrow: { es: "Sobre nosotros", en: "About us" },
  title: {
    es: "Una PYME costarricense dedicada al izaje y al movimiento de carga",
    en: "A Costa Rican small and medium-sized company dedicated to lifting and cargo handling",
  },
  lead: {
    es: "Grúas L&L S.A. es una PYME costarricense de capital nacional que brinda servicios de alquiler de grúas telescópicas y transporte de cargas en todo el territorio nacional. Trabajamos con industria, construcción, energía y logística, atendiendo tanto maniobras puntuales como proyectos de largo plazo, con la cercanía y la capacidad de respuesta que distingue a una empresa local.",
    en: "Grúas L&L S.A. is a Costa Rican small and medium-sized company with national capital, providing telescopic crane rental and cargo transport services across the country. We work with industry, construction, energy and logistics, handling both one-off maneuvers and long-term projects, with the closeness and responsiveness that sets a local company apart.",
  },
  paragraphs: [
    {
      es: "Nuestro enfoque es simple: entender la carga, definir el equipo correcto y ejecutar la maniobra sin sorpresas. Antes de cada trabajo revisamos peso, radio, accesos y condiciones del sitio para escoger la grúa adecuada y evitar tiempos muertos en obra.",
      en: "Our approach is simple: understand the load, define the right equipment and execute the maneuver without surprises. Before each job we review weight, radius, access and site conditions to choose the right crane and avoid downtime.",
    },
    {
      es: "Contamos con flota propia de 5, 25, 55 y 65 toneladas, cabezales y plataformas para transporte, y personal con experiencia en sitios industriales donde la seguridad y los permisos de trabajo son parte del día a día.",
      en: "We operate our own fleet of 5, 25, 55 and 65-ton cranes, tractor units and transport trailers, with crews experienced in industrial sites where safety and work permits are part of daily routine.",
    },
  ],
  values: [
    {
      title: { es: "Compromiso con el horario", en: "Commitment to schedule" },
      text: {
        es: "Cumplimos la hora acordada porque sabemos que su cuadrilla, su grúa auxiliar y su cliente dependen de ella.",
        en: "We meet the agreed time because your crew, your support equipment and your client depend on it.",
      },
    },
    {
      title: { es: "Equipos en condición", en: "Equipment in condition" },
      text: {
        es: "Mantenimiento preventivo documentado, inspección de accesorios de izaje y revisión antes de cada salida.",
        en: "Documented preventive maintenance, rigging inspection and a check before every dispatch.",
      },
    },
    {
      title: { es: "Comunicación directa", en: "Direct communication" },
      text: {
        es: "Un contacto responsable de su maniobra, desde la cotización hasta la desmovilización del equipo.",
        en: "One person accountable for your maneuver, from quote to equipment demobilization.",
      },
    },
    {
      title: { es: "Precio claro", en: "Clear pricing" },
      text: {
        es: "Cotizaciones detalladas por hora, jornada o proyecto, con movilización y condiciones por escrito.",
        en: "Detailed quotes by hour, day or project, with mobilization and conditions in writing.",
      },
    },
  ],
};

export const safety = {
  eyebrow: { es: "Seguridad y cumplimiento", en: "Safety and compliance" },
  title: {
    es: "Ninguna maniobra vale un accidente",
    en: "No lift is worth an accident",
  },
  lead: {
    es: "Cada trabajo se planifica antes de levantar la primera carga. Estos son los controles que aplicamos en sitio.",
    en: "Every job is planned before the first load goes up. These are the controls we apply on site.",
  },
  items: [
    {
      title: { es: "Plan de izaje por maniobra", en: "Lift plan per maneuver" },
      text: {
        es: "Peso de la carga, radio, configuración de pluma y contrapeso, definidos con la tabla de carga del equipo asignado.",
        en: "Load weight, radius, boom and counterweight configuration, defined with the assigned unit's load chart.",
      },
    },
    {
      title: { es: "Inspección de accesorios", en: "Rigging inspection" },
      text: {
        es: "Eslingas, grilletes, ganchos, cables, kits antiderrame y canastas se inspeccionan de forma periódica y se descartan según criterio técnico, dejando registro de cada revisión.",
        en: "Slings, shackles, hooks, ropes, spill kits and man baskets are inspected on a regular basis and retired on technical criteria, with every check on record.",
      },
    },
    {
      title: { es: "Delimitación del área", en: "Area delimitation" },
      text: {
        es: "Señalización del radio de giro, control de acceso de personal y coordinación con seguridad ocupacional del cliente.",
        en: "Swing radius signage, personnel access control and coordination with the client's safety team.",
      },
    },
    {
      title: { es: "Personal capacitado", en: "Trained personnel" },
      text: {
        es: "Operadores y señaleros con formación en izaje seguro, código de señales y trabajos en altura cuando aplica.",
        en: "Operators and signal persons trained in safe lifting, hand signals and work at height when applicable.",
      },
    },
    {
      title: { es: "Mantenimiento preventivo", en: "Preventive maintenance" },
      text: {
        es: "Programa de mantenimiento por horas de operación y revisión previa a cada movilización.",
        en: "Maintenance program by operating hours and a check before each mobilization.",
      },
    },
    {
      title: { es: "Pólizas y documentación", en: "Insurance and documentation" },
      text: {
        es: "Póliza de responsabilidad civil, riesgos del trabajo y documentación disponible para ingreso a planta o licitación.",
        en: "Liability and workers' compensation coverage, with documentation available for plant access or tenders.",
      },
    },
  ],
  note: {
    es: "Podemos completar los formularios de ingreso, matrices de riesgo y requisitos documentales que exija su planta o su proceso de contratación.",
    en: "We can complete the site access forms, risk matrices and documentation your plant or procurement process requires.",
  },
};

export const sectors: L[] = [
  { es: "Construcción", en: "Construction" },
  { es: "Industria y manufactura", en: "Industry & manufacturing" },
  { es: "Energía", en: "Energy" },
  { es: "Logística y bodegas", en: "Logistics & warehousing" },
  { es: "Telecomunicaciones", en: "Telecommunications" },
  { es: "Agroindustria", en: "Agribusiness" },
];

export const contact = {
  eyebrow: { es: "Contacto y cotización", en: "Contact and quote" },
  title: { es: "Cuéntenos qué necesita levantar", en: "Tell us what you need to lift" },
  lead: {
    es: "Complete el formulario y le enviamos una cotización con el equipo recomendado. Si es urgente, escríbanos por WhatsApp o llámenos directamente.",
    en: "Fill in the form and we'll send a quote with the recommended equipment. If it's urgent, message us on WhatsApp or call directly.",
  },
  form: {
    name: { es: "Nombre completo", en: "Full name" },
    company: { es: "Empresa (opcional)", en: "Company (optional)" },
    phone: { es: "Teléfono / WhatsApp", en: "Phone / WhatsApp" },
    email: { es: "Correo electrónico (opcional)", en: "Email (optional)" },
    service: { es: "Servicio que necesita", en: "Service needed" },
    capacity: { es: "Capacidad estimada", en: "Estimated capacity" },
    capacityUnknown: { es: "No estoy seguro", en: "Not sure" },
    location: { es: "Ubicación del trabajo", en: "Job location" },
    date: { es: "Fecha requerida", en: "Required date" },
    message: { es: "Detalle de la carga o maniobra", en: "Load or maneuver details" },
    messagePlaceholder: {
      es: "Ej.: izaje de dos unidades de aire acondicionado de 900 kg a un techo de 12 m, acceso por calle pública.",
      en: "E.g.: lifting two 900 kg HVAC units onto a 12 m roof, access from a public street.",
    },
    submit: { es: "Enviar solicitud", en: "Send request" },
    submitting: { es: "Enviando…", en: "Sending…" },
    successTitle: { es: "Solicitud recibida", en: "Request received" },
    successText: {
      es: "Gracias. Un miembro de nuestro equipo le contactará para confirmar detalles y enviarle la cotización.",
      en: "Thank you. A member of our team will contact you to confirm details and send the quote.",
    },
    successWhatsapp: {
      es: "¿Quiere adelantar el proceso? Envíenos el mismo detalle por WhatsApp.",
      en: "Want to speed things up? Send us the same details on WhatsApp.",
    },
    errorText: {
      es: "No pudimos enviar la solicitud. Intente de nuevo o escríbanos por WhatsApp.",
      en: "We couldn't send the request. Please try again or message us on WhatsApp.",
    },
    another: { es: "Enviar otra solicitud", en: "Send another request" },
    required: { es: "Complete los campos obligatorios.", en: "Please complete the required fields." },
  },
};

export const ctaBand = {
  title: {
    es: "¿Necesita una grúa esta semana?",
    en: "Need a crane this week?",
  },
  text: {
    es: "Cotizamos rápido y le confirmamos disponibilidad del equipo según la carga, el radio y el acceso al sitio.",
    en: "We quote fast and confirm equipment availability based on load, radius and site access.",
  },
};

export const footer = {
  tagline: {
    es: "Alquiler de grúas telescópicas, izaje, montaje industrial y transporte de cargas en todo Costa Rica.",
    en: "Telescopic crane rental, lifting, industrial assembly and cargo transport across Costa Rica.",
  },
  rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  quickLinks: { es: "Enlaces", en: "Links" },
};

export const seo: Record<string, { title: L; description: L }> = {
  home: {
    title: {
      es: "Grúas L&L S.A. | Alquiler de grúas telescópicas en Costa Rica",
      en: "Grúas L&L S.A. | Telescopic crane rental in Costa Rica",
    },
    description: {
      es: "Alquiler de grúas telescópicas de 5, 25, 55 y 65 toneladas, izaje, montaje industrial y transporte de cargas en todo Costa Rica. Cotice al 8820-4956.",
      en: "Telescopic crane rental of 5, 25, 55 and 65 tons, lifting, industrial assembly and cargo transport across Costa Rica. Quote at +506 8820-4956.",
    },
  },
  services: {
    title: {
      es: "Servicios de izaje, montaje y transporte | Grúas L&L S.A.",
      en: "Lifting, assembly and transport services | Grúas L&L S.A.",
    },
    description: {
      es: "Izaje y manejo de carga, montaje industrial, transporte de maquinaria y alquiler de grúa con operador por hora, día o proyecto en Costa Rica.",
      en: "Lifting and load handling, industrial assembly, machinery transport and crane rental with operator by hour, day or project in Costa Rica.",
    },
  },
  fleet: {
    title: {
      es: "Flota de grúas telescópicas 5, 25, 55 y 65 toneladas | Grúas L&L",
      en: "Telescopic crane fleet: 5, 25, 55 and 65 tons | Grúas L&L",
    },
    description: {
      es: "Fichas técnicas de nuestras grúas telescópicas de 5, 25, 55 y 65 toneladas, alcances de pluma y aplicaciones recomendadas.",
      en: "Technical sheets for our 5, 25, 55 and 65-ton telescopic cranes, boom reach and recommended applications.",
    },
  },
  projects: {
    title: { es: "Proyectos y casos | Grúas L&L S.A.", en: "Projects and cases | Grúas L&L S.A." },
    description: {
      es: "Casos de izaje, montaje industrial y transporte de maquinaria ejecutados en Costa Rica por Grúas L&L S.A.",
      en: "Lifting, industrial assembly and machinery transport cases executed in Costa Rica by Grúas L&L S.A.",
    },
  },
  about: {
    title: { es: "Sobre Grúas L&L S.A. | Izaje y transporte de carga", en: "About Grúas L&L S.A. | Lifting and cargo transport" },
    description: {
      es: "Empresa costarricense de alquiler de grúas telescópicas y transporte de cargas, con flota propia y cobertura en todo el territorio nacional.",
      en: "Costa Rican telescopic crane rental and cargo transport company, with its own fleet and nationwide coverage.",
    },
  },
  safety: {
    title: { es: "Seguridad y certificaciones | Grúas L&L S.A.", en: "Safety and certifications | Grúas L&L S.A." },
    description: {
      es: "Planes de izaje, inspección de accesorios, operadores capacitados, mantenimiento preventivo y pólizas vigentes.",
      en: "Lift plans, rigging inspection, trained operators, preventive maintenance and active insurance policies.",
    },
  },
  contact: {
    title: { es: "Contacto y cotización de grúas | Grúas L&L S.A.", en: "Contact and crane quotes | Grúas L&L S.A." },
    description: {
      es: "Solicite cotización de grúa telescópica o transporte de carga en Costa Rica. Teléfonos 8820-4956 y 8682-9321, atención 24/7.",
      en: "Request a telescopic crane or cargo transport quote in Costa Rica. Phones +506 8820-4956 and 8682-9321, 24/7 service.",
    },
  },
};
