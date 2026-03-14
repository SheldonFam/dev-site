import { Sun, Moon, Menu, FileText } from "lucide-react";
import { NAV_ITEMS } from "../../data/navigation";
import { useNavMenu } from "../../hooks/useNavMenu";
import { useTheme } from "../../hooks/useTheme";
import resumePdf from "../../assets/SheldonFam-Resume.pdf";

export function Navbar() {
  const { isOpen, toggle, close } = useNavMenu();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-nav-bg backdrop-blur-xl border-b border-border-custom z-50 px-8 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between h-[60px]">
        <div className="font-bold text-lg tracking-tight">
          sheldon<span className="text-accent">.dev</span>
        </div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex list-none gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-text-secondary no-underline text-sm hover:text-text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-blue-600 hover:-translate-y-0.5 transition-all no-underline"
          >
            <FileText size={14} />
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-custom bg-surface text-text-secondary hover:text-text-primary hover:border-accent-border transition-all cursor-pointer"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="md:hidden text-text-primary bg-transparent border-none cursor-pointer"
            onClick={toggle}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-5 pb-6 px-2">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="list-none">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-text-secondary no-underline text-sm hover:text-text-primary transition-colors"
                onClick={close}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="list-none">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent no-underline text-sm font-semibold hover:text-blue-400 transition-colors"
              onClick={close}
            >
              <FileText size={14} />
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
