export class BadRequestError extends Error {
  constructor() {
    super('Algo deu errado com a solicitação')
    this.name = 'BadRequestError'
  }
}
