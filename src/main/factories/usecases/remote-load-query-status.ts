import { RemoteLoadQueryStatus } from '@/data'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

export const remoteLoadQueryStatus = (id: string) => {
  const baseUrl = `${process.env.API_BASE_URL}/crawl/${id}`
  const httpClient = new AxiosHttpClient()
  return new RemoteLoadQueryStatus(baseUrl, httpClient)
}
