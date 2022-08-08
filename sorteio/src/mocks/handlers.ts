import { rest } from 'msw'
import { BASE_URL } from '../services/api'

export const handlers = [
  rest.get(`${BASE_URL}/loterias`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 0,
          nome: 'mega-sena',
        },
        {
          id: 1,
          nome: 'quina',
        },
        {
          id: 2,
          nome: 'lotofácil',
        },
        {
          id: 3,
          nome: 'lotomania',
        },
        {
          id: 4,
          nome: 'timemania',
        },
        {
          id: 5,
          nome: 'dia de sorte',
        },
      ]),
    )
  }),
  rest.get(`${BASE_URL}/loterias-concursos`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          loteriaId: 0,
          concursoId: '1000',
        },
        {
          loteriaId: 1,
          concursoId: '2000',
        },
        {
          loteriaId: 2,
          concursoId: '2200',
        },
        {
          loteriaId: 3,
          concursoId: '2167',
        },
        {
          loteriaId: 4,
          concursoId: '1622',
        },
        {
          loteriaId: 5,
          concursoId: '440',
        },
      ]),
    )
  }),
  rest.get(`${BASE_URL}/concursos/1000`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '1000',
          loteria: 0,
          numeros: ['31', '32', '39', '42', '43', '51'],
          data: '2022-07-31T11:00:16.918Z',
        },
      ]),
    )
  }),
  rest.get(`${BASE_URL}/concursos/2000`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '2000',
          loteria: 0,
          numeros: ['31', '32', '39', '42', '43', '51'],
          data: '2022-08-02T11:00:16.918Z',
        },
      ]),
    )
  }),
]
