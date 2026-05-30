import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-purple-500 mb-10"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mb-14">

          Open to internships, collaborations, hackathons,
          and exciting software development opportunities.

        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Email */}
          <motion.a
            href="mailto:vidyagorantla560@gmail.com"
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="
              bg-slate-900/80
              backdrop-blur-lg
              border border-slate-800
              rounded-3xl
              p-8
              hover:border-purple-500/40
              hover:shadow-purple-500/20
              hover:shadow-2xl
              transition
              block
            "
          >

            <FaEnvelope className="text-5xl text-purple-500 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <p className="text-gray-400 break-all">
              vidyagorantla560@gmail.com
            </p>

          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+918688891250"
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="
              bg-slate-900/80
              backdrop-blur-lg
              border border-slate-800
              rounded-3xl
              p-8
              hover:border-purple-500/40
              hover:shadow-purple-500/20
              hover:shadow-2xl
              transition
              block
            "
          >

            <FaPhone className="text-5xl text-purple-500 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-3">
              Phone
            </h3>

            <p className="text-gray-400">
              +91 8688891250
            </p>

          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/vidyagorantla"
            target="_blank"
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="
              bg-slate-900/80
              backdrop-blur-lg
              border border-slate-800
              rounded-3xl
              p-8
              hover:border-purple-500/40
              hover:shadow-purple-500/20
              hover:shadow-2xl
              transition
              block
            "
          >

            <FaGithub className="text-5xl text-purple-500 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-3">
              GitHub
            </h3>

            <p className="text-gray-400 break-all">
              github.com/vidyagorantla
            </p>

          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/vidya-gorantla-0b5938321"
            target="_blank"
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="
              bg-slate-900/80
              backdrop-blur-lg
              border border-slate-800
              rounded-3xl
              p-8
              hover:border-purple-500/40
              hover:shadow-purple-500/20
              hover:shadow-2xl
              transition
              block
            "
          >

            <FaLinkedin className="text-5xl text-purple-500 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-3">
              LinkedIn
            </h3>

            <p className="text-gray-400 break-all">
              linkedin.com/in/vidya-gorantla
            </p>

          </motion.a>

        </div>

      </div>

    </section>
  );
}

export default Contact;