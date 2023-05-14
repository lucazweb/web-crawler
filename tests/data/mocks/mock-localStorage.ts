export const mockLocalStorage = () => {
  const localStorageMock = (function () {
    let store = {}

    return {
      getItem(key: string) {
        return store[key]
      },

      setItem(key: string, value: object) {
        store[key] = value
      },

      clear() {
        store = {}
      },

      removeItem(key: string) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete store[key]
      },

      getAll() {
        return store
      },
    }
  })()

  Object.defineProperty(window, 'localStorage', { value: localStorageMock })
}
