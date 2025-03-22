import { Translation } from '../index';

export const es: Translation = {
  header: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    research: 'Investigación',
    gallery: 'Galería',
  },
  profile: {
    role: 'Ingeniero de Software',
    bio: {
      title: 'Sobre Mí',
      description: 'Soy un Ingeniero de Software apasionado por la tecnología y la innovación. Con más de 5 años de experiencia en desarrollo web y móvil, he trabajado con diversas tecnologías y frameworks modernos.',
    },
    skills: {
      title: 'Habilidades',
      description: 'Mi viaje en programación comenzó durante mi licenciatura en Ciencias de la Computación, donde tuve mi primer contacto con el desarrollo web. Desde entonces, me he especializado en tecnologías modernas y mejores prácticas de desarrollo.',
    },
  },
  video: {
    title: 'Video de Presentación',
    description: 'Mira el video de presentación para conocer más sobre mí y mi trabajo.',
  },
  companies: {
    title: 'Empresas',
    description: 'Conoce las empresas para las que he trabajado y los proyectos que he desarrollado.',
    learnMore: 'Conocer más',
    mutant: {
      title: 'Mutant',
      description: 'Desarrollo de software para Mutant, una empresa líder en tecnología.',
      learnMore: 'Conocer más',
      slogan: 'NEVER SETTLE.',
      about: {
        title: 'Sobre Mutant',
        description: 'Mutant es una empresa de tecnología que ofrece soluciones innovadoras a sus clientes.',
        role: 'Rol',
        period: 'Período',
        location: 'Ubicación'
      },
      recommendations: {
        title: 'Recomendaciones',
        gabriel: {
          name: 'Gabriel Nunes',
          role: 'Arquitecto de Software | Desarrollador Java | Springboot | Postgresql | Game dev',
          text: 'Thyago es un desarrollador excepcional, siempre buscando evolucionar y mejorar sus habilidades. Demuestra un compromiso genuino con la mejora continua, solicitando constantemente retroalimentación para perfeccionar su trabajo y siempre entregar el mejor resultado posible.'
        },
        daniel: {
          name: 'Daniel Nogueira',
          role: 'Desarrollador de Software en @Mutant | TypeScript | React | Node | Tests',
          text: 'Tuve el placer de trabajar con Thyago en proyectos desafiantes y su capacidad técnica es impresionante. No solo domina las tecnologías necesarias sino que también tiene una excelente visión arquitectónica y siempre busca las mejores prácticas de desarrollo.'
        }
      },
      projects: {
        title: 'Proyectos',
        responsibilities: 'Responsabilidades',
        highlights: 'Destacados',
        technologies: 'Tecnologías',
        myRequests: {
          title: 'My Requests (Asignado a: VIVO TELEFONICA)',
          description: 'Desarrollo de una API robusta para integración con múltiples pasarelas de pago, permitiendo el procesamiento de transacciones en tiempo real y la gestión de facturación recurrente.',
          period: 'Agosto 2024 - Octubre 2024 / Diciembre 2024 - Febrero 2025',
          role: 'Desarrollador Backend',
          responsibilities: [
            'Desarrollo de APIs RESTful siguiendo estándares del mercado',
            'Implementación de patrones de diseño y arquitectura limpia',
            'Integración con sistemas externos y pasarelas de pago',
            'Documentación técnica y de API usando Swagger',
            'Revisión de código',
            'Mentoría a desarrolladores junior',
            'Desarrollo de pruebas automatizadas con más del 90% de cobertura'
          ],
          highlights: [
            'Implementación de sistema de reintentos para transacciones fallidas con cola de mensajes muertos',
            'Desarrollo de webhooks para notificaciones en tiempo real con garantía de entrega',
            'Creación de pruebas automatizadas con más del 80% de cobertura',
            'Implementación de circuit breaker para integraciones externas',
            'Optimización de rendimiento resultando en 40% de reducción en tiempo de respuesta'
          ]
        },
        biometric: {
          title: 'Proyecto Biométrico (Asignado a: VIVO TELEFONICA)',
          description: 'Creación de un sistema completo para gestión de pedidos, incluyendo seguimiento en tiempo real e integración con sistemas logísticos.',
          period: 'Octubre 2024 - Diciembre 2024',
          role: 'Desarrollador Fullstack',
          responsibilities: [
            'Desarrollo de aplicación full-stack',
            'Modelado de base de datos y caché',
            'Implementación de websockets para actualizaciones en tiempo real',
            'Despliegue y configuración de infraestructura AWS',
            'Desarrollo de interfaces responsivas'
          ],
          highlights: [
            'Dashboard en tiempo real con Socket.IO para actualizaciones instantáneas',
            'Sistema de caché Redis reduciendo la carga de la base de datos en 60%',
            'Integración con múltiples APIs de seguimiento',
            'Implementación de sistema de notificaciones push',
            'Desarrollo de reportes automatizados'
          ]
        },
        morada: {
          title: 'Proyecto Morada (Asignado a: VIVO TELEFONICA)',
          description: 'Desarrollo de una plataforma para visualización y análisis de datos de ventas y métricas de negocio.',
          period: 'Febrero 2025 - Presente',
          role: 'Desarrollador Fullstack',
          responsibilities: [
            'Desarrollo de interfaces interactivas y responsivas',
            'Implementación de gráficos y visualizaciones de datos',
            'Optimización de rendimiento y SEO',
            'Desarrollo de componentes reutilizables',
            'Pruebas unitarias e integración'
          ],
          highlights: [
            'Gráficos interactivos con D3.js y animaciones suaves',
            'Exportación de reportes en múltiples formatos (PDF, Excel, CSV)',
            'Interfaz responsiva y accesible siguiendo WCAG 2.1',
            'Implementación de filtros avanzados y búsqueda en tiempo real',
            'Optimización de rendimiento con puntuación Lighthouse de 98'
          ]
        }
      },
      gallery: {
        title: 'Galería',
        images: {
          workspace: 'Espacio de trabajo',
          team: 'Equipo de la empresa',
          event: 'Evento de la empresa'
        }
      }
    }
  },
  research: {
    title: 'Investigación',
    description: 'Artículos e investigaciones sobre desarrollo de software.',
    readTime: 'min',
    readMore: 'Leer más',
  },
  scrollToTop: 'Volver arriba',
  languageSelector: 'Seleccionar idioma',
} as const; 