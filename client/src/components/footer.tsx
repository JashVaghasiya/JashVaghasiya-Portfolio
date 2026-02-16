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
    <footer className="py-16 bg-white dark:bg-data-dark-950 border-t border-gray-200 dark:border-pipeline-blue/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xl font-semibold font-pixelify text-gray-900 dark:text-white mb-1">
          Jash Vaghasiya
        </p>
        <p className="text-lg font-retro text-gray-400 dark:text-gray-500 mb-8">Data Engineer</p>

        <div className="flex justify-center flex-wrap gap-6 mb-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-base font-retro text-gray-400 dark:text-gray-500 hover:text-pipeline-cyan transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-pipeline-blue/10 pt-8">
          <p className="text-base font-retro text-gray-400 dark:text-gray-600">
            &copy; {currentYear} Jash Vaghasiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
