import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ReactModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="react-modal"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="react-modal__content"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="react-modal__close hoverable"
              onClick={onClose}
            >
              <FaTimes />
            </button>

            <div className="react-modal__image-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="react-modal__image"
              />
            </div>

            <div className="react-modal__details">
              <h2 className="react-modal__title">{project.name}</h2>
              <p className="react-modal__description">{project.fullDescription}</p>

              <div className="react-modal__tech-stack">
                <h3>Development Tools & Skills</h3>
                <div className="react-modal__tech-list">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="react-modal__tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="react-modal__links">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="react-modal__link react-modal__link--live hoverable"
                  >
                    <FaExternalLinkAlt />
                    View Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="react-modal__link react-modal__link--github hoverable"
                  >
                    <FaGithub />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReactModal;

