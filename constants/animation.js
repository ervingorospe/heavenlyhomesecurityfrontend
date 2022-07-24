export const buttonVariants = {
  hover: {
    scale: 1.1
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: 'spring',
      stiffness: 100
    }
  },
  initial: {
    x: -50,
    opacity: 0
  },
}

export const button2Variants = {
  hover: {
    scale: 1.1
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      type: 'spring',
      stiffness: 100
    }
  },
  initial: {
    opacity: 0,
    x: 50
  },
}

export const fromLeft = {
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100
    }
  },
  initial: {
    opacity: 0,
    x: -50
  },
}

export const fromRight = {
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100
    }
  },
  initial: {
    opacity: 0,
    x: 50
  },
}


export const opacityVariant = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 100
    }
  }
}

export const fromBottom = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100
    }
  },
  initial: {
    opacity: 0,
    y: -50
  },
}