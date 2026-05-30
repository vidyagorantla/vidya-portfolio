import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillCategories = {
  Languages: ["Python", "C", "JavaScript"],

  Frontend: ["HTML", "CSS", "React"],

  Backend: ["Django", "MySQL"],

  Tools: ["GitHub", "VS Code", "Canva"],

  Other: [
    "Cyber Security",
    "Problem Solving",
    "Team Collaboration",
  ],
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-slate-900 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-5 mb-16"
        >

          <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20">

            <Code2 className="text-purple-500 w-8 h-8" />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-purple-500">
              Skills
            </h2>

            <p className="text-gray-400 mt-2">
              Technologies and tools I work with
            </p>

          </div>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {Object.entries(skillCategories).map(([category, skills]) => (

            <motion.div
              key={category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                y: -6,
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

              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">

                <h3 className="text-2xl font-bold text-purple-400">
                  {category}
                </h3>

                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>

              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-4">

                {skills.map((skill, index) => (

                  <motion.span
                    key={index}
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
                    {skill}
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

export default Skills;