import { IGrupoEmpresa } from './IGrupoEmpresa'
export interface IAdministrator {
  grupo: IGrupoEmpresa,
  usuario: string,
  email: string
}
