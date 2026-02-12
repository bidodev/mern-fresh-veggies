import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollIntoView = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default ScrollIntoView;
