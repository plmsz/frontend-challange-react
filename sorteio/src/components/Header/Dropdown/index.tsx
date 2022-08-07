import { Lottery } from '../../../types/lottery'
import { DropdownStyled } from './style'

interface Props {
  data: Lottery[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Dropdown({ data, value, onChange }: Props) {
  return (
    <DropdownStyled name='lotteryDropdown' value={value} onChange={onChange}>
      {data.map((item) => (
        <option value={item.nome} key={item.id}>
          {item.nome}
        </option>
      ))}
    </DropdownStyled>
  )
}
