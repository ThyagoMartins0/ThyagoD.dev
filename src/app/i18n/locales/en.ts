export const en = {
  header: {
    about: 'About me',
    projects: 'Projects',
    research: 'Research',
    gallery: 'Gallery',
  },
  profile: {
    role: 'Software Engineer',
    bio: {
      short: 'I am a Software Engineer passionate about technology and innovation. With over 5 years of experience in web and mobile development, I have worked with various modern technologies and frameworks.',
      long: 'My programming journey began during my Computer Science degree, where I discovered my passion for creating technological solutions. Over the years, I have developed expertise in JavaScript/TypeScript, React, Node.js, and other web ecosystem technologies. I constantly seek to learn new technologies and methodologies to create high-quality digital products. My goal is to continue growing professionally and contribute to innovative projects that positively impact people\'s lives.',
      readMore: 'Read more',
      readLess: 'Read less',
    },
    skills: {
      title: 'Skills',
    },
  },
  video: {
    title: 'Learn more about me',
    description: 'Watch the video to better understand my journey and experiences.',
  },
  companies: {
    title: 'Companies',
    description: 'Learn about some of the companies I have worked with.',
    learnMore: 'Learn more',
    mutant: {
      slogan: 'NEVER SETTLE.',
      about: {
        title: 'About the Company',
        description: 'Mutant is an innovative company focused on software development and technological solutions. With a unique culture and dynamic environment, we constantly seek new challenges and growth opportunities.',
        role: 'Role',
        period: 'Period',
        location: 'Location'
      },
      recommendations: {
        title: 'Recommendations',
        gabriel: {
          name: 'Gabriel Nunes',
          role: 'Software Architect | Java Developer | Springboot | Postgresql | Game dev',
          text: 'Thyago is an exceptional developer, always seeking to evolve and improve his skills. He demonstrates a genuine commitment to continuous improvement, constantly requesting feedback to perfect his work and always deliver the best possible result.\n\nIn addition to his technical capability, Thyago stands out for his proactivity and dedication, always being attentive to new ways of optimizing processes and contributing to the team\'s success. Working with him means having the certainty of counting on a committed professional who is constantly growing. I strongly recommend his work!'
        },
        daniel: {
          name: 'Daniel Nogueira',
          role: 'Software Developer at @Mutant | TypeScript | React | Node | Tests',
          text: 'I had the pleasure of working with Thyago on challenging projects and his technical capability is impressive. He not only masters the necessary technologies but also has an excellent architectural vision and always seeks the best development practices.\n\nWhat impresses me most is his ability to collaborate and communicate clearly with the team. Thyago is a professional who truly makes a difference in any project he participates in.'
        }
      },
      projects: {
        title: 'Projects',
        responsibilities: 'Responsibilities',
        highlights: 'Highlights',
        technologies: 'Technologies',
        myRequests: {
          title: 'My Requests (Allocated at: VIVO TELEFONICA)',
          description: 'Development of a robust API for integration with multiple payment gateways, enabling real-time transaction processing and recurring billing management. The system was designed to handle high transaction volume, ensuring consistency and traceability in all operations.',
          period: 'August 2024 - October 2024  /  December 2024 - February 2025',
          role: 'Backend Developer',
          responsibilities: [
            'Development of RESTful APIs following market standards',
            'Implementation of design patterns and clean architecture',
            'Integration with external systems and payment gateways',
            'Technical and API documentation using Swagger',
            'Code review',
            'Junior developer mentoring',
            'Development of automated tests with coverage above 90%'
          ],
          highlights: [
            'Implementation of retry system for failed transactions with dead letter queue',
            'Development of webhooks for real-time notifications with delivery guarantee',
            'Creation of automated tests with coverage above 80%',
            'Implementation of circuit breaker for external integrations',
            'Performance optimization resulting in 40% reduction in response time'
          ]
        },
        biometric: {
          title: 'Biometric Project (Allocated at: VIVO TELEFONICA)',
          description: 'Creation of a complete system for order management, including real-time tracking and integration with logistics systems. The platform allows real-time monitoring of order status, inventory management, and delivery metrics analysis.',
          period: 'October 2024 - December 2024',
          role: 'Fullstack Developer',
          responsibilities: [
            'Full-stack application development',
            'Database and cache modeling',
            'Implementation of websockets for real-time updates',
            'AWS infrastructure deployment and configuration',
            'Development of responsive interfaces'
          ],
          highlights: [
            'Real-time dashboard with Socket.IO for instant updates',
            'Redis cache system reducing database load by 60%',
            'Integration with multiple tracking APIs',
            'Implementation of push notification system',
            'Development of automated reports'
          ]
        },
        morada: {
          title: 'Morada Project (Allocated at: VIVO TELEFONICA)',
          description: 'Development of a platform for visualization and analysis of sales data and business metrics. The portal offers real-time insights on sales performance, customer behavior, and market trends.',
          period: 'February 2025 - Present',
          role: 'Fullstack Developer',
          responsibilities: [
            'Development of interactive and responsive interfaces',
            'Implementation of graphs and data visualizations',
            'Performance and SEO optimization',
            'Development of reusable components',
            'Unit and integration tests'
          ],
          highlights: [
            'Interactive graphs with D3.js and smooth animations',
            'Report export in multiple formats (PDF, Excel, CSV)',
            'Responsive and accessible interface following WCAG 2.1',
            'Implementation of advanced filters and real-time search',
            'Performance optimization with Lighthouse score of 98'
          ]
        }
      },
      gallery: {
        title: 'Gallery',
        images: {
          workspace: 'Workspace',
          team: 'Company team',
          event: 'Company event'
        }
      }
    }
  },
  gallery: {
    title: 'My Story',
    description: 'Learn more about my personal and professional journey',
    sections: {
      education: {
        title: 'Academic Background',
        text: 'Graduated in Systems Analysis and Development, focusing on web and mobile development. Always seeking to learn new technologies and methodologies to create innovative solutions.',
        alt: 'Thyago smiling'
      },
      professional: {
        title: 'Professional Experience',
        text: 'Full Stack Developer with experience in React, Next.js, Node.js, and TypeScript. I have worked on various challenging projects, contributing to the development of scalable and high-performance solutions.',
        alt: 'Thyago in blue clothes'
      },
      personal: {
        title: 'Personal Life & Hobbies',
        text: 'Beyond programming, I am passionate about sports and physical activities. I believe that a healthy body keeps the mind healthy, and this directly reflects on the quality of my work and creativity.',
        alt: 'Thyago running'
      }
    }
  },
  research: {
    title: 'Research & Insights',
    description: 'Exploring and sharing knowledge about software development, web technologies, and best practices.',
    readTime: 'min read',
    readMore: 'Read more',
  },
  scrollToTop: 'Scroll to top',
  languageSelector: 'Select language',
} as const; 