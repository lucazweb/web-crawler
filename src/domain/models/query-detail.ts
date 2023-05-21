export type QueryDetail = {
  id: string
  keyword?: string
  status: Status
  urls: string[]
}

export type Status = 'active' | 'done'
