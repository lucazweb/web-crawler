export type QueryDetail = {
  id: string
  status: Status
  urls: string[]
}

export type Status = 'active' | 'done'
