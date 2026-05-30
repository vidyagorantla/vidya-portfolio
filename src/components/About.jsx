import { motion } from "framer-motion";
import { User } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-5 mb-16"
        >

          <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/20">

            <User className="text-purple-500 w-8 h-8" />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-purple-500">
              About Me
            </h2>

            <p className="text-gray-400 mt-2">
              Get to know more about me
            </p>

          </div>

        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.01,
            y: -5,
          }}
          className="
            bg-slate-900/80
            backdrop-blur-xl
            border border-slate-800
            rounded-3xl
            p-10
            hover:border-purple-500/40
            hover:shadow-purple-500/20
            hover:shadow-2xl
            transition-all
            duration-300
          "
        >

          <p className="text-gray-300 leading-10 text-lg">

  I am a passionate B.Tech Computer Science student from
  KITS Akshar Institute of Technology with strong interest in
  Python Development, Front-End Development, and Database Management.

  <br /><br />

  I enjoy building modern responsive web applications,
  exploring AI technologies, participating in hackathons,
  and continuously improving my technical and leadership skills.

  <br /><br />

  Skilled in Python, HTML, CSS, JavaScript, React, and MySQL,
  with hands-on experience in developing responsive user interfaces
  and working with database-driven applications.

  <br /><br />

  Currently serving as the E-Cell Secretary for 2026–2027,
  actively leading entrepreneurship initiatives, technical events,
  and innovation-focused activities.

</p>

        </motion.div>

      </div>

    </section>
  );
}

export default About;