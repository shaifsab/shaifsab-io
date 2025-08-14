import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import ThemeContext from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/projects', icon: FaProjectDiagram, label: 'Projects' },
    { path: '/contact', icon: FaEnvelope, label: 'Contact' },
  ];

  return (
    <nav className={`navbar navbar--${theme}`}>
      <div className="navbar__container">
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo">
            shaifsab
          </Link>
        </div>
        
        <div className="navbar__menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="navbar__icon-wrapper"
                >
                  <Icon className="navbar__icon" />
                  <span className="navbar__label">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="navbar__theme-toggle">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
