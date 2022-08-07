import { Container } from './style'
import { Logo } from './Logo'
import useFetch from '../../hooks/useFetch'
import { Lottery } from '../../types/lottery'
import { useCallback, useEffect } from 'react'
import { Draw } from '../../types/drawType'
import { api } from '../../services/api'
import { formatDate } from '../../helpers/formatDate'
import useDrawContext from './../../hooks/useDrawContext'
import Loading from '../Loading'
import { Dropdown } from './Dropdown'
import { Background } from './Background'

function Header() {
  const { drawSelected, setDrawSelected } = useDrawContext()
  const { data, isFetching, error } = useFetch<Lottery[]>('loterias')
  const {
    data: drawListData,
    isFetching: isFetchingDrawListData,
    error: errorDrawListData,
  } = useFetch<Draw[]>('loterias-concursos')

  const fetchSelectedDraw = useCallback(async (id = '0') => {
    try {
      const response = await api.get(`concursos/${id}/`)
      const { data } = response
      setDrawSelected(data)
      return data
    } catch (error) {
      console.warn(error)
    }
  }, [])

  useEffect(() => {
    try {
      if (drawListData) {
        fetchSelectedDraw(drawListData[0].concursoId)
      }
    } catch (error) {
      console.warn(error)
    }
  }, [drawListData])

  const handleSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    const lottery = data?.filter((item) => selected === item.nome)[0] || { id: 0, nome: '' }
    const draw = drawListData?.filter((item) => lottery.id === item.loteriaId)[0] || { loteriaId: 0, concursoId: '' }
    const selectedDraw = await fetchSelectedDraw(draw?.concursoId)
    const formattedDate = formatDate(selectedDraw.data)
    setDrawSelected({ ...selectedDraw, concursoId: selectedDraw.id, nome: lottery.nome, data: formattedDate })
  }

  return (
    <>
      <Background bgColor={drawSelected.nome}>
        <Container>
          {isFetching && isFetchingDrawListData && !error && !errorDrawListData && (
            <Loading color='white' image={true}>
              Carregando ...
            </Loading>
          )}
          {data && (
            <>
              <Dropdown data={data} value={drawSelected.nome} onChange={handleSelect} />
              <Logo title={drawSelected.nome || data[0].nome} />
              {drawListData && (
                <>
                  <h2 className='titleMobile'>CONCURSO Nº {drawSelected.id || drawListData[0].concursoId}</h2>
                  <div className='titleDesktop'>
                    <h2>CONCURSO</h2>
                    <p>
                      {drawSelected.id || drawListData[0].concursoId} -{' '}
                      {formatDate(drawSelected.data) || formatDate(drawSelected?.data || '')}
                    </p>
                  </div>
                </>
              )}
            </>
          )}
        </Container>
      </Background>
    </>
  )
}

export default Header
