import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const WheelNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);

  const routes = ['/', '/projects', '/contact'];
  
  useEffect(() => {
    let timeout;
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;

      // Special handling for projects page
      if (location.pathname === '/projects') {
        const projectsContainer = document.querySelector('.projects-container');
        if (!projectsContainer) return;

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold
        const isAtTop = scrollTop <= 10; // 10px threshold for top

        // If scrolling down and at the bottom of the page, navigate to contact
        if (e.deltaY > 0 && isAtBottom) {
          e.preventDefault();
          isScrolling = true;
          
          // Clear any existing timeout
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          // Add a small delay to prevent accidental navigation
          scrollTimeoutRef.current = setTimeout(() => {
            navigate('/contact');
            isScrolling = false;
          }, 300);
          
          return;
        }
        
        // If scrolling up and at the top of the page, navigate to home
        if (e.deltaY < 0 && isAtTop) {
          e.preventDefault();
          isScrolling = true;
          
          // Clear any existing timeout
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          // Add a small delay to prevent accidental navigation
          scrollTimeoutRef.current = setTimeout(() => {
            navigate('/');
            isScrolling = false;
          }, 300);
          
          return;
        }
        
        // Allow normal scrolling within the projects page
        return;
      }

      const currentIndex = routes.indexOf(location.pathname);
      let nextIndex;

      if (e.deltaY > 0) {
        // Scrolling down
        nextIndex = currentIndex + 1;
      } else {
        // Scrolling up
        nextIndex = currentIndex - 1;
      }

      // Ensure we stay within bounds
      if (nextIndex >= 0 && nextIndex < routes.length) {
        isScrolling = true;
        navigate(routes[nextIndex]);
        
        // Prevent multiple rapid scrolls
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          isScrolling = false;
        }, 1000); // 1 second delay between page changes
      }
    };

    // Add wheel event listener
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location.pathname, navigate]);

  return null; // This component doesn't render anything
};

export default WheelNavigation;
