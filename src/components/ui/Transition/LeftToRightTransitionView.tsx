'use client'

import { createTransitionView } from './factor'

export const LeftToRightTransitionView = createTransitionView({
  from: {
    translateX: '-5em',
    opacity: 0,
  },
  to: {
    translateX: 0,
    opacity: 1,
  },
})
