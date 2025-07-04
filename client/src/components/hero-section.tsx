import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, ChevronDown } from "lucide-react";
import { SiLinkedin, SiGithub, SiDatabricks, SiApachespark, SiApachekafka, SiPython, SiScala, SiApacheairflow, SiSnowflake } from "react-icons/si";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    // Download the actual resume file
    const link = document.createElement('a');
    link.href = '/attached_assets/Jash Vaghasiya-Engineer_1751669132819.docx';
    link.download = 'Jash_Vaghasiya_Resume.docx';
    link.click();
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-800/20"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Floating Technology Icons */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center"
        animate={{ y: [0, -10, 0], rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiPython className="w-8 h-8 text-blue-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center"
        animate={{ y: [0, -12, 0], rotate: [0, -360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <SiApachespark className="w-10 h-10 text-orange-400" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-20 w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center"
        animate={{ y: [0, -8, 0], rotate: [0, 360] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <SiDatabricks className="w-7 h-7 text-green-400" />
      </motion.div>
      <motion.div
        className="absolute top-32 right-20 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center"
        animate={{ y: [0, -6, 0], rotate: [0, -360] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <SiScala className="w-6 h-6 text-purple-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-32 w-18 h-18 bg-red-500/10 rounded-full flex items-center justify-center"
        animate={{ y: [0, -9, 0], rotate: [0, 360] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <SiApacheairflow className="w-8 h-8 text-red-400" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-32 w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center"
        animate={{ y: [0, -11, 0], rotate: [0, -360] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <SiSnowflake className="w-8 h-8 text-cyan-400" />
      </motion.div>

      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Jash <span className="gradient-text">Vaghasiya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-slate-300 animate-float">Data Engineer</p>
          <p className="text-lg md:text-xl mb-8 text-slate-400 max-w-2xl mx-auto">
            Building enterprise-scale data pipelines processing 850K+ daily records using Azure, Databricks, and Spark with 73% faster queries and 69% processing time reduction
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 animate-pulse-glow relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 animate-shimmer"></div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent backdrop-blur-sm"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleDownloadResume}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-300 mb-8">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>jashmukeshvaghasiya@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (437) 436-3011</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Canada</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/jash-vaghasiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white text-2xl transition-colors duration-200"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/JashVaghasiya-DE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white text-2xl transition-colors duration-200"
            >
              <SiGithub />
            </a>

          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
