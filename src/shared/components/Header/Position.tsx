import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

interface Props {
  isStatic?: boolean;
  scrollDirection: 'up' | 'down';
}

export const Position: React.FC<PropsWithChildren<Props>> = ({ children, isStatic, scrollDirection }) => {
  if (isStatic) {
    return children;
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
      }}
    >
      {children}
    </motion.div>
  );
};
