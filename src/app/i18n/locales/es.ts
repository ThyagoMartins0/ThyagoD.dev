import { Translation } from '../index';

export const es: Translation = {
  header: {
    about: 'Sobre Mí',
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
      description: 'Mi viaje en la programación comenzó durante mi licenciatura en Ciencias de la Computación, donde tuve mi primer contacto con el desarrollo web. Desde entonces, me he especializado en tecnologías modernas y mejores prácticas de desarrollo.',
    },
  },
  video: {
    title: 'Video de Presentación',
    description: 'Mira el video de presentación para conocer más sobre mí y mi trabajo.',
  },
  companies: {
    title: 'Empresas',
    description: 'Conoce las empresas en las que he trabajado y los proyectos que he desarrollado.',
    learnMore: 'Saber Más',
    mutant: {
      title: 'Mutant',
      description: 'Desarrollo de software para Mutant, una empresa líder en tecnología.',
      learnMore: 'Saber Más',
      slogan: 'NUNCA TE CONFORMES.',
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
          role: 'Desarrollador de Software @Mutant | TypeScript | React | Node | Tests',
          text: 'Tuve el placer de trabajar con Thyago en proyectos desafiantes y su capacidad técnica es impresionante. No solo domina las tecnologías necesarias sino que también tiene una excelente visión arquitectónica y siempre busca las mejores prácticas de desarrollo.'
        }
      },
      projects: {
        title: 'Proyectos',
        responsibilities: 'Responsabilidades',
        highlights: 'Destacados',
        technologies: 'Tecnologías',
        myRequests: {
          title: 'Mis Solicitudes (Asignado a: VIVO TELEFONICA)',
          description: 'Desarrollo de microservicios robustos para integración con múltiples gateways y sistemas en la aplicación Vivo, permitiendo al cliente realizar operaciones y acceder a información directamente, sin necesidad de un agente. El sistema fue diseñado para manejar un alto volumen de usuarios y solicitudes, asegurando consistencia y trazabilidad en todas las operaciones al realizar una solicitud, desde el soporte hasta la generación de tickets — desde el acceso del usuario hasta cada paso tomado antes de realizar llamadas al sistema.',
          period: 'Agosto 2024 - Octubre 2024 / Diciembre 2024 - Febrero 2025',
          role: 'Desarrollador Backend',
          responsibilities: [
            'Desarrollo de APIs RESTful siguiendo estándares del mercado',
            'Implementación de patrones de diseño y arquitectura limpia',
            'Integración con sistemas y gateways externos',
            'Documentación técnica y de API usando Swagger',
            'Revisión de código y pruebas automatizadas',
            'Implementación continua de arquitectura hexagonal',
            'Desarrollo de pruebas automatizadas con más del 90% de cobertura'
          ],
          highlights: [
            'Implementación de feature flags para probar nuevas funcionalidades',
            'Implementación de circuit breaker para integraciones externas'
          ]
        },
        biometric: {
          title: 'Proyecto Biométrico (Asignado a: VIVO TELEFONICA)',
          description: 'Atención a la creación de interfaces e implementación de nuevos diseños para las funcionalidades del sistema, asegurando una experiencia fluida y responsiva para el usuario. El proyecto está directamente relacionado con el área de seguridad, donde existe la oportunidad de contribuir activamente. Utilizo React para desarrollar interfaces, aplicando buenas prácticas y componentes reutilizados para mantener un código escalable y eficiente.',
          period: 'Octubre 2024 - Diciembre 2024',
          role: 'Desarrollador Fullstack',
          responsibilities: [
            'Desarrollo de aplicación full-stack',
            'Desarrollo de interfaz responsiva',
            'Creación de pruebas unitarias, de integración y de mutación',
            'Aplicación de etiquetado en sistema y pruebas',
          ],
          highlights: [
            'Reescribí las pruebas unitarias para lograr más del 90% de cobertura'
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
            'Pruebas unitarias y de integración'
          ],
          highlights: [
            'Gráficos interactivos con D3.js y animaciones suaves',
            'Exportación de informes en múltiples formatos (PDF, Excel, CSV)',
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
  gallery: {
    title: 'Galería',
    description: 'Conóceme mejor a través de fotos y videos.',
    viewMore: 'Ver Más'
  },
  research: {
    title: 'Investigación',
    description: 'Artículos e investigaciones sobre desarrollo de software.',
    readTime: 'min',
    readMore: 'Leer Más',
  },
  languageSelector: 'Seleccionar idioma'
}; 