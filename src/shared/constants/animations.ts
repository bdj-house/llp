/**
 * Animation Constants
 * Centralized animation values for consistent user experience
 */

export const ANIMATIONS = {
  /**
   * Transition durations and easing functions
   */
  transitions: {
    fast: 'all 0.15s ease-in-out',
    normal: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
    transform: 'transform 0.2s ease-in-out',
    opacity: 'opacity 0.3s ease-in-out',
  },

  /**
   * Hover effect scales
   */
  hover: {
    scale: {
      small: 1.02,
      medium: 1.05,
      large: 1.1,
    },
  },

  /**
   * Box shadow definitions for hover states
   */
  shadow: {
    light: '0 4px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 8px 16px rgba(0, 0, 0, 0.15)',
    heavy: '0 12px 24px rgba(0, 0, 0, 0.2)',
    glow: (color: string) => `0 0 12px ${color}`,
  },

  /**
   * Duration values (in milliseconds) - matches ANIMATION_DURATION in ui.ts
   */
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
} as const;

/**
 * Common animation presets for buttons
 */
export const BUTTON_ANIMATIONS = {
  /**
   * Standard button hover effect
   */
  standard: {
    transition: ANIMATIONS.transitions.normal,
    '&:hover': {
      transform: `scale(${ANIMATIONS.hover.scale.small})`,
      boxShadow: ANIMATIONS.shadow.medium,
    },
  },

  /**
   * Icon button with scale and glow effect
   */
  iconButton: (glowColor: string) => ({
    transition: ANIMATIONS.transitions.normal,
    '&:hover': {
      transform: `scale(${ANIMATIONS.hover.scale.medium})`,
      boxShadow: ANIMATIONS.shadow.glow(glowColor),
    },
  }),

  /**
   * Subtle hover for text buttons
   */
  subtle: {
    transition: ANIMATIONS.transitions.fast,
    '&:hover': {
      transform: `scale(${ANIMATIONS.hover.scale.small})`,
      opacity: 0.8,
    },
  },

  /**
   * Card hover with lift effect
   */
  cardLift: {
    transition: ANIMATIONS.transitions.normal,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: ANIMATIONS.shadow.heavy,
    },
  },
} as const;
