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
    desc: "Built an enterprise fleet management portal for a major payment provider with full SSO and MFA/OTP authentication, token lifecycle management, session expiration, and account blocking.",
    tech: ["Angular 8", "TypeScript", "RxJS"],
    url: "https://business.touchngo.com.my/card/login",
  },
  {
    title: "Consumer Portal",
    desc: "Delivered a consumer-facing application for a major payment provider with secure authentication, RFID registration, vehicle management, and e-wallet integration.",
    tech: ["Angular 8", "TypeScript", "RxJS"],
    url: "https://consumer.touchngo.com.my/login",
  },
  {
    title: "Water Utility Platform",
    desc: "Contributed to the customer-facing web app for Malaysia's largest water utility, working on rewards, missions, and redemption modules.",
    tech: ["Next.js", "React", "TypeScript", "Zustand", "React Hook Form"],
    url: "https://www.airselangor.com/?lang=en",
  },
];
