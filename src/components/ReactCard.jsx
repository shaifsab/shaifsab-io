import { motion } from 'framer-motion';
import { FaReact, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ReactCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="react-card hoverable"
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="react-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.name}
          className="react-card__image"
        />
        <div className="react-card__overlay">
          <div className="react-card__links">
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="react-card__link hoverable"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="react-card__link hoverable"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="react-card__content">
        <h3 className="react-card__title">{project.name}</h3>
        <p className="react-card__description">{project.shortDescription}</p>
        
        <div className="react-card__tech-stack">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span key={index} className="react-card__tech">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="react-card__tech react-card__tech--more">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ReactCard;
