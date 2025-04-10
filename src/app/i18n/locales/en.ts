import { Translation } from '../index';

export const en: Translation = {
  header: {
    about: "About Me",
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
      description: "My journey in programming began during my Computer Science degree, where I had my first contact with web development. Since then, I have specialized in modern technologies and development best practices."
    }
  },
  video: {
    title: "Presentation Video",
    description: "Watch the presentation video to learn more about me and my work."
  },
  companies: {
    title: "Companies",
    description: "Get to know the companies I've worked for and the projects I've developed.",
    learnMore: "Learn More",
    mutant: {
      title: "Mutant",
      description: "Software development for Mutant, a leading technology company.",
      learnMore: "Learn More",
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
          role: "Software Developer @Mutant | TypeScript | React | Node | Tests",
          text: "I had the pleasure of working with Thyago on challenging projects and his technical ability is impressive. Not only does he master the necessary technologies but he also has an excellent architectural vision and always seeks the best development practices."
        }
      },
      projects: {
        title: "Projects",
        responsibilities: "Responsibilities",
        highlights: "Highlights",
        technologies: "Technologies",
        myRequests: {
          title: "My Requests (Assigned to: VIVO TELEFONICA)",
          description: "Development of robust microservices for integration with multiple gateways and systems in the Vivo application, allowing the customer to perform operations and access information directly, without the need for an agent. The system was designed to handle a high volume of users and requests, ensuring consistency and traceability in all operations when making a request, from support to ticket generation — from user access to each step taken before making system calls.",
          period: "August 2024 - October 2024 / December 2024 - February 2025",
          role: "Backend Developer",
          responsibilities: [
            "Development of RESTful APIs following market standards",
            "Implementation of design patterns and clean architecture",
            "Integration with external systems and gateways",
            "Technical and API documentation using Swagger",
            "Code review and automated testing",
            "Continuous implementation of hexagonal architecture",
            "Development of automated tests with over 90% coverage"
          ],
          highlights: [
            "Implementation of feature flags for testing new functionalities",
            "Implementation of circuit breaker for external integrations"
          ]
        },
        biometric: {
          title: "Biometric Project (Assigned to: VIVO TELEFONICA)",
          description: "Focus on creating interfaces and implementing new designs for system functionalities, ensuring a fluid and responsive user experience. The project is directly related to the security area, where there is an opportunity to actively contribute. I use React to develop interfaces, applying best practices and reusable components to maintain scalable and efficient code.",
          period: "October 2024 - December 2024",
          role: "Fullstack Developer",
          responsibilities: [
            "Full-stack application development",
            "Responsive interface development",
            "Creation of unit tests, integration tests and mutation tests",
            "Application of tagging in system and tests",
          ],
          highlights: [
            'I rewrote the unit tests to achieve over 90% coverage'
          ]
        },
        morada: {
          title: "Morada Project (Assigned to: VIVO TELEFONICA)",
          description: "Development of a platform for visualization and analysis of sales data and business metrics.",
          period: "February 2025 - Present",
          role: "Fullstack Developer",
          responsibilities: [
            "Development of interactive and responsive interfaces",
            "Implementation of charts and data visualizations",
            "Performance and SEO optimization",
            "Development of reusable components",
            "Unit and integration testing"
          ],
          highlights: [
            "Interactive charts with D3.js and smooth animations",
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
    description: "Get to know me better through photos and videos.",
    viewMore: "View More"
  },
  research: {
    title: "Research",
    description: "Articles and research about software development.",
    readTime: "min",
    readMore: "Read More"
  },
  languageSelector: "Select language"
}; 