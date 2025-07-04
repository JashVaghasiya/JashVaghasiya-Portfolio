import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollY / windowHeight) * 100, 100);
      setScrollProgress(progress);

      // Update active section based on scroll position
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
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl h-16" 
        : "bg-gradient-to-r from-white/90 via-blue-50/90 to-white/90 backdrop-blur-md border-b border-slate-200/50 h-20"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-105">
            <h1 className={`font-bold text-slate-800 transition-all duration-500 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}>
              Jash Vaghasiya
            </h1>
            <p className={`text-slate-600 transition-all duration-500 ${
              isScrolled ? "text-xs" : "text-sm"
            }`}>
              Data Engineer
            </p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg transform hover:scale-105 ${
                    activeSection === link.id
                      ? "text-blue-600 font-semibold bg-blue-50 shadow-sm"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {activeSection === link.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg animate-pulse" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Contact
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-blue-50 transition-colors">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`text-left px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                        activeSection === link.id
                          ? "text-blue-600 bg-blue-50 font-semibold"
                          : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </nav>
  );
}