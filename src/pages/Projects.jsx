import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import FigmaCard from '../components/FigmaCard';
import FigmaModal from '../components/FigmaModal';
import ReactCard from '../components/ReactCard';
import ReactModal from '../components/ReactModal';


const projectsData = [

  {
    name: 'sab-io',
    image: 'https://i.ibb.co.com/7xkZSHQ0/1.jpg',
    shortDescription: 'URL shortening application.',
    fullDescription: 'URL shortening service built with Node.js, Express, MongoDB, and EJS. Provides an efficient and scalable solution for generating and managing shortened URLs.',
    techStack: ['React', 'Ejs', 'Express.js', 'Node.js', 'MongoDb'],
    liveDemo: 'https://sab-io.onrender.com',
    github: 'https://github.com/shaifsab/sab-io',
  },
  {
    name: 'chatify-io',
    image: 'https://i.ibb.co.com/6722bG3V/2.jpg',
    shortDescription: 'Real-time chat application.',
    fullDescription: 'Chatify.io is a real-time chat application built with the MERN stack and Socket.io. It features user authentication, real-time messaging, and the ability to create and manage conversations by email.',
    techStack: ['React', 'Socket.io', 'Node.js', 'Nodemailer.js', 'Express.js', 'MongoDb', 'Redux', 'JWT'],
    liveDemo: 'https://chatify-io-l6q4.onrender.com',
    github: 'https://github.com/shaifsab/chatify-io',
  },

];

const figmaProjectsData = [
  {
    name: 'EbTan',
    image: 'https://i.ibb.co.com/W4TczJC7/3.jpg',
    shortDescription: 'EbTan Cosmetics',
    fullDescription: 'EbTan Cosmetics offers dermatologist-tested skincare products for men, focusing on sun protection, moisturization, and overall skin health.',
    designTools: ['Figma'],
    figmaLink: 'https://www.figma.com/design/YZpJ6hYKs5BNRZmZGOP4IO/ebtan-cosmetic?node-id=0-1&t=qKzb4G3dKeeM4raY-1',
    prototypeLink: 'https://www.figma.com/proto/YZpJ6hYKs5BNRZmZGOP4IO/ebtan-cosmetic?node-id=1-7&p=f&t=gPjEwBtr6UIrlAtJ-1&scaling=contain&content-scaling=responsive&page-id=0%3A1',
  },
];

const frontendProjectsData = [
  {
    name: 'restara-io',
    image: 'https://i.ibb.co.com/0pZdWdt9/4.jpg',
    shortDescription: 'Restara is a restaurant management and order app.',
    fullDescription: 'Restara is a modern restaurant management web app built with React.js, offering features like menu management, order tracking, and real-time updates for an enhanced user experience.',
    techStack: ['React', 'Context-api', 'React Router'],
    liveDemo: 'https://restara-io.vercel.app',
    github: 'https://github.com/shaifsab/restara-io',
  },
  {
    name: 'threadvibe-io',
    image: 'https://i.ibb.co.com/7NR4h36P/5.jpg',
    shortDescription: 'ThreadVibe - Modern E-Commerce Fashion Store.',
    fullDescription: 'threadvibe-io is a responsive web app built with React.js for creating and managing dynamic threaded conversations.',
    techStack: ['React', 'Redux Toolkit', 'Mock API', 'React Icons', 'Lottie'],
    liveDemo: 'https://threadvibe-io.vercel.app/',
    github: 'https://github.com/shaifsab/threadvibe-io',
  },
  {
    name: 'tracker-io',
    image: 'https://i.ibb.co.com/JW5mmhyB/6.jpg',
    shortDescription: 'Personal financial tracker application built with React.',
    fullDescription: 'tracker-io is a responsive web app built with React.js, Chart.js for tracking and managing activities or resources.',
    techStack: ['React', 'Chart.js', 'Context API'],
    liveDemo: 'https://tracker-io-two.vercel.app',
    github: 'https://github.com/shaifsab/tracker-io',
  },
  {
    name: 'vaccination-io',
    image: 'https://i.ibb.co.com/DgpfBP3x/7.jpg',
    shortDescription: 'Vaccination.io is a web app that simplifies vaccination appointment.',
    fullDescription: 'Vaccination.io is a responsive web platform built with React.js, enabling users to book vaccination appointments and administrators to manage slots and vaccine availability efficiently.',
    techStack: ['React', 'Tailwind'],
    liveDemo: 'https://vaccination-io.vercel.app',
    github: 'https://github.com/shaifsab/vaccination-io',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFigmaProject, setSelectedFigmaProject] = useState(null);
  const [isFigmaModalOpen, setIsFigmaModalOpen] = useState(false);
  const [selectedReactProject, setSelectedReactProject] = useState(null);
  const [isReactModalOpen, setIsReactModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const handleOpenFigmaModal = (project) => {
    setSelectedFigmaProject(project);
    setIsFigmaModalOpen(true);
  };

  const handleCloseFigmaModal = () => {
    setSelectedFigmaProject(null);
    setIsFigmaModalOpen(false);
  };

  const handleOpenReactModal = (project) => {
    setSelectedReactProject(project);
    setIsReactModalOpen(true);
  };

  const handleCloseReactModal = () => {
    setSelectedReactProject(null);
    setIsReactModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
    <motion.div 
      className="projects-container"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -50 }}
      variants={containerVariants}
    >
      <motion.h1 
        className="projects-title"
        variants={itemVariants}
      >
        Full Stack Projects
      </motion.h1>
      <motion.p 
        className="projects-subtitle"
        variants={itemVariants}
      >
        Here are some of the projects I've worked on recently.
      </motion.p>

      <motion.div className="projects-grid" variants={containerVariants}>
        {projectsData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard 
              project={project} 
              onClick={() => handleOpenModal(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Figma Projects Section */}
      <motion.div className="figma-section" variants={containerVariants}>
        <motion.h2 
          className="figma-section__title"
          variants={itemVariants}
        >
          UI/UX Designs
        </motion.h2>
        <motion.p 
          className="figma-section__subtitle"
          variants={itemVariants}
        >
          Creative designs and user interface projects created in Figma.
        </motion.p>

        <motion.div className="figma-grid" variants={containerVariants}>
          {figmaProjectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FigmaCard 
                project={project} 
                onClick={() => handleOpenFigmaModal(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Frontend Design Projects Section */}
      <motion.div className="react-section" variants={containerVariants}>
        <motion.h2 
          className="react-section__title"
          variants={itemVariants}
        >
          Frontend Design Projects
        </motion.h2>
        <motion.p 
          className="react-section__subtitle"
          variants={itemVariants}
        >
          Modern frontend applications with focus on user experience and performance.
        </motion.p>

        <motion.div className="react-grid" variants={containerVariants}>
          {frontendProjectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ReactCard 
                project={project} 
                onClick={() => handleOpenReactModal(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      
      <FigmaModal
        project={selectedFigmaProject}
        isOpen={isFigmaModalOpen}
        onClose={handleCloseFigmaModal}
      />
      
      <ReactModal
        project={selectedReactProject}
        isOpen={isReactModalOpen}
        onClose={handleCloseReactModal}
      />
    </motion.div>
  );
};

export default Projects;
