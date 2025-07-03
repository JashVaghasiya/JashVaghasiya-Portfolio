import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, University, Code, Users, BookOpen } from "lucide-react";

export default function EducationSection() {
  const educations = [
    {
      degree: "Master of Science in Data Science",
      institution: "Stanford University",
      period: "2016 - 2018",
      description: "Specialized in machine learning, statistical modeling, and big data analytics. Thesis on real-time fraud detection systems.",
      achievements: ["GPA: 3.8/4.0", "Magna Cum Laude"],
      icon: GraduationCap,
      color: "bg-blue-600"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "UC Berkeley",
      period: "2012 - 2016",
      description: "Focus on algorithms, database systems, and software engineering. Completed internships at major tech companies.",
      achievements: ["GPA: 3.7/4.0", "Dean's List"],
      icon: University,
      color: "bg-emerald-600"
    }
  ];

  const continuousLearning = [
    {
      title: "Online Courses",
      description: "Coursera, edX, Udacity specializations in Data Engineering and Machine Learning",
      icon: Code,
      color: "text-blue-600"
    },
    {
      title: "Conference Speaker",
      description: "Regular speaker at data engineering conferences and meetups",
      icon: Users,
      color: "text-emerald-600"
    },
    {
      title: "Publications",
      description: "Published research papers on scalable data processing systems",
      icon: BookOpen,
      color: "text-purple-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Academic foundation and continuous learning in data science and engineering
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educations.map((education, index) => {
            const IconComponent = education.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className={`w-16 h-16 ${education.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <IconComponent className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-1">
                          {education.degree}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                          {education.institution}
                        </p>
                        <p className="text-slate-600 text-sm">
                          {education.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-4">
                      {education.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {education.achievements.map((achievement, achievementIndex) => (
                        <Badge 
                          key={achievementIndex}
                          className={`text-xs font-medium ${
                            education.color === "bg-blue-600" 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                          variant="secondary"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">
            Continuous Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {continuousLearning.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                    <CardContent className="p-6">
                      <IconComponent className={`text-3xl ${item.color} mb-4 mx-auto`} />
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
