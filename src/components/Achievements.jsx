import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "2nd Prize — Cyber Security with Agentic AI Hackathon",

    description:
      "Secured 2nd Prize in a Cyber Security Hackathon focused on Agentic AI concepts and innovative security solutions.",
  },

  {
    title: "2nd Place — Python with Django Ideathon & Hackathon",

    description:
      "Achieved 2nd Place for developing innovative project ideas using Python and Django technologies.",
  },

  {
    title: "Finalist — LNIT Hacktriad 2.0",

    description:
      "Selected as Finalist in LNIT Hacktriad 2.0 for technical problem-solving and innovation.",
  },

  {
    title: "Eureka Idea Pitching Competition",

    description:
      "Participated in entrepreneurship and idea pitching competition focused on innovation and startup concepts.",
  },

  {
    title: "Entrepreneurship Bootcamp — E-Cell IIT Bombay",

    description:
      "Participated in entrepreneurship and startup learning sessions conducted by E-Cell IIT Bombay.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-5 mb-20"
        >

          <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20">

            <Trophy className="text-purple-500 w-8 h-8" />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-purple-500">
              Achievements
            </h2>

            <p className="text-gray-400 mt-2">
              Competitions, hackathons, and accomplishments
            </p>

          </div>

        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-purple-500/30 pl-10 space-y-16">

          {achievements.map((achievement, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[47px] top-3 w-5 h-5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 animate-pulse"></div>

              {/* Achievement Card */}
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

                    <Trophy className="text-purple-500 w-6 h-6" />

                  </div>

                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-5 leading-tight">

                  {achievement.title}

                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-8">

                  {achievement.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;