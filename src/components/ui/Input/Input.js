'use client'
import React, {useEffect, useState} from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

const Input = ({className, error, onChange, clearErrorOnChange = true, ...inputProps}) => {
  const [textError, setTextError] = useState(error)

  const handleChange = (e) => {
    if (clearErrorOnChange) {
      setTextError(undefined)
    }
    if (onChange) {
      onChange(e)
    }
  }

  useEffect(() => {
    setTextError(error)
  }, [error])

  return (
    <div className={styles.inputContainer}>
      <input
        {...inputProps}
        onChange={handleChange}
        className={clsx(styles.input, className, textError && styles.inputError)}
      />
      {textError && <span className={styles.errorText}> {textError}</span>}
    </div>
  )
}

export default Input
