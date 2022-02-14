import React from 'react'
import Spinner from '../spinner'
import Styles from './form-status-styles.scss'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.ErrorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Error</span>
    </div>
  )
}

export default FormStatus
