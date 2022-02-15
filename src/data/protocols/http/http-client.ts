import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}

/* export type HttpPostParams = {
  url: string
}

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<void>
} */
