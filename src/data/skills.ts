export interface SkillCategory {
  icon: string;
  title: string;
  tags: string[];
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    icon: "Code",
    title: "Core Frontend",
    tags: ["Angular 19", "React 18", "TypeScript", "Next.js"],
  },
  {
    icon: "RefreshCw",
    title: "State Management",
    tags: ["RxJS", "React Context", "Zustand"],
  },
  {
    icon: "Palette",
    title: "Styling",
    tags: [
      "Angular Material",
      "Tailwind CSS",
      "Responsive Design",
      "ARIA Accessibility",
    ],
  },
  {
    icon: "Shield",
    title: "API & Auth",
    tags: ["REST APIs", "HTTP Interceptors", "JWT Auth", "Token Refresh"],
  },
  {
    icon: "FileInput",
    title: "Forms",
    tags: ["Angular Reactive Forms", "React Hook Form", "Dynamic Generation"],
  },
  {
    icon: "Wrench",
    title: "Tooling",
    tags: ["Git", "Storybook", "Postman", "Figma"],
  },
];
