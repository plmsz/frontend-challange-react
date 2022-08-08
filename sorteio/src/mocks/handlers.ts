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
          concursoId: '3000',
        },
        {
          loteriaId: 3,
          concursoId: '4000',
        },
        {
          loteriaId: 4,
          concursoId: '5000',
        },
        {
          loteriaId: 5,
          concursoId: '6000',
        },
      ]),
    )
  }),
  rest.get(`${BASE_URL}/concursos/1000`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: '1000',
        loteria: 0,
        numeros: ['1', '2', '3', '4', '5', '6'],
        data: '2022-07-31T11:00:16.918Z',
      }),
    )
  }),
  rest.get(`${BASE_URL}/concursos/2000`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: '2000',
        loteria: 1,
        numeros: ['10', '20', '30', '40', '50'],
        data: '2022-08-01T11:00:16.918Z',
      }),
    )
  }),
  rest.get(`${BASE_URL}/concursos/3000`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: '3000',
        loteria: 2,
        numeros: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000'],
        data: '2022-08-02T11:00:16.918Z',
      }),
    )
  }),
  rest.get(`${BASE_URL}/concursos/4000`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: '4000',
        loteria: 3,
        numeros: ['1000', '2000', '3000'],
        data: '2022-08-03T11:00:16.918Z',
      }),
    )
  }),
  rest.get(`${BASE_URL}/concursos/5000`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: '5000',
        loteria: 4,
        numeros: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
        data: '2022-08-04T11:00:16.918Z',
      }),
    )
  }),
  rest.get(`${BASE_URL}/concursos/6000`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: '6000',
        loteria: 5,
        numeros: ['9', '99', '999', '9999'],
        data: '2022-08-05T11:00:16.918Z',
      }),
    )
  }),
]
