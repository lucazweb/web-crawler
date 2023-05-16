import { RemoteUpdateQueryList } from '@/data'
import { QueryDetail } from '@/domain'
import { AxiosHttpAllClientAdapter } from '@/infra/http/axios-http-client'

export const remoteUpdateQueryList = async (
  list: Array<Partial<QueryDetail>>
) => {
  const httpClient = new AxiosHttpAllClientAdapter()
  const service = new RemoteUpdateQueryList(httpClient)
  return service.updateAll(list)
}
