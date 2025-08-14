import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = './assets/documents/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="home__container">
        <div className="home__content">
          <motion.div
            className="home__image-wrapper"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src="https://i.ibb.co/HDjbmdT0/image.jpg"
              alt="Profile"
              className="home__image"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          <motion.div
            className="home__text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="home__title">
              Hi, I'm <span className="home__name">Ebrahim Ahmed Shaif Miah</span>
            </h1>
            <p className="home__subtitle">
              Full Stack Developer
            </p>
            <p className="home__description">
              Building beautiful, responsive web applications using the MERN stack. Passionate about clean code, seamless user experience, and innovative solutions.
            </p>

            <motion.button
              className="home__download-btn hoverable"
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaDownload className="home__download-icon" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="home__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="home__scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
