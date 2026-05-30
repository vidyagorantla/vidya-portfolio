import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full top-0 left-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.01 }}
        className="text-center relative z-10"
      >

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-tight">

          GORANTLA

          <span className="text-purple-500 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
            {" "}VIDYA
          </span>

        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Aspiring Frontend Developer",
            2000,

            "Python Developer",
            2000,

            "AI Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl text-purple-300"
        />

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-400 mt-8 leading-8 text-lg">

          Motivated Computer Science student with strong interest in
          Python Development, Front-End Development, Artificial Intelligence,
          and modern web technologies.

        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-10 flex-wrap">

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="
              bg-purple-500
              hover:bg-purple-600
              transition
              px-8
              py-4
              rounded-2xl
              flex
              items-center
              gap-3
              shadow-lg
              shadow-purple-500/20
            "
          >

            <FaDownload />

            Resume

          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vidyagorantla"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-purple-500
              hover:bg-purple-500
              transition
              px-8
              py-4
              rounded-2xl
              flex
              items-center
              gap-3
            "
          >

            <FaGithub />

            GitHub

          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vidya-gorantla-0b5938321"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-purple-500
              hover:bg-purple-500
              transition
              px-8
              py-4
              rounded-2xl
              flex
              items-center
              gap-3
            "
          >

            <FaLinkedin />

            LinkedIn

          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;