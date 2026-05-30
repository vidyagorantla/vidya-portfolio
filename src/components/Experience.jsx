import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    role: "Front-End Development Intern",

    company: "Cognifyz Technologies",

    duration: "2025",

    points: [
      "Worked on Front-End Development concepts and responsive web technologies.",
      "Improved problem-solving, communication, and teamwork skills.",
      "Gained practical exposure to modern web development workflows.",
    ],
  },

  {
    role: "Generative AI & Prompt Engineering Intern",

    company: "Blackbucks Engineers",

    duration: "2025",

    points: [
      "Completed a 120-hour internship in ChatGPT and Generative AI.",
      "Learned Prompt Engineering and modern AI concepts.",
      "Worked with practical AI tools and applications.",
    ],
  },

  {
    role: "E-Cell Secretary",

    company: "KITS AKSHAR Institute of Technology",

    duration: "2026 – 2027",

    points: [
      "Leading entrepreneurship activities and innovation initiatives.",
      "Coordinating workshops, technical events, and student engagement programs.",
      "Collaborating with E-Cell IIT Bombay and external organizations.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[450px] h-[450px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-5 mb-20"
        >

          <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20">

            <BriefcaseBusiness className="text-purple-500 w-8 h-8" />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-purple-500">
              Experience
            </h2>

            <p className="text-gray-400 mt-2">
              Internships, leadership, and professional journey
            </p>

          </div>

        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-purple-500/30 pl-10 space-y-16">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[47px] top-3 w-5 h-5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 animate-pulse"></div>

              {/* Experience Card */}
              <div
                className="
                  bg-slate-900/80
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

                  <div className="bg-purple-500/10 p-3 rounded-2xl border border-purple-500/20">

                    <BriefcaseBusiness className="text-purple-500 w-6 h-6" />

                  </div>

                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>

                </div>

                {/* Role */}
                <h3 className="text-3xl font-bold text-white mb-3">

                  {exp.role}

                </h3>

                {/* Company */}
                <p className="text-purple-400 text-lg mb-2">

                  {exp.company}

                </p>

                {/* Duration */}
                <p className="text-gray-500 mb-8">

                  {exp.duration}

                </p>

                {/* Points */}
                <ul className="space-y-4">

                  {exp.points.map((point, i) => (

                    <li
                      key={i}
                      className="text-gray-300 leading-8 flex gap-3"
                    >

                      <span className="text-purple-500 mt-1">
                        •
                      </span>

                      <span>
                        {point}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;