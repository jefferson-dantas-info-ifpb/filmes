export function getImage(url: string, size = 'w600_and_h900_bestv2') {
  return `https://image.tmdb.org/t/p/${size}${url}`
}
