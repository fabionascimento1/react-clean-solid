import React, { memo } from 'react'
import Logo from '../logo'
import Styles from './login-header-styles.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
        <Logo />
        <h1>React Clean</h1>
      </header>
  )
}

export default memo(LoginHeader)
