import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal__content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal__close"
              onClick={onClose}
            >
              <FaTimes />
            </button>

            <div className="project-modal__image-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="project-modal__image"
              />
            </div>

            <div className="project-modal__details">
              <h2 className="project-modal__title">{project.name}</h2>
              <p className="project-modal__description">
                {project.fullDescription || project.shortDescription}
              </p>

              <div className="project-modal__tech-stack">
                <h3>Tech Stack:</h3>
                <div className="project-modal__tech-list">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="project-modal__tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-modal__links">
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal__link project-modal__link--demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal__link project-modal__link--github"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
