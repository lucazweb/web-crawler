import { RemoteUpdateQueryList } from '@/data'
import { QueryDetail } from '@/domain'
import { AxiosHttpAllClientAdapter } from '@/infra/http/axios-http--all-client-adapter'
import { remoteLoadQueryStatus } from '@/main/factories'

export const remoteUpdateQueryList = async (
  list: Array<Partial<QueryDetail>>
) => {
  const httpClient = new AxiosHttpAllClientAdapter()

  const service = new RemoteUpdateQueryList(remoteLoadQueryStatus, httpClient)
  return service.updateAll(list)
}
