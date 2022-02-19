continuous integration - Travis CI e Converalls

- Crie uma nova branch: git checkout -b feat/ci
- Instale: npm i -g npm-check
- npx npm-check -u -s

Por onde começar um novo projeto ? Pelo DOMÍNIO da aplicação!

-- domain/usecases (interface)
-- data/usescases (class)
-- infra (Adapter)

EXEMPLO:

// domain/usecases
export interface SaveAccessToken {
save: (accessToken: string) => Promise<void>
}

// data/usecases
import { SaveAccessToken } from '@/domain/usecases/save-access-token'
import { SetStorage } from '../protocols/cache/set-storage'

export class LocalSaveAccessToken implements SaveAccessToken {
constructor (private readonly setStorage: SetStorage) {}

async save (accessToken: string): Promise<void> {
await this.setStorage.set('accessToken', accessToken)
}
}

Explicação: a classe LocalSaveAccessToken implementa Interface para chamar método save onde quem realmente faz acontencer é outra interface (abaixo) SetStorage.

export interface SetStorage {
set: (key: string, value: any) => Promise<void>
}

// infra/adapter esse design patterns responsavel por fazer integracao em duas ou mais interfaces, nesse caso SetStorage e localStorage

import { SetStorage } from '@/data/protocols/cache/set-storage'

export class LocalStorageAdapter implements SetStorage {
async set (key: string, value: string): Promise<void> {
localStorage.setItem(key, value)
}
}
