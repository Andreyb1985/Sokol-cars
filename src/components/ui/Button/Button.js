import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

const Button = ({children, className, block, type, variant = 'primary', ...props}) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, styles[variant], block && styles.block, className)}
      type={type || 'button'}
    >
      {children}
    </button>
  )
}

export default Button
