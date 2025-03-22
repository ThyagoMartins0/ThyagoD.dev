import { Translation } from '../index';

export const ptBR: Translation = {
  header: {
    about: 'Sobre mim',
    projects: 'Projetos',
    research: 'Pesquisa',
    gallery: 'Galeria',
  },
  profile: {
    role: 'Engenheiro de Software',
    bio: {
      title: 'Sobre Mim',
      description: 'Sou um Engenheiro de Software apaixonado por tecnologia e inovação. Com mais de 5 anos de experiência em desenvolvimento web e mobile, tenho trabalhado com diversas tecnologias e frameworks modernos.',
      short: 'Sou um Engenheiro de Software apaixonado por tecnologia e inovação. Com mais de 5 anos de experiência em desenvolvimento web e mobile, tenho trabalhado com diversas tecnologias e frameworks modernos.',
      long: 'Minha jornada na programação começou durante minha graduação em Ciência da Computação, onde descobri minha paixão por criar soluções tecnológicas. Ao longo dos anos, desenvolvi expertise em JavaScript/TypeScript, React, Node.js e outras tecnologias do ecossistema web. Busco constantemente aprender novas tecnologias e metodologias para criar produtos digitais de alta qualidade. Meu objetivo é continuar crescendo profissionalmente e contribuir para projetos inovadores que impactem positivamente a vida das pessoas.',
      readMore: 'Ler mais',
      readLess: 'Ler menos',
    },
    skills: {
      title: 'Habilidades',
      description: 'Minha jornada na programação começou durante minha graduação em Ciência da Computação, onde tive meu primeiro contato com desenvolvimento web. Desde então, venho me especializando em tecnologias modernas e melhores práticas de desenvolvimento.',
    },
  },
  video: {
    title: 'Vídeo de Apresentação',
    description: 'Assista ao vídeo de apresentação para conhecer mais sobre mim e meu trabalho.',
  },
  companies: {
    title: 'Empresas',
    description: 'Conheça as empresas onde trabalhei e os projetos que desenvolvi.',
    learnMore: 'Saiba mais',
    mutant: {
      title: 'Mutant',
      description: 'Desenvolvimento de software para a Mutant, uma empresa líder em tecnologia.',
      slogan: 'NEVER SETTLE.',
      about: {
        title: 'Sobre a Mutant',
        description: 'A Mutant é uma empresa de tecnologia que oferece soluções inovadoras para seus clientes.',
        role: 'Cargo',
        period: 'Período',
        location: 'Localização'
      },
      recommendations: {
        title: 'Recomendações',
        gabriel: {
          name: 'Gabriel Nunes',
          role: 'Arquiteto de software | Java Developer | Springboot | Postgresql | Game dev',
          text: 'Thyago é um desenvolvedor excepcional, sempre buscando evoluir e aprimorar suas habilidades. Ele demonstra um compromisso genuíno com a melhoria contínua, solicitando feedbacks constantes para aperfeiçoar seu trabalho e entregar sempre o melhor resultado possível.\n\nAlém de sua capacidade técnica, Thyago se destaca pela proatividade e dedicação, mostrando-se sempre atento a novas formas de otimizar processos e contribuir para o sucesso da equipe. Trabalhar com ele é ter a certeza de contar com um profissional comprometido e em constante crescimento. Recomendo fortemente seu trabalho!'
        },
        daniel: {
          name: 'Daniel Nogueira',
          role: 'Software Developer at @Mutant | TypeScript | React | Node | Testes',
          text: 'Tive o prazer de trabalhar com o Thyago em projetos desafiadores e sua capacidade técnica é impressionante. Ele não apenas domina as tecnologias necessárias, mas também tem uma excelente visão de arquitetura e sempre busca as melhores práticas de desenvolvimento.\n\nO que mais me impressiona é sua habilidade de colaboração e comunicação clara com a equipe. Thyago é um profissional que realmente faz a diferença em qualquer projeto que participa.'
        }
      },
      projects: {
        title: 'Projetos',
        responsibilities: 'Responsabilidades',
        highlights: 'Destaques',
        technologies: 'Tecnologias',
        myRequests: {
          title: 'Minha solicitações ( Alocado na empresa: VIVO TELEFONICA)',
          description: 'Desenvolvimento de uma API robusta para integração com múltiplos gateways de pagamento, permitindo processamento de transações em tempo real e gestão de cobranças recorrentes. O sistema foi projetado para lidar com alto volume de transações, garantindo consistência e rastreabilidade em todas as operações.',
          period: 'Agosto 2024 - Outubro 2024  /  Dezembro -  2024 - Fevereiro 2025',
          role: 'Backend Developer',
          responsibilities: [
            'Desenvolvimento de APIs RESTful seguindo padrões de mercado',
            'Implementação de padrões de design e arquitetura limpa',
            'Integração com sistemas externos e gateways de pagamento',
            'Documentação técnica e de API usando Swagger',
            'Code review',
            'Mentoria de desenvolvedores júnior',
            'Desenvolvimento de testes automatizados com cobertura superior a 90%'
          ],
          highlights: [
            'Implementação de sistema de retry para transações falhas com dead letter queue',
            'Desenvolvimento de webhooks para notificações em tempo real com garantia de entrega',
            'Criação de testes automatizados com cobertura superior a 80%',
            'Implementação de circuit breaker para integrações externas',
            'Otimização de performance resultando em redução de 40% no tempo de resposta'
          ]
        },
        biometric: {
          title: 'Projeto Biometria ( Alocado na empresa: VIVO TELEFONICA)',
          description: 'Criação de um sistema completo para gerenciamento de pedidos, incluindo tracking em tempo real e integração com sistemas de logística. A plataforma permite o acompanhamento em tempo real do status dos pedidos, gestão de estoque e análise de métricas de entrega.',
          period: 'Outubro 2024 - Dezembro 2024',
          role: 'Fullstack Developer',
          responsibilities: [
            'Desenvolvimento full-stack da aplicação',
            'Modelagem de banco de dados e cache',
            'Implementação de websockets para atualizações em tempo real',
            'Deploy e configuração de infraestrutura na AWS',
            'Desenvolvimento de interfaces responsivas'
          ],
          highlights: [
            'Dashboard em tempo real com Socket.IO para atualizações instantâneas',
            'Sistema de cache com Redis reduzindo carga no banco de dados em 60%',
            'Integração com múltiplas APIs de rastreamento',
            'Implementação de sistema de notificações push',
            'Desenvolvimento de relatórios automatizados'
          ]
        },
        morada: {
          title: 'Projeto Morada ( Alocado na empresa: VIVO TELEFONICA)',
          description: 'Desenvolvimento de uma plataforma para visualização e análise de dados de vendas e métricas de negócio. O portal oferece insights em tempo real sobre o desempenho das vendas, comportamento dos clientes e tendências de mercado.',
          period: 'Fevereiro 2025 - Atual',
          role: 'Fullstack Developer',
          responsibilities: [
            'Desenvolvimento de interfaces interativas e responsivas',
            'Implementação de gráficos e visualizações de dados',
            'Otimização de performance e SEO',
            'Desenvolvimento de componentes reutilizáveis',
            'Testes unitários e de integração'
          ],
          highlights: [
            'Gráficos interativos com D3.js e animações suaves',
            'Exportação de relatórios em múltiplos formatos (PDF, Excel, CSV)',
            'Interface responsiva e acessível seguindo WCAG 2.1',
            'Implementação de filtros avançados e busca em tempo real',
            'Otimização de performance com score 98 no Lighthouse'
          ]
        }
      },
      gallery: {
        title: 'Galeria',
        images: {
          workspace: 'Espaço de trabalho',
          team: 'Time da empresa',
          event: 'Evento da empresa'
        }
      }
    }
  },
  gallery: {
    title: 'Galeria',
    description: 'Conheça mais sobre mim através de fotos e vídeos.',
    viewMore: 'Ver mais'
  },
  research: {
    title: 'Pesquisa',
    description: 'Artigos e pesquisas sobre desenvolvimento de software.',
    readTime: 'min',
    readMore: 'Ler mais',
  },
  scrollToTop: 'Voltar ao topo',
  languageSelector: 'Selecionar idioma',
} as const; 