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
      description: 'Sou um Engenheiro de Software apaixonado por tecnologia e inovação. Com mais de 5 anos de experiência em desenvolvimento web e mobile, tenho trabalhado com diversas tecnologias e frameworks modernos.'
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
      learnMore: 'Saiba mais',
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
          description:  'Desenvolvimento de microserviços robustos para integração com múltiplos gateways e sistemas no aplicativo da Vivo, permitindo que o cliente realize operações e acesse informações diretamente, sem a necessidade de um atendente. O sistema foi projetado para lidar com um alto volume de usuários e solicitações, garantindo consistência e rastreabilidade em todas as operações no momento de realizar uma solicitação desde a um suporte a geração de boletos — desde o acesso do usuário até cada passo dado antes de realizar chamadas ao sistema.',
          period: 'Agosto 2024 - Outubro 2024  /  Dezembro -  2024 - Fevereiro 2025',
          role: 'Backend Developer',
          responsibilities: [
            'Desenvolvimento de APIs RESTful seguindo padrões de mercado',
            'Implementação de padrões de design e arquitetura limpa',
            'Integração com sistemas externos e gateways',
            'Documentação técnica e de API usando Swagger',
            'Code review e testes automatizados',
            'Implementação continua de arquitetura hexagonal',
            'Desenvolvimento de testes automatizados com cobertura superior a 90%'
          ],
          highlights: [
            'Implementação de feat flags para testes de novas funcionalidades',
            'Implementação de circuit breaker para integrações externas',
          ]
        },
        biometric: {
          title: 'Projeto Biometria ( Alocado na empresa: VIVO TELEFONICA)',
          description: 'Atuo na criação de interfaces e na implementação de novos designs para funcionalidades do sistema, garantindo uma experiência fluida e responsiva ao usuário. O projeto está diretamente relacionado à área de segurança, na qual tive a oportunidade de contribuir ativamente. Utilizo React no desenvolvimento das interfaces, aplicando boas práticas e componentes reutilizáveis para manter o código escalável e eficiente.',

          period: 'Outubro 2024 - Dezembro 2024',
          role: 'Fullstack Developer',
          responsibilities: [
            'Desenvolvimento full-stack da aplicação',
            'Desenvolvimento de interfaces responsivas',
            'Criação de testes unitários, de integração e de mutação  ',
            'Aplicação do tagueamento em sistema e em testes',
          ],
          
          highlights: [
            'Reescrevi os testes unitario deixando a cima dos 90% de cobertura'
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
    },
    ninetyNine: {
      title: '99 Freelas',
      description: 'Desenvolvimento de software como freelancer na maior plataforma de freelancers do Brasil.',
      learnMore: 'Saiba mais',
      slogan: 'Conectando talentos e oportunidades.',
      about: {
        title: 'Sobre a 99 Freelas',
        description: 'A 99 Freelas é a maior plataforma de freelancers do Brasil, conectando profissionais e empresas em projetos de tecnologia e desenvolvimento de software.',
        role: 'Cargo',
        period: 'Período',
        location: 'Localização'
      },
      projects: {
        title: 'Projetos',
        responsibilities: 'Responsabilidades',
        highlights: 'Destaques',
        technologies: 'Tecnologias',
        freelance: {
          title: 'Desenvolvimento Freelancer',
          description: 'Desenvolvimento de diversos projetos como freelancer, trabalhando com diferentes tecnologias e frameworks. Cada projeto foi uma oportunidade de aprender novas habilidades e aplicar conhecimentos em diferentes contextos.',
          period: 'Agosto 2023 - Janeiro 2024',
          role: 'Desenvolvedor Fullstack',
          responsibilities: [
            'Desenvolvimento de aplicações web e mobile',
            'Implementação de APIs RESTful',
            'Integração com bancos de dados e serviços externos',
            'Desenvolvimento de interfaces responsivas',
            'Testes automatizados e garantia de qualidade',
            'Documentação técnica e de usuário',
            'Gestão de projetos e comunicação com clientes'
          ],
          highlights: [
            'Desenvolvimento de aplicações com alta performance e escalabilidade',
            'Implementação de boas práticas de desenvolvimento e arquitetura limpa',
            'Experiência com diferentes tecnologias e frameworks',
            'Trabalho remoto e gestão de tempo eficiente',
            'Comunicação clara e profissional com clientes'
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
  languageSelector: 'Selecionar idioma'
}; 