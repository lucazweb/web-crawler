import { RemoteSaveKeywordSearch } from '@/data'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

export const remoteKeyworkSearch = new RemoteSaveKeywordSearch(
  `${process.env.API_BASE_URL}/crawl`,
  new AxiosHttpClient()
)
