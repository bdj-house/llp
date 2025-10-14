// Card Dimensions
export const CARD_DIMENSIONS = {
  VERTICAL: {
    WIDTH: 280,
    HEIGHT: 580,
  },
  HORIZONTAL: {
    WIDTH: 580,
    HEIGHT: 280,
  },
  MOBILE: {
    HEIGHT: 580,
    PADDING: 60,
  },
} as const;

export const BREAKPOINTS = {
  XS: 0,
  SM: 600,
  MD: 900,
  LG: 1200,
  XL: 1536,
} as const;

// Z-Index Layers
export const Z_INDEX = {
  MODAL: 1300,
  DRAWER: 1200,
  DIALOG: 1300,
  TOOLTIP: 1500,
  SNACKBAR: 1400,
} as const;

// Animation Durations (in ms)
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;
