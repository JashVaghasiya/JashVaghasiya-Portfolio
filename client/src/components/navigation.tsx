import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "experience", "projects", "skills", "certifications", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 72;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-data-dark-950/70 backdrop-blur-3xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-gray-200/50 dark:border-pipeline-blue/15"
          : "bg-white/40 dark:bg-data-dark-950/30 backdrop-blur-xl border-b border-transparent"
      }`}
    >
      {/* Gradient border accent on bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), rgba(59,130,246,0.3), rgba(167,139,250,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo / Name - Left */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl md:text-2xl font-pixelify tracking-tight hover:text-pipeline-cyan transition-colors duration-300 truncate max-w-[200px] sm:max-w-none"
          >
            Jash Vaghasiya
          </button>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-base font-retro px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-pipeline-cyan font-medium bg-pipeline-cyan/10 dark:bg-pipeline-cyan/10"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Theme toggle + Mobile menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-gray-100/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 hover:bg-gray-200/80 dark:hover:bg-white/20 hover:border-gray-300/50 dark:hover:border-white/20 transition-all duration-300 group"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun
                  key="sun"
                  className="h-4.5 w-4.5 text-amber-400 theme-icon-enter"
                  style={{ width: "18px", height: "18px" }}
                />
              ) : (
                <Moon
                  key="moon"
                  className="h-4.5 w-4.5 text-slate-700 theme-icon-enter"
                  style={{ width: "18px", height: "18px" }}
                />
              )}
            </button>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/80 dark:hover:bg-white/20 transition-all duration-300">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-72 bg-white/95 dark:bg-data-dark-900/95 backdrop-blur-2xl border-l border-gray-200 dark:border-pipeline-blue/20"
                >
                  <div className="flex flex-col gap-1 mt-8">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={`text-left px-4 py-3 rounded-lg text-lg font-retro transition-all duration-300 ${
                          activeSection === link.id
                            ? "text-pipeline-cyan font-medium bg-pipeline-cyan/10 dark:bg-data-dark-800/40"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-data-dark-800/40"
                        }`}
                      >
                        {link.label}
                      </button>
                    ))}

                    {/* Theme toggle in mobile menu */}
                    <div className="mt-4 px-4 pt-4 border-t border-gray-200 dark:border-pipeline-blue/10">
                      <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-lg font-retro text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-data-dark-800/40 transition-all duration-300"
                      >
                        {theme === "dark" ? (
                          <>
                            <Sun className="h-4 w-4 text-amber-400" />
                            <span>Light Mode</span>
                          </>
                        ) : (
                          <>
                            <Moon className="h-4 w-4 text-slate-700" />
                            <span>Dark Mode</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
