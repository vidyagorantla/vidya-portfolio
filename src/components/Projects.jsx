import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const projects = [
  {
    title: "NISHA — Women Safety Web Application",

    description:
      "AI-powered women safety web application developed using Python and Django with safety alert features and secure assistance concepts.",

    tech: ["Python", "Django", "AI"],
  },

  {
    title: "OWASP Vulnerability Chatbot",

    description:
      "Cyber security chatbot developed for explaining OWASP Top 10 vulnerabilities during Cyber Security with Agentic AI Hackathon.",

    tech: ["Python", "Cyber Security", "AI"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-slate-900 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-5 mb-16"
        >

          <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20">

            <Rocket className="text-purple-500 w-8 h-8" />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-purple-500">
              Projects
            </h2>

            <p className="text-gray-400 mt-2">
              Projects and technical work
            </p>

          </div>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
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

                  <Rocket className="text-purple-500 w-7 h-7" />

                </div>

                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>

              </div>

              {/* Project Title */}
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">

                {project.title}

              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-8 mb-8">

                {project.description}

              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-4">

                {project.tech.map((item, i) => (

                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      bg-gradient-to-r
                      from-purple-500/10
                      to-fuchsia-500/10
                      border border-purple-500/20
                      px-5 py-2
                      rounded-full
                      text-sm
                      text-gray-200
                      hover:bg-purple-500
                      hover:text-white
                      hover:border-purple-400
                      transition-all
                      duration-300
                      cursor-default
                    "
                  >
                    {item}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;