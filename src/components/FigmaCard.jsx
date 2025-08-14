import { motion } from 'framer-motion';
import { FaFigma, FaExternalLinkAlt } from 'react-icons/fa';

const FigmaCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="figma-card hoverable"
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="figma-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.name}
          className="figma-card__image"
        />
        <div className="figma-card__overlay">
          <div className="figma-card__links">
            {project.figmaLink && (
              <a 
                href={project.figmaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="figma-card__link hoverable"
                onClick={(e) => e.stopPropagation()}
              >
                <FaFigma />
              </a>
            )}
            {project.prototypeLink && (
              <a 
                href={project.prototypeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="figma-card__link hoverable"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="figma-card__content">
        <h3 className="figma-card__title">{project.name}</h3>
        <p className="figma-card__description">{project.shortDescription}</p>
        
        <div className="figma-card__tech-stack">
          {project.designTools.slice(0, 3).map((tool, index) => (
            <span key={index} className="figma-card__tech">
              {tool}
            </span>
          ))}
          {project.designTools.length > 3 && (
            <span className="figma-card__tech figma-card__tech--more">
              +{project.designTools.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FigmaCard;
