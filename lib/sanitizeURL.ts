export default function sanitizeURL(url: string) {
  return url.replaceAll(' ', '-').replaceAll(',', '').toLocaleLowerCase()
}
