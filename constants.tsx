
import React from 'react';
import { Product, Niche } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'Calendario de Reservas',
    description: 'Transforma la gestión de tu tiempo. Permite que tus clientes agenden citas las 24 horas del día con una interfaz impecable.',
    price: 0,
    category: 'Gestión',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1000',
    features: ['Calendario Privado', 'Recordatorio por Mail y Whatsapp']
  },
  {
    id: 's2',
    name: 'WhatsApp Bot Inteligente',
    description: 'Vende mientras duermes. Automatiza tus respuestas y guía a tus clientes con inteligencia artificial conversacional.',
    price: 0,
    category: 'Automatización',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1000',
    features: ['Respuestas IA', 'Atención 24/7']
  },
  {
    id: 's3',
    name: 'Tarjetas Digitales Pro',
    description: 'La primera impresión es digital. Comparte tu contacto, redes y portafolio con un solo escaneo. Networking del futuro.',
    price: 0,
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    features: ['Código QR Único', 'Enlaces a Redes']
  },
  {
    id: 's4',
    name: 'Página Web Inicial',
    description: 'Tu hogar en internet. Una landing page de diseño vanguardista, incluida de regalo al contratar nuestro paquete integral (Reservas + WhatsApp Bot + Tarjetas Pro).',
    price: 0,
    category: 'Web Gratis',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    features: ['Diseño Moderno', 'Optimizado para Móvil']
  }
];

export const DETAILED_FEATURES = [
  {
    id: 'df1',
    title: 'Calendario por Rubro',
    subtitle: 'Agenda online inteligente',
    description: 'Reservas online, orden de horarios, ficha de clientes/pacientes, recordatorios y menos "no-shows". Adaptado para barberías, clínicas, salones y más.',
    features: ['Reservas 24/7', 'Fichas de clientes', 'Recordatorios automáticos', 'Múltiples proveedores'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z" />,
    color: 'bg-sky-500'
  },
  {
    id: 'df2',
    title: 'Bot de WhatsApp 24/7',
    subtitle: 'Atención automática',
    description: 'Responde preguntas, agenda, confirma, reprograma, manda recordatorios (24h y 1-2h antes), deriva a humano cuando corresponde.',
    features: ['Respuestas instantáneas', 'Agenda automática', 'Recordatorios inteligentes', 'Derivación a humano'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    color: 'bg-emerald-500'
  },
  {
    id: 'df3',
    title: 'Página Web Profesional',
    subtitle: 'Landing moderna y efectiva',
    description: 'Botón Reservar, servicios, precios, ubicación, redes, testimonios y WhatsApp directo. Para que tu negocio se vea grande.',
    features: ['Diseño profesional', 'Botón de reserva', 'WhatsApp integrado', 'SEO optimizado'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    color: 'bg-indigo-500'
  },
  {
    id: 'df5',
    title: 'Tarjetas Digitales',
    subtitle: 'Presentación profesional',
    description: 'Tarjetas de presentación digitales ilimitadas para todos tus proveedores. Impacta desde el primer contacto.',
    features: ['Diseño personalizado', 'Compartir instantáneo', 'QR integrado', 'Analytics'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    color: 'bg-rose-500'
  },
  {
    id: 'df6',
    title: 'Soluciones a Medida',
    subtitle: 'Personalización total',
    description: 'Dashboards, mini-CRM, automatizaciones, integraciones con pagos, formularios, Google Calendar y más.',
    features: ['Dashboards custom', 'Integraciones', 'Automatizaciones', 'Soporte dedicado'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
    color: 'bg-blue-600'
  }
];

export const GROWTH_LEVERS = [
  {
    id: 'gl1',
    number: '01',
    title: 'Atracción de Clientes',
    description: 'Estrategias de visibilidad masiva para captar prospectos calificados desde el primer segundo.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: 'from-sky-500 to-blue-600'
  },
  {
    id: 'gl2',
    number: '02',
    title: 'Conversión Automática',
    description: 'Transformamos el interés en ventas reales mediante interfaces persuasivas y bots inteligentes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'gl3',
    number: '03',
    title: 'Retención y Lealtad',
    description: 'Mantenemos a tus clientes activos y fieles con sistemas de recordatorios y atención personalizada.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'gl4',
    number: '04',
    title: 'Optimización Continua',
    description: 'Análisis de datos en tiempo real para escalar tu negocio basándote en resultados tangibles.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-500 to-rose-600'
  }
];

export const NICHES: Niche[] = [
  {
    id: 'n1',
    name: 'Barberías y Salones',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600',
    iconColor: 'bg-orange-500',
    icon: <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3" />
  },
  {
    id: 'n2',
    name: 'Clínicas Dentales',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    iconColor: 'bg-blue-400',
    icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  },
  {
    id: 'n3',
    name: 'Oftalmología',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=600',
    iconColor: 'bg-indigo-600',
    icon: <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  },
  {
    id: 'n4',
    name: 'Estética y Belleza',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600',
    iconColor: 'bg-pink-500',
    icon: <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  },
  {
    id: 'n5',
    name: 'Tatuaje y Piercing',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1000',
    iconColor: 'bg-slate-700',
    icon: <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  },
  {
    id: 'n6',
    name: 'Complejos Deportivos',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=600',
    iconColor: 'bg-emerald-500',
    icon: <path d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h6.5a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H9a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 019 3z" />
  },
  {
    id: 'n7',
    name: 'Inmobiliarias',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
    iconColor: 'bg-cyan-500',
    icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  },
  {
    id: 'n8',
    name: 'Asesoría Legal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    iconColor: 'bg-indigo-500',
    icon: <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  }
];

export const CATEGORIES = ['Todas', 'Web Gratis', 'Marketing', 'Gestión', 'Automatización'];
