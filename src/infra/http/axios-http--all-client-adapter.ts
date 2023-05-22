import axios from 'axios'
import { HttpClientArrayResolver } from '@/data/protocols/http'

export class AxiosHttpAllClientAdapter implements HttpClientArrayResolver {
  async all<T>(data: Array<T | Promise<T>>): Promise<any[]> {
    return await axios.all(data)
  }
}
