import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageIndicator = () => {
  const location = useLocation();
  
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const currentIndex = routes.findIndex(route => route.path === location.pathname);

  return (
    <div className="page-indicator">
      {routes.map((route, index) => (
        <motion.div
          key={route.path}
          className={`page-indicator__dot ${index === currentIndex ? 'page-indicator__dot--active' : ''}`}
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="page-indicator__label">{route.label}</span>
        </motion.div>
      ))}
      <div className="page-indicator__instruction">
        Scroll to navigate
      </div>
    </div>
  );
};

export default PageIndicator;
