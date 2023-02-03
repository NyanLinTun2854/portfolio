import React, { useState } from 'react'

const scrollPosition = () => {
    const [yPosition, setYPosition] = useState(0)
    window.addEventListener('scroll', () => {
        const pageY = window.pageYOffset
        setYPosition(pageY)
    })
  return yPosition;
}

export default scrollPosition