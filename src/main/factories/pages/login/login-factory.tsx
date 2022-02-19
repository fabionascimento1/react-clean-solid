import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { MakeLocalSaveAccessToken } from '@/main/factories/usecases/save-access-token/local-save-acess-token-factory'
import { makeLoginValidation } from './login-validation-factory'

export const MakeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={MakeLocalSaveAccessToken()}
    />
  )
}
