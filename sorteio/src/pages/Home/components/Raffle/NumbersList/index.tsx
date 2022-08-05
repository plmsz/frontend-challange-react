import { List } from './style'

interface Props {
  numbers: string[]
}

export function NumbersList({ numbers }: Props) {
  return (
    <List>
      {numbers.map((item) => (
        <div key={item}>
          <li>{item}</li>
        </div>
      ))}
    </List>
  )
}
