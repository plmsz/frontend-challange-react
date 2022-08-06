export type Draw = {
  loteriaId: number
  concursoId: string
}

export type DrawNumbers = {
  id: string
  loteria: number
  numeros: string[]
  data: string
}

export interface DrawSelected extends DrawNumbers {
  nome: string
}
