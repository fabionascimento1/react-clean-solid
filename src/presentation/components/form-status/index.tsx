import React, { useContext } from 'react'
import Spinner from '../spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div className={Styles.ErrorWrap}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { mainError && <span className={Styles.error}>{mainError}</span> }
    </div>
  )
}

export default FormStatus
