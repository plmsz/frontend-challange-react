export function formatDate(date: string): string {
  // if (!Number.isNaN(Date.parse(date))) {
  //   console.log({ date })
  //   return ''
  // }
  return new Date(date).toLocaleDateString('pt-BR')
}
