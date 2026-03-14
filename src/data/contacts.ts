export interface ContactLink {
  href: string;
  label: string;
  iconType: "email" | "linkedin" | "github" | "whatsapp";
}

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    href: "mailto:sheldonfam95@gmail.com",
    label: "sheldonfam95@gmail.com",
    iconType: "email",
  },
  {
    href: "https://linkedin.com/in/sheldon-fam",
    label: "LinkedIn",
    iconType: "linkedin",
  },
  {
    href: "https://github.com/SheldonFam",
    label: "GitHub",
    iconType: "github",
  },
  {
    href: "https://wa.me/60169273295",
    label: "WhatsApp",
    iconType: "whatsapp",
  },
];
