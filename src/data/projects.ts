export interface Project {
  title: string;
  desc: string;
  tech: string[];
  url: string;
}

export const PROJECTS: readonly Project[] = [
  {
    title: "Fuel Subsidy Platform",
    desc: "Architected the frontend for Malaysia's national fuel subsidy system spanning Eligibility, Appeals, Reimbursements, and Transactions modules with 32 screens.",
    tech: ["Angular 19", "Ionic 8", "TypeScript", "RxJS"],
    url: "https://www.budi95.gov.my/landing",
  },
  {
    title: "Corporate Portal",
    desc: "Built an enterprise fleet management portal for a major payment provider with full SSO and MFA authentication, role-based access control, and real-time transaction monitoring.",
    tech: ["Angular 8", "TypeScript", "RxJS"],
    url: "https://business.touchngo.com.my/card/login",
  },
  {
    title: "Consumer Portal",
    desc: "Delivered a consumer-facing RFID/e-wallet application for a major payment provider with secure authentication, top-up flows, and transaction history.",
    tech: ["Angular 8", "TypeScript", "RxJS"],
    url: "https://consumer.touchngo.com.my/login",
  },
  {
    title: "Water Utility Platform",
    desc: "Contributed to the customer-facing web app for Malaysia's largest water utility, working on rewards, missions, and redemption modules.",
    tech: ["Next.js", "React", "Zustand", "React Hook Form"],
    url: "https://www.airselangor.com/?lang=en",
  },
];
