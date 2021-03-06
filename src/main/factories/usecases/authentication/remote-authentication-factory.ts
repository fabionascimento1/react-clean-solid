import { RemoteAuthentication } from '@/data/usecases/remote-authentication'
import { Authentication } from '@/domain/usecases/authentication'
import { MakeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), MakeAxiosHttpClient())
}
