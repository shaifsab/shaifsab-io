import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaFigma, FaExternalLinkAlt } from 'react-icons/fa';

const FigmaModal = ({ project, isOpen, onClose }) => {
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
          className="figma-modal"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div 
            className="figma-modal__content"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="figma-modal__close hoverable" 
              onClick={onClose}
            >
              <FaTimes />
            </button>
            
            <div className="figma-modal__image-wrapper">
              <img 
                src={project.image} 
                alt={project.name}
                className="figma-modal__image"
              />
            </div>
            
            <div className="figma-modal__details">
              <h2 className="figma-modal__title">{project.name}</h2>
              <p className="figma-modal__description">{project.fullDescription}</p>
              
              <div className="figma-modal__tech-stack">
                <h3>Design Tools & Skills</h3>
                <div className="figma-modal__tech-list">
                  {project.designTools.map((tool, index) => (
                    <span key={index} className="figma-modal__tech">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="figma-modal__links">
                {project.figmaLink && (
                  <a 
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="figma-modal__link figma-modal__link--figma hoverable"
                  >
                    <FaFigma />
                    View in Figma
                  </a>
                )}
                {project.prototypeLink && (
                  <a 
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="figma-modal__link figma-modal__link--prototype hoverable"
                  >
                    <FaExternalLinkAlt />
                    View Prototype
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

export default FigmaModal;
