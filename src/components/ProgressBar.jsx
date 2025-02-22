/*
  This file defines a React component called ProgressBar.

  - It takes a `progress` prop, which determines the width of the progress bar.
  - The progress bar visually represents a percentage-based completion.
  - Styles are imported from an external CSS module (`Progressbar.module.css`).
  - The component renders a container div with a nested div that adjusts its width dynamically based on `progress`.

  Usage Example:
  <ProgressBar progress={50} /> // Renders a progress bar at 50% completion.
*/

import React from 'react'
import styles from '../styles/Progressbar.module.css'

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ProgressBar
