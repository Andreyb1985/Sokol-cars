import React, {useState} from 'react'
import ReactPhoneInput, {CountryData} from 'react-phone-input-2'

import clsx from 'clsx'
import {get} from 'lodash'

import ua from './ua.json'
import 'react-phone-input-2/lib/style.css'
import styles from './PhoneInput.module.scss'

const PhoneInput = ({
  value,
  onChange,
  error,
  placeholder,
  readOnly,
  disabled,
  inputProps,
}) => {
  const [focused, setFocused] = useState(false)
  const [countryData, setCountryData] = useState({})
  const format = get(countryData, 'format', '()')
  const dialCode = get(countryData, 'dialCode', '')
  const showError = (!disabled || readOnly) && error

  return (
    <div className={styles.wrapper}>
      <ReactPhoneInput
        disableDropdown={disabled || readOnly}
        disabled={disabled || readOnly}
        localization={ua}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        country="ua"
        value={value}
        onChange={(value, data) => {
          onChange(value)
          if (data?.dialCode !== dialCode) {
            setCountryData(data)
          }
        }}
        {...(inputProps && {inputProps})}
        inputClass={clsx(
          styles.inputClass,
          styles.formControl,
          error && styles.inputError,
          (value === dialCode || !value) && styles.greyColored,
        )}
        containerClass={clsx(styles.containerClass, error && styles.errorDropdown, focused && styles.focused)}
        onMount={(value, data) => setCountryData(data)}
      />
      {showError && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default PhoneInput
