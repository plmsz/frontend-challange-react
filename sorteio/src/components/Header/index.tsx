import { Background, Container, Dropdown } from './style'
import { Logo } from './Logo'
import { useFetch } from '../../hooks/useFetch'
import { Lottery } from '../../types/lottery'
import { useCallback, useEffect, useState } from 'react'
import { Draw, DrawNumbers, DrawSelected } from '../../types/drawType'
import { api } from '../../services/api'
import { formatDate } from '../../helpers/formatDate'

//TODO: Loading screen e condicionais de renderização, talvez erro?
//TODO: styled component para title titlemobile titledesktop
//TODO: remover console.log
function Header() {
  const [drawSelected, setDrawSelected] = useState<DrawSelected>({
    loteria: 0,
    nome: '',
    id: '',
    data: '',
    numeros: [],
  })
  //fazer apenas um useFetch
  const { data, isFetching } = useFetch<Lottery[]>('loterias')
  const drawListData = useFetch<Draw[]>('loterias-concursos').data
  const [firstDraw, setFirstDraw] = useState<DrawNumbers>()

  const fetchSelectedDraw = useCallback(async (id = '0') => {
    // TODO: concurso não encontrado { "error": true,  "message": "Concurso não encontrado"}
    try {
      const response = await api.get(`concursos/${id}`)
      const { data } = response
      setFirstDraw(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    try {
      if (drawListData) {
        fetchSelectedDraw(drawListData[0].concursoId)
      }
    } catch (error) {
      console.log(error)
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
      {isFetching && <div>Loading...</div>}
      {data && (
        <Background bgColor={drawSelected.nome}>
          <Container>
            <Dropdown name='lotteryDropdown' value={drawSelected.nome} onChange={handleSelect}>
              {data.map((item) => (
                <option value={item.nome} key={item.id}>
                  {item.nome}
                </option>
              ))}
            </Dropdown>
            <Logo title={drawSelected.nome || data[0].nome} />
            {drawListData && (
              <>
                <h2 className='title titleMobile'>CONCURSO Nº {drawSelected.id || drawListData[0].concursoId}</h2>
                <div className='titleDesktop'>
                  <h2 className='title'>CONCURSO</h2>
                  <p className='subtitle'>
                    {drawSelected.id || drawListData[0].concursoId} -{' '}
                    {drawSelected.data || formatDate(firstDraw?.data || '1-01-01T11:00:16.918Z')}
                  </p>
                </div>
              </>
            )}
          </Container>
        </Background>
      )}
    </>
  )
}

export default Header
