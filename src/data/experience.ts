export interface SubProject {
  name: string;
  tech: string[];
  bullets: string[];
}

export interface Job {
  role: string;
  company: string;
  date: string;
  tech: string[];
  bullets: string[];
  projects: SubProject[];
}

export const JOBS: readonly Job[] = [
  {
    role: "Frontend Developer",
    company: "Fourtitude Asia",
    date: "Sep 2023 - Present",
    tech: [],
    bullets: [],
    projects: [
      {
        name: "Fuel Subsidy Platform",
        tech: ["Angular 19", "Ionic 8", "TypeScript", "RxJS"],
        bullets: [
          "Architected the frontend for Malaysia's national fuel subsidy system (15M+ users), delivering 32 screens across Eligibility, Appeals, Reimbursements, and Transactions — coordinated with backend, design and product teams throughout.",
          "Designed and built a reusable component library with 50+ standalone Angular components, establishing consistent UI patterns adopted across all feature modules.",
          "Implemented a centralized HTTP layer handling authentication, token refresh, and security headers — adopted as the team-wide standard for all API communication.",
          "Established shared loading, error handling, and pagination patterns across 20+ data-intensive views, reducing boilerplate and ensuring UX consistency.",
        ],
      },
      {
        name: "Corporate Portal & Consumer Portal",
        tech: ["Angular 8", "TypeScript", "RxJS"],
        bullets: [
          "Delivered two Angular portals in parallel for a major payment provider: an enterprise fleet management system and a consumer-facing app (RFID registration, vehicle management, e-wallet integration).",
          "Owned the full authentication layer across both platforms — SSO, MFA/OTP, token lifecycle, session expiration, and account blocking — enabling secure transactional workflows for thousands of daily users.",
          "Structured modular service layers by business domain (auth, user, RFID, vehicle, transactions), reducing cross-team merge conflicts and improving onboarding time for new developers.",
          "Applied lazy loading, debounced interactions, and optimized rendering to maintain responsiveness on data-heavy views.",
        ],
      },
      {
        name: "Customer Management Initiative",
        tech: ["Next.js", "React", "TypeScript", "Zustand", "React Hook Form"],
        bullets: [
          "Contributed to a customer-facing web application for Malaysia's largest water utility, serving 8+ million consumers across Selangor and Kuala Lumpur.",
          "Resolved production bugs across the rewards, missions, and redemption modules, improving stability for active user workflows.",
          "Developed UI components for a module enhancement, following the team's established design system of 150+ reusable components.",
          "Worked within a complex codebase involving multi-step forms, custom validation, and conditional user flows.",
        ],
      },
    ],
  },
  {
    role: "Software Developer Intern",
    company: "ScalingWorks (M) Sdn Bhd",
    date: "Oct 2022 - Jan 2023",
    tech: [
      "React 18",
      "TypeScript",
      "Storybook",
      "Styled Components",
      "REST APIs",
    ],
    bullets: [
      "Shipped 15+ production React components with TypeScript generics support including a type-safe table component with sortable columns and custom cell renderers.",
      "Established the team's first component documentation standard in Storybook, reducing onboarding time for new developers joining the frontend team.",
      "Built responsive dashboard layout using CSS Grid and Flexbox with mobile-first progressive enhancement across 10+ breakpoint configurations.",
    ],
    projects: [],
  },
  {
    role: "Assistant Service Engineer",
    company: "Hibex Malaysia Sdn Bhd",
    date: "Jan 2019 - Oct 2021",
    tech: [],
    bullets: [],
    projects: [],
  },
  {
    role: "Service Technician",
    company: "Atom Electronic (M) Sdn Bhd",
    date: "Jan 2018 - Dec 2018",
    tech: [],
    bullets: [],
    projects: [],
  },
];
