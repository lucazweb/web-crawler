export interface SetStorage {
  set: (key: string, value: object) => void
}

export class SetStorageData implements SetStorage {
  set(key: string, value: object) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      throw new Error(error)
    }
  }
}
