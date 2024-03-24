import React, {useEffect, useState} from 'react'
import styles from './Textarea.module.scss'
import clsx from 'clsx'

const Textarea = ({error, onChange, clearErrorOnChange = true, ...textareaProps}) => {
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
    <div className={styles.textareaContainer}>
      <textarea
        onChange={handleChange}
        className={clsx(styles.textarea, textError && styles.textareaError)}
        {...textareaProps}
      />
      {textError && <span className={styles.errorText}> {textError}</span>}
    </div>
  )
}

export default Textarea
