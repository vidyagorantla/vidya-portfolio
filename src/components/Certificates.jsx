import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certificates = [
  {
    title: "Front-End Development Internship",
    organization: "Cognifyz Technologies",
    file: "/certificates/cognifyz.jpg",
  },

  {
    title: "Generative AI & Prompt Engineering Internship",
    organization: "Blackbuck Engineers",
    file: "/certificates/blackbuck.jpeg",
  },

  {
    title: "What Is Generative AI",
    organization: "LinkedIn Learning",
    file: "/certificates/linkedin-ai.jpeg",
  },

  {
    title: "Entrepreneurship Bootcamp",
    organization: "E-Cell IIT Bombay",
    file: "/certificates/ecell-iitb.jpeg",
  },

  {
    title: "Eureka Idea Pitching Competition",
    organization: "Innovation & Entrepreneurship Event",
    file: "/certificates/eureka.png",
  },

  {
    title: "LNIT Hacktriad 2.0 Finalist",
    organization: "LNIT",
    file: "/certificates/lnit.jpeg",
  },

  {
    title: "Cyber Security with Agentic AI Hackathon",
    organization: "2nd Prize Winner",
    file: "/certificates/cybersecurity-hackathon.jpeg",
  },

  {
    title: "Python with Django Ideathon & Hackathon",
    organization: "2nd Place Winner",
    file: "/certificates/django-hackathon.jpeg",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="py-28 px-6 bg-slate-900 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-5 mb-16"
        >

          <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20">

            <BadgeCheck className="text-purple-500 w-8 h-8" />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-purple-500">
              Certifications
            </h2>

            <p className="text-gray-400 mt-2">
              Verified certifications and achievements
            </p>

          </div>

        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (

            <motion.a
              key={index}
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="
                block
                bg-slate-950/80
                backdrop-blur-xl
                border border-slate-800
                rounded-3xl
                p-8
                hover:border-purple-500/40
                hover:shadow-purple-500/20
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              {/* Top Row */}
              <div className="flex items-center justify-between mb-6">

                <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20">

                  <BadgeCheck className="text-purple-500 w-7 h-7" />

                </div>

                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>

              </div>

              {/* Certificate Title */}
              <h3 className="text-2xl font-bold text-white leading-tight mb-5">

                {certificate.title}

              </h3>

              {/* Organization */}
              <p className="text-purple-400 mb-8">

                {certificate.organization}

              </p>

              {/* Button */}
              <div
                className="
                  inline-block
                  bg-purple-500/10
                  border border-purple-500/20
                  px-5 py-2
                  rounded-full
                  text-sm
                  text-gray-300
                "
              >
                Click to View Certificate
              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;