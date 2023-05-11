export type QueryDetail = {
  id: string
  status: QueryStatus
  urls: string[]
}

export type QueryStatus = 'active' | 'done'
