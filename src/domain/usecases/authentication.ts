import { AccountModel } from '../models/account-model'

interface AuthenticationParams {
  login: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
