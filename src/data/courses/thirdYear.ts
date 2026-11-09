/** Third-year courses (SEG3125, SEG3101, SEG3102). */
import type { Course } from '../../types';

export const thirdYear: Course[] = [
  {
    code: 'SEG3125',
    name: 'Analysis and Design of User Interfaces',
    description:
      'Psychological principles of human-computer interaction. Evaluation of user interfaces and usability engineering. Task analysis, user-centred design and prototyping. Conceptual models, design of windows and menus, and response time and feedback. Prerequisite: SEG 2105.',
    descriptionSource: 'uOttawa calendar (2014-15 edition, summarized)',
    concepts: ['User-centred design and prototyping', 'Visual communication and hierarchy', 'Designing for human cognition', 'Usability heuristics and evaluation', 'Data visualization', 'Internationalization'],
    specs: ['Front end: HTML/CSS, React 18-19, Bootstrap 5', 'Build: Vite and Create React App', 'Charts: Recharts', 'Hosting: GitHub Pages', 'Prototyping: Figma'],
    assignments: [
      {
        slug: 'assignment-1', concepts: ['Visual hierarchy', 'Typography and colour', 'Responsive layout'], specs: ['Static site: HTML and CSS', 'Hosted on GitHub Pages'], number: '1', name: 'Assignment 1: Portfolio',
        objective: 'Build and host a portfolio entry page using principles of visual communication.',
        tools: ['HTML', 'CSS', 'Bootstrap 5', 'GitHub Pages'],
        implementation: ['Terminal-themed portfolio page introducing my interests and way of working'],
        links: [{ label: 'Project page', href: '/projects/university-projects/seg3125-portfolio' }],
      },
      {
        slug: 'assignment-2', concepts: ['Figma prototyping', 'Multi-page navigation', 'Form design and validation', 'Confirmation feedback'], specs: ['React 19 with Create React App (react-scripts 5)', 'Bootstrap 5.3, React Router 7', 'Tests: React Testing Library', 'Deployed with gh-pages'], number: '2', name: 'Assignment 2: Service Website',
        objective: 'Design a website for a service business, prototyped first in Figma.',
        tools: ['React', 'Bootstrap', 'Figma'],
        implementation: ['Precision Auto Repair: services and pricing, appointment booking form and confirmation'],
        links: [{ label: 'Project page', href: '/projects/university-projects/precision-auto-repair' }],
      },
      {
        slug: 'assignment-3', concepts: ['Designing for attention and short-term memory', 'Difficulty levels', 'Game state in React hooks'], specs: ['React 18 with Vite', 'React Router 6', 'Deployed with gh-pages'], number: '3', name: 'Assignment 3: Memory Game',
        objective: 'Design a memory game around human cognition.',
        tools: ['React'],
        implementation: ['Sequence-memory game with three difficulty levels and a results page'],
        links: [{ label: 'Project page', href: '/projects/university-projects/memory-game' }],
      },
      {
        slug: 'assignment-4', concepts: ['Faceted search and filtering', 'Multi-step checkout with a progress indicator', 'Usability heuristic evaluation'], specs: ['React 18 with Vite', 'React Router 6', 'Deployed with gh-pages'], number: '4', name: 'Assignment 4: E-commerce',
        objective: 'Design an e-commerce site with faceted search, evaluated against usability heuristics.',
        tools: ['React'],
        implementation: ['TechNova electronics store: filters, cart, multi-step checkout and feedback survey'],
        links: [{ label: 'Project page', href: '/projects/university-projects/technova' }],
      },
      {
        slug: 'assignment-5', concepts: ['Data visualization', 'Internationalization (English and French)', 'Filter-driven views'], specs: ['React 18 with Vite', 'Recharts for charts, React Router 7', 'Deployed with gh-pages'], number: '5', name: 'Assignment 5: Dashboard',
        objective: 'Design a data visualization dashboard with internationalization.',
        tools: ['React', 'Recharts'],
        implementation: ['Formula 1 dashboard with filters, charts and English/French language switching'],
        links: [{ label: 'Project page', href: '/projects/university-projects/f1-dashboard' }],
      },
    ],
  },
  {
    code: 'SEG3101',
    name: 'Software Requirements Analysis',
    description:
      'Techniques for eliciting requirements. Languages and models for representing requirements. Analysis and validation techniques, including need, goal and use case analysis. Prerequisite: SEG 2105.',
    descriptionSource: 'uOttawa calendar (summarized)',
    concepts: ['Requirements elicitation (interviews, surveys, observation)', 'Writing testable functional and non-functional requirements', 'Stakeholder analysis', 'MoSCoW prioritization', 'Traceability'],
    specs: ['Deliverables: written reports in LaTeX'],
    assignments: [
      {
        slug: 'assignment-1', concepts: ['Stakeholder analysis', 'Elicitation (interviews, surveys, observation)', 'MoSCoW prioritization', 'Traceability'], specs: ['Report written in LaTeX', '18 functional and 6 non-functional requirements'], number: '1', name: 'Assignment 1: Online Grocery Store Requirements',
        objective: 'Practise the requirements engineering process for a real-world scenario.',
        problem:
          'A small independent grocery store wants an online platform (website and mobile app) where customers can browse, search, buy and pay for groceries, and choose delivery or store pickup.',
        requirements: [
          'Problem definition',
          'Stakeholder identification and analysis',
          'Elicitation techniques',
          'Functional and non-functional requirements',
          'Prioritization',
          'Traceability',
        ],
        approach:
          'Selected interviews, surveys and task observation as elicitation techniques. The report separates evidence from the scenario from illustrative findings and lists the evidence still to be collected, since no live elicitation took place.',
        tools: ['LaTeX'],
        implementation: [
          'Requirements report with 18 functional requirements (FR-01 to FR-18) and 6 non-functional requirements (NFR-01 to NFR-06)',
          'MoSCoW prioritization table with a justification of the framework',
          'Traceability between stakeholders, elicitation findings and requirements',
        ],
      },
    ],
    labs: [
      {
        slug: 'lab-1', specs: ['Written lab (no code)'], number: '1', name: 'Lab 1: Evaluating Requirement Statements',
        objective: 'Judge whether requirement statements for an electronic library system are well written, and rewrite the flawed ones.',
        concepts: ['"shall" statements with the system as subject', 'One requirement per statement', 'Testability and ambiguity', 'Inclusive language'],
        work: ['Evaluated each statement, explained its problems and proposed rewrites, such as splitting compound requirements and replacing vague timeframes with measurable ones'],
      },
    ],
  },
  {
    code: 'SEG3102',
    name: 'Software Design and Architecture',
    description:
      'An advanced look at software design, extending the study of design patterns, frameworks and architectures. Survey of middleware, evaluating and evolving designs, and the basics of reengineering and reverse engineering. Prerequisite: SEG 2105.',
    descriptionSource: 'uOttawa course catalogue (summarized)',
    concepts: ['Domain-driven design: subdomains and bounded contexts', 'Use case contracts and realizations', 'Component-based front ends', 'MVC and REST back ends', 'Dependency injection and services'],
    specs: ['Front end: Angular 21-22 with TypeScript and RxJS', 'Back end: Kotlin with Spring Boot, built with Gradle', 'Other: Angular SSR with Express, Firebase via @angular/fire, springdoc OpenAPI'],
    assignments: [
      {
        slug: 'assignment-1', concepts: ['Domain-driven design', 'Core, supporting and generic subdomains', 'Bounded contexts', 'Use case contracts'], specs: ['Written design document (PDF), team of two'], number: '1', name: 'Assignment 1: DDD Contracts',
        objective: 'Apply domain-driven design to an airport employee scheduling system.',
        problem: 'An airport with hundreds of employees is replacing its employee management and scheduling system.',
        implementation: [
          'Identified employee schedule management as the core domain, with payroll, employee records, access control and AI schedule generation as supporting or generic subdomains',
          'Documented domain assumptions, such as employees belonging to exactly one department',
          'Placed the "select work shifts" use case in the core bounded context',
        ],
        note: 'Team of two.',
      },
    ],
    labs: [
      { slug: 'lab-1', objective: 'An Angular app with two standalone components: a temperature converter and a calculator, each with its own template and route.', concepts: ['Components and templates', 'Property and event binding', 'Two-way binding'], specs: ['Framework: Angular 22 (TypeScript, standalone components)', 'Tooling: Angular CLI, RxJS 7.8'], number: '1', name: 'Lab 1: Angular Basics', tools: ['Angular', 'TypeScript'], work: ['Temperature converter and calculator components'] },
      { slug: 'lab-2', objective: 'A Kotlin Spring Boot web app. WebController serves a home page template and a /calculate endpoint that adds, subtracts, multiplies or divides two values from the form, reporting errors such as division by zero.', concepts: ['MVC controllers', 'Request parameters', 'Server-side templates'], specs: ['Language: Kotlin on the JVM', 'Framework: Spring Boot, built with Gradle (Kotlin DSL)', 'Controller: WebController with / and /calculate routes', 'Server-rendered home.html template', 'Test: Spring Boot context test (JUnit 5)'], number: '2', name: 'Lab 2: Spring Boot Web App', tools: ['Kotlin', 'Spring Boot', 'Gradle'], work: ['Web controller serving a server-rendered home page template'] },
      { slug: 'lab-3', objective: 'An Angular shopping list built from a ShoppingList parent component and ListEntry child components.', concepts: ['Parent and child components', '@Input / @Output communication', 'Lists with structural directives'], specs: ['Framework: Angular 22 (TypeScript, standalone components)', 'Tooling: Angular CLI, RxJS 7.8'], number: '3', name: 'Lab 3: Shopping List', tools: ['Angular', 'TypeScript'], work: ['Shopping list with list-entry components'] },
      { slug: 'lab-4', objective: 'An Angular app where a user form and a user details view share data through an injected UserService, configured for server-side rendering.', concepts: ['Reactive forms', 'Shared services and dependency injection', 'Server-side rendering'], specs: ['Framework: Angular 22 (TypeScript, standalone components)', 'Tooling: Angular CLI, RxJS 7.8', 'Server-side rendering: @angular/ssr with Express 5'], number: '4', name: 'Lab 4: Forms and Services', tools: ['Angular', 'TypeScript'], work: ['User form and user details components sharing data through a service, with server-side rendering set up'] },
      { slug: 'lab-5', objective: 'An Angular address book: address list, table and detail views, a notification service, a header, and sign-in, sign-up and password-reset screens, with addresses stored in Firestore.', concepts: ['Services and dependency injection', 'Environment configuration', 'Routing and authentication screens'], specs: ['Framework: Angular 21 (TypeScript, standalone components)', 'Tooling: Angular CLI, RxJS 7.8', 'Backend: Firebase via @angular/fire'], number: '5', name: 'Lab 5: Address List', tools: ['Angular', 'TypeScript'], work: ['Address list with a notification service, header and sign-in components, and environment configuration'] },
      { slug: 'lab-6', objective: 'A Kotlin Spring Boot REST API. CalculatorController exposes add, subtract, multiply and divide as GET endpoints under /calculator, documented with OpenAPI.', concepts: ['REST API design', 'Path variables', 'JSON responses'], specs: ['Language: Kotlin on the JVM', 'Framework: Spring Boot, built with Gradle (Kotlin DSL)', 'Spring Boot 4.1, Kotlin 2.3', 'REST endpoints: GET /calculator/{add|subtract|multiply|divide}/{number1}/{number2}', 'API docs: springdoc OpenAPI (Swagger UI)'], number: '6', name: 'Lab 6: REST Calculator', tools: ['Kotlin', 'Spring Boot'], work: ['REST calculator API (CalculatorController)'] },
    ],
  },
];
