import { List } from './style'

interface Props {
  numbers: string[]
}
export function NumbersList(props: Props) {
  const { numbers } = props
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
