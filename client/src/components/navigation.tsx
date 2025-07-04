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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 relative overflow-hidden ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-2xl h-16" 
        : "bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl border-b border-white/20 h-20"
    }`}>
      {/* Animated background pattern */}
      <div className={`absolute inset-0 opacity-10 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'float 4s ease-in-out infinite'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          <motion.div 
            className="flex-shrink-0 transform transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className={`font-bold transition-all duration-500 ${
              isScrolled 
                ? "text-xl text-slate-800 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent" 
                : "text-2xl text-white drop-shadow-lg"
            }`}>
              Jash Vaghasiya
            </h1>
            <p className={`transition-all duration-500 ${
              isScrolled 
                ? "text-xs text-slate-600" 
                : "text-sm text-blue-200 drop-shadow-md"
            }`}>
              Data Engineer
            </p>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    activeSection === link.id
                      ? isScrolled 
                        ? "text-blue-600 font-semibold bg-blue-50 shadow-lg" 
                        : "text-white font-semibold bg-white/20 shadow-lg backdrop-blur-sm"
                      : isScrolled
                        ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50/80"
                        : "text-blue-100 hover:text-white hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {activeSection === link.id && (
                    <motion.div 
                      className={`absolute inset-0 rounded-lg ${
                        isScrolled 
                          ? "bg-gradient-to-r from-blue-100 to-emerald-100" 
                          : "bg-gradient-to-r from-white/30 to-blue-300/30"
                      }`}
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${
                      isScrolled ? "from-blue-500 to-emerald-500" : "from-white to-blue-300"
                    } rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white"
                      : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                  }`}
                >
                  <span className="relative z-10">Contact</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
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