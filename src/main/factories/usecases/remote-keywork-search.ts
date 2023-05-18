import { RemoteSaveKeywordSearch } from '@/data'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

export const remoteKeyworkSearch = async (keyword: string) => {
  const url = `${process.env.API_BASE_URL}/crawl`
  const service = new RemoteSaveKeywordSearch(url, new AxiosHttpClient())
  return await service.save({ keyword })
}
