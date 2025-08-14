import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.section 
      className="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -50 }}
    >
      <motion.h2 variants={itemVariants}>Contact Me</motion.h2>
      <motion.p variants={itemVariants}>
        If you'd like to get in touch, feel free to reach out via email or connect with me on social media!
      </motion.p>

      <motion.div className="contact__email" variants={itemVariants}>
        <a href="mailto:workwithshaif@gmail.com" className="hoverable">
          workwithshaif@gmail.com
        </a>
      </motion.div>

      <motion.div className="contact__social-icons" variants={itemVariants}>
        <motion.a 
          href="https://www.linkedin.com/in/shaifsab" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hoverable"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a 
          href="https://github.com/shaifsab" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hoverable"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="mailto:workwithshaif@gmail.com"
          className="hoverable"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

