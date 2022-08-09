export function formatDate(date: string): string {
  if (date) {
    return new Date(date).toLocaleDateString('pt-BR')
  }
  return ''
}
