import React from 'react';
import { motion } from 'framer-motion';

const getVariants = (direction, distance) => {
  switch (direction) {
    case 'left':
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case 'down':
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.9, y: distance * 0.5 },
        visible: { opacity: 1, scale: 1, y: 0 },
      };
    case 'fade':
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    case 'up':
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
  }
};

export const ScrollReveal = ({
  children,
  direction = 'up',
  distance = 36,
  duration = 0.65,
  delay = 0,
  once = true,
  amount = 0.15,
  className = '',
  staggerChildren = null,
  ...props
}) => {
  const baseVariants = getVariants(direction, distance);

  const containerVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic bezier easing
        ...(staggerChildren ? { staggerChildren, delayChildren: delay } : {}),
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScrollRevealItem = ({
  children,
  direction = 'up',
  distance = 25,
  duration = 0.5,
  delay = 0,
  className = '',
  ...props
}) => {
  const variants = {
    hidden: direction === 'left' ? { opacity: 0, x: -distance } :
            direction === 'right' ? { opacity: 0, x: distance } :
            direction === 'scale' ? { opacity: 0, scale: 0.9 } :
            { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
