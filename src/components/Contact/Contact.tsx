import { CONTACT_LINKS } from "../../data/contacts";
import { SectionHeader } from "../common/SectionHeader";
import { ContactIcon } from "../common/ContactIcon";

export function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1100px] mx-auto px-8 py-24 text-center"
    >
      <SectionHeader
        tag="Let's Connect"
        title="Get in Touch"
        description="Open to frontend engineering roles and interesting projects. Let's build something great together."
        centered
      />
      <div className="flex justify-center gap-4 flex-wrap">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="flex items-center gap-2 bg-surface border border-border-custom px-5 py-3 rounded-xl no-underline text-text-primary text-sm hover:border-accent hover:-translate-y-0.5 transition-all"
          >
            <ContactIcon type={link.iconType} />
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
