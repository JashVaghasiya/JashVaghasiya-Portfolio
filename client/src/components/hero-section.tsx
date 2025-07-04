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
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSANCjAgUgovRjIgDQo+PgovRm9udE5hbWUgL0FyaWFsCi9TdWJ0eXBlIC9UeXBlMQo+PgovUHJvY1NldCBbL1BERiAvVGV4dF0KPj4KL0NvbnRlbnRzIDQgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSA3MiBUZgooSGVsbG8gV29ybGQhKSBUagpFVApzdHJlYW0KZW5kb2JqCnhyZWYKMCA1CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDU4IDAwMDAwIG4gCjAwMDAwMDAxMTUgMDAwMDAgbiAKMDAwMDAwMDM5MiAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDUKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ4NQolJUVPRgo=';
    link.download = 'Jash_Vaghasiya_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-800/20"></div>
      
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
            Jash <span className="text-blue-400">Vaghasiya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-slate-300">Data Engineer</p>
          <p className="text-lg md:text-xl mb-8 text-slate-400 max-w-2xl mx-auto">
            Building enterprise-scale data pipelines processing 850K+ daily records using Azure, Databricks, and Spark with 73% faster queries and 69% processing time reduction
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
            >
              View Projects
            </Button>
            <Button
              onClick={handleDownloadResume}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
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
              href="https://github.com/JashVaghasiya"
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
