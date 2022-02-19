import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import Header from '@/presentation/components/login-header'
import Footer from '@/presentation/components/footer'
import Input from '@/presentation/components/input'
import FormStatus from '@/presentation/components/form-status'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication, SaveAccessToken } from '@/domain/usecases'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }: Props) => {
  const [state, setState] = useState({
    isLoding: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoding || state.emailError || state.passwordError) {
        return
      }
      setState({ ...state, isLoding: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      await saveAccessToken.save(account.accessToken)
    } catch (error) {
      setState({
        ...state,
        isLoding: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Digite seu email' />
        <Input type='password' name='password' placeholder='Digite sua senha' />
        <button disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type='submit'>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
