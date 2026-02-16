export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 72;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
  ];

  return (
    <footer className="py-12 md:py-16 bg-white dark:bg-data-dark-950 border-t border-gray-200 dark:border-pipeline-blue/10 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
        <p className="text-lg sm:text-xl font-semibold font-pixelify text-gray-900 dark:text-white mb-2">
          Jash Vaghasiya
        </p>
        <p className="text-base sm:text-base md:text-lg font-retro text-gray-400 dark:text-gray-500 mb-8 md:mb-8">Data Engineer</p>

        <div className="flex justify-center flex-wrap gap-5 md:gap-6 mb-10 md:mb-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-base md:text-base font-retro text-gray-400 dark:text-gray-500 hover:text-pipeline-cyan transition-colors duration-300 min-h-[44px] flex items-center"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-pipeline-blue/10 pt-8 md:pt-8">
          <p className="text-base md:text-base font-retro text-gray-400 dark:text-gray-600">
            &copy; {currentYear} Jash Vaghasiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
