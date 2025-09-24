import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center items-center">
      <a
        href="https://instagram.com"
        target="_blank"
        className="text-white text-3xl transition-transform transform hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_10px_#00f]"
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com"
        target="_blank"
        className="text-white text-3xl transition-transform transform hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_10px_#00f]"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        className="text-white text-3xl transition-transform transform hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_10px_#00f]"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:tuemail@gmail.com"
        className="text-white text-3xl transition-transform transform hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_10px_#00f]"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
