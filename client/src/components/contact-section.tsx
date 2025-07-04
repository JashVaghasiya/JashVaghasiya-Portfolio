import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiLinkedin, SiGithub, SiX, SiKaggle } from "react-icons/si";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Jash,\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:jashmukeshvaghasiya@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened!",
      description: "Your default email application should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jashmukeshvaghasiya@gmail.com",
      color: "bg-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (437) 436-3011",
      color: "bg-emerald-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Canada",
      color: "bg-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/jash-vaghasiya",
      color: "hover:bg-blue-600"
    },
    {
      icon: SiGithub,
      href: "https://github.com/JashVaghasiya",
      color: "hover:bg-slate-900"
    },
    {
      icon: SiKaggle,
      href: "https://kaggle.com/jashvaghasiya",
      color: "hover:bg-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to discuss your data engineering needs? Let's connect and explore opportunities to work together.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-slate-700 ${social.color} rounded-lg flex items-center justify-center transition-colors duration-200`}
                    >
                      <IconComponent className="text-white h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-slate-600 border-slate-500 text-white placeholder-slate-400"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-slate-600 border-slate-500 text-white placeholder-slate-400"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-300">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-600 border-slate-500 text-white placeholder-slate-400"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-slate-600 border-slate-500 text-white placeholder-slate-400"
                      placeholder="Project Discussion"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-slate-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-slate-600 border-slate-500 text-white placeholder-slate-400 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
