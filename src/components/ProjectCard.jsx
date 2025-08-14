import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="project-card hoverable"
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      layout
    >
      <div className="project-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.name}
          className="project-card__image"
        />
        <div className="project-card__overlay">
          <div className="project-card__links">
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.shortDescription}</p>
        
        <div className="project-card__tech-stack">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span key={index} className="project-card__tech">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="project-card__tech project-card__tech--more">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
