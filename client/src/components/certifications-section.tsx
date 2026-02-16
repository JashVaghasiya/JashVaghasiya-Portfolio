import { ArrowUpRight } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      year: "2024",
      credentialId: "D944BFAA682EF208",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/jashvaghasiya-4649/credentials/d944bfaa682ef208",
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      year: "2024",
      verifyUrl:
        "https://credentials.databricks.com/247a6732-00b6-41f1-986f-9aa0deb06dad",
    },
    {
      name: "Databricks Certified Data Engineer Professional",
      issuer: "Databricks",
      year: "2024",
      verifyUrl:
        "https://credentials.databricks.com/1001cd75-9e1d-4340-ba0c-78332c105021#acc.OLoGDvFs",
    },
    {
      name: "Databricks Certified Associate Developer for Apache Spark 3.0",
      issuer: "Databricks",
      year: "2024",
      verifyUrl:
        "https://credentials.databricks.com/71959e09-697b-4f64-8a15-ae7213dbf55c#acc.Mh67Y1rl",
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-24 bg-gray-50 dark:bg-data-dark-900 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pixel text-gray-900 dark:text-white mb-4 md:mb-4 leading-tight">
          Certifications
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-retro text-gray-500 dark:text-gray-400 mb-10 md:mb-16 leading-relaxed">
          Professional certifications in data engineering and cloud technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/80 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 md:p-6 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none min-h-[48px]"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-pixelify text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-pipeline-cyan transition-colors break-words">
                    {cert.name}
                  </h3>
                  <p className="text-base sm:text-base md:text-xl font-retro text-pipeline-cyan">
                    {cert.issuer}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 md:h-5 md:w-5 text-gray-400 dark:text-gray-600 group-hover:text-pipeline-cyan flex-shrink-0 transition-colors" />
              </div>

              <div className="text-base md:text-base text-gray-400 dark:text-gray-500 font-retro mb-2">
                Issued {cert.year}
              </div>

              {cert.credentialId && (
                <div className="pt-3 md:pt-3 border-t border-gray-200 dark:border-pipeline-blue/10">
                  <p className="text-sm sm:text-base text-gray-400 dark:text-gray-600 font-retro break-all">
                    ID: {cert.credentialId}
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
