import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Clock, CheckCircle2 } from "lucide-react";

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
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || "Portfolio Contact"
    );
    const body = encodeURIComponent(
      `Hi Jash,\n\n` +
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    window.location.href = `mailto:jashmukeshvaghasiya@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Email client opened!",
      description:
        "Your default email application should open with the message pre-filled.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "jashmukeshvaghasiya@gmail.com",
      link: "mailto:jashmukeshvaghasiya@gmail.com",
      color: "#22d3ee",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (437) 436-3011",
      link: "tel:+14374363011",
      color: "#3b82f6",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Canada",
      color: "#10b981",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jash-vaghasiya",
      link: "https://www.linkedin.com/in/jash-vaghasiya",
      color: "#0077B5",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/JashVaghasiya-DE",
      link: "https://github.com/JashVaghasiya-DE",
      color: "#6e5494",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-data-dark-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-pixel text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-xl font-retro text-gray-500 dark:text-gray-400 mb-12">
          Ready to discuss your data engineering needs? Let's connect.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact Info Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability Status */}
            <div className="bg-white/80 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 shadow-sm dark:shadow-none">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  Availability
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pipeline-green animate-pulse"></div>
                  <span className="text-sm font-retro text-pipeline-green">OPEN TO OPPORTUNITIES</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-pipeline-cyan flex-shrink-0" />
                  <div>
                    <p className="text-base font-retro text-gray-900 dark:text-white">Response Time</p>
                    <p className="text-sm font-retro text-gray-400 dark:text-gray-500">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-pipeline-green flex-shrink-0" />
                  <div>
                    <p className="text-base font-retro text-gray-900 dark:text-white">Status</p>
                    <p className="text-sm font-retro text-gray-400 dark:text-gray-500">Available for projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white/80 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 shadow-sm dark:shadow-none">
              <span className="text-base font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-4">
                Contact Methods
              </span>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const content = (
                    <div
                      className="flex items-start gap-3 p-3 rounded-lg border transition-all duration-300"
                      style={{
                        backgroundColor: method.color + "08",
                        borderColor: method.color + "20",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: method.color + "15",
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: method.color }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-retro font-medium" style={{ color: method.color }}>
                          {method.label}
                        </p>
                        <p className="text-base font-retro text-gray-500 dark:text-gray-400 break-words">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  );

                  return method.link ? (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:scale-[1.02] transition-transform duration-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 shadow-sm dark:shadow-none">
              <span className="text-base font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-4">
                Connect Online
              </span>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border hover:scale-[1.02] transition-all duration-300"
                      style={{
                        backgroundColor: social.color + "08",
                        borderColor: social.color + "20",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: social.color + "15",
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: social.color }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-retro font-medium" style={{ color: social.color }}>
                          {social.label}
                        </p>
                        <p className="text-sm font-retro text-gray-400 dark:text-gray-500 truncate">
                          {social.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-6 shadow-sm dark:shadow-none">
              <div className="flex items-center justify-between mb-5">
                <span className="text-base font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  Send Message
                </span>
                <span className="text-xs font-retro text-pipeline-cyan flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pipeline-cyan animate-pulse" />
                  FORM READY
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-base font-retro text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-lg font-retro border border-gray-300 dark:border-pipeline-blue/20 rounded-lg bg-white dark:bg-data-dark-700/40 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-pipeline-cyan/50 focus:ring-1 focus:ring-pipeline-cyan/30 transition-all duration-300"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-base font-retro text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-lg font-retro border border-gray-300 dark:border-pipeline-blue/20 rounded-lg bg-white dark:bg-data-dark-700/40 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-pipeline-cyan/50 focus:ring-1 focus:ring-pipeline-cyan/30 transition-all duration-300"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-retro text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-lg font-retro border border-gray-300 dark:border-pipeline-blue/20 rounded-lg bg-white dark:bg-data-dark-700/40 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-pipeline-cyan/50 focus:ring-1 focus:ring-pipeline-cyan/30 transition-all duration-300"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-base font-retro text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-lg font-retro border border-gray-300 dark:border-pipeline-blue/20 rounded-lg bg-white dark:bg-data-dark-700/40 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-pipeline-cyan/50 focus:ring-1 focus:ring-pipeline-cyan/30 transition-all duration-300"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-retro text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-2.5 text-lg font-retro border border-gray-300 dark:border-pipeline-blue/20 rounded-lg bg-white dark:bg-data-dark-700/40 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-pipeline-cyan/50 focus:ring-1 focus:ring-pipeline-cyan/30 resize-none transition-all duration-300"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-lg font-retro text-white dark:text-data-dark-950 bg-pipeline-cyan hover:bg-pipeline-cyan/90 px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
