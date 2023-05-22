# WebCrawler

### Instalação

Crie um arquivo **.env** na raiz do projeto com as seguintes variáveis de ambiente

    API_BASE_URL=(URL remota da API)
    LOCAL_STORAGE_KEY=query-list-storage

Em seguida, execute os seguintes comandos para a instalação:

```

$ npm install

```

#### Testes unitários

Para os executar os testes unitários, executar:

Executar `npm test` ou `npm run test:watch`

#### Testes end-to-end com cypress

Para os executar os testes end-to-end com o cypress, basta executar:

Executar `npm run test:e2e`

#### Gerando um Build para produção

Gere uma versão para produção utilizando os seguintes comandos:

```

$ npm run build

```
