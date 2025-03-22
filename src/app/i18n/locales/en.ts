import { Translation } from '../index';

export const en: Translation = {
  header: {
    about: "About me",
    projects: "Projects",
    research: "Research",
    gallery: "Gallery"
  },
  profile: {
    role: "Software Engineer",
    bio: {
      title: "About Me",
      description: "I am a Software Engineer passionate about technology and innovation. With over 5 years of experience in web and mobile development, I have worked with various modern technologies and frameworks."
    },
    skills: {
      title: "Skills",
      description: "My programming journey began during my Computer Science degree, where I had my first contact with web development. Since then, I have been specializing in modern technologies and best development practices."
    }
  },
  video: {
    title: "Presentation Video",
    description: "Watch the presentation video to learn more about me and my work."
  },
  companies: {
    title: "Companies",
    description: "Get to know the companies I've worked for and the projects I've developed.",
    learnMore: "Learn more",
    mutant: {
      title: "Mutant",
      description: "Software development for Mutant, a leading technology company.",
      learnMore: "Learn more",
      slogan: "NEVER SETTLE.",
      about: {
        title: "About Mutant",
        description: "Mutant is a technology company that offers innovative solutions to its clients.",
        role: "Role",
        period: "Period",
        location: "Location"
      },
      recommendations: {
        title: "Recommendations",
        gabriel: {
          name: "Gabriel Nunes",
          role: "Software Architect | Java Developer | Springboot | Postgresql | Game dev",
          text: "Thyago is an exceptional developer, always seeking to evolve and improve his skills. He demonstrates a genuine commitment to continuous improvement, constantly requesting feedback to perfect his work and always deliver the best possible result."
        },
        daniel: {
          name: "Daniel Nogueira",
          role: "Software Developer at @Mutant | TypeScript | React | Node | Tests",
          text: "I had the pleasure of working with Thyago on challenging projects and his technical ability is impressive. He not only masters the necessary technologies but also has an excellent architectural vision and always seeks the best development practices."
        }
      },
      projects: {
        title: "Projects",
        responsibilities: "Responsibilities",
        highlights: "Highlights",
        technologies: "Technologies",
        myRequests: {
          title: "My Requests (Allocated at: VIVO TELEFONICA)",
          description: "Development of a robust API for integration with multiple payment gateways, enabling real-time transaction processing and recurring billing management.",
          period: "August 2024 - October 2024 / December 2024 - February 2025",
          role: "Backend Developer",
          responsibilities: [
            "Development of RESTful APIs following market standards",
            "Implementation of design patterns and clean architecture",
            "Integration with external systems and payment gateways",
            "Technical and API documentation using Swagger",
            "Code review",
            "Junior developer mentoring",
            "Development of automated tests with over 90% coverage"
          ],
          highlights: [
            "Implementation of retry system for failed transactions with dead letter queue",
            "Development of webhooks for real-time notifications with delivery guarantee",
            "Creation of automated tests with over 80% coverage",
            "Implementation of circuit breaker for external integrations",
            "Performance optimization resulting in 40% reduction in response time"
          ]
        },
        biometric: {
          title: "Biometric Project (Allocated at: VIVO TELEFONICA)",
          description: "Creation of a complete system for order management, including real-time tracking and integration with logistics systems.",
          period: "October 2024 - December 2024",
          role: "Fullstack Developer",
          responsibilities: [
            "Full-stack application development",
            "Database and cache modeling",
            "Implementation of websockets for real-time updates",
            "AWS infrastructure deployment and configuration",
            "Development of responsive interfaces"
          ],
          highlights: [
            "Real-time dashboard with Socket.IO for instant updates",
            "Redis cache system reducing database load by 60%",
            "Integration with multiple tracking APIs",
            "Implementation of push notification system",
            "Development of automated reports"
          ]
        },
        morada: {
          title: "Morada Project (Allocated at: VIVO TELEFONICA)",
          description: "Development of a platform for visualization and analysis of sales data and business metrics.",
          period: "February 2025 - Present",
          role: "Fullstack Developer",
          responsibilities: [
            "Development of interactive and responsive interfaces",
            "Implementation of graphs and data visualizations",
            "Performance and SEO optimization",
            "Development of reusable components",
            "Unit and integration tests"
          ],
          highlights: [
            "Interactive graphs with D3.js and smooth animations",
            "Report export in multiple formats (PDF, Excel, CSV)",
            "Responsive and accessible interface following WCAG 2.1",
            "Implementation of advanced filters and real-time search",
            "Performance optimization with Lighthouse score of 98"
          ]
        }
      },
      gallery: {
        title: "Gallery",
        images: {
          workspace: "Workspace",
          team: "Company team",
          event: "Company event"
        }
      }
    }
  },
  gallery: {
    title: "Gallery",
    description: "Learn more about me through photos and videos.",
    viewMore: "View more"
  },
  research: {
    title: "Research",
    description: "Articles and research about software development.",
    readTime: "min",
    readMore: "Read more"
  },
  languageSelector: "Select language"
}; 