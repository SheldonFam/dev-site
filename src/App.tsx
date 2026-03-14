import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="bg-bg text-text-primary min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <footer className="text-center py-8 border-t border-border-custom text-xs text-text-muted">
        &copy; 2026 Sheldon Fam. Built with care.
      </footer>
    </div>
  );
}

export default App;
