import { motion } from "framer-motion";

const Links = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/c4zxs56vtw-hub",
      icon: "fab fa-github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/yohan-dave-0b30573b3",
      icon: "fab fa-linkedin",
    },
    {
      platform: "Gmail",
      url: "mailto:onobionoelogo69@icloud.com",
      icon: "fa-solid fa-envelope",
    },
    {
      platform: "Téléphone",
      url: "tel:690515143",
      icon: "fa-solid fa-phone",
    },
  ];

  return (
    <section className="max-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center py-12 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Me contacter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-800 text-center max-w-lg mb-8"
        >
          Développeur logiciel passionné par la conception d'applications web performantes.
          N'hésitez pas à me contacter pour toute collaboration ou opportunité professionnelle.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.5 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {socialLinks.map((link) => {
            const brandColors = {
              GitHub: "#333",
              LinkedIn: "#0077B5",
              Gmail: "#D14836",
              Téléphone: "#22c55e",
            };
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-blue-500/20 transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(59,130,246,0.15)",
                  boxShadow: "0 4px 24px #3b82f6",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <i
                  className={link.icon + " text-2xl"}
                  style={{ color: brandColors[link.platform] || "#333" }}
                ></i>
                <span className="text-sm">{link.platform}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Links;
