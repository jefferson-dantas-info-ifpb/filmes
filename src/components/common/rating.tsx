export function Rating({ voteAvg, voteCount, size = 16 }: { voteAvg: number; voteCount: number; size?: number }) {
  const rating = Math.round(voteAvg / 2)

  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? <Star fill size={size} /> : <Star size={size} />)
  }

  return (
    <div className="inline-flex items-center">
      {stars}
      <span className="ml-2" style={{ fontSize: 0.75 * size }}>
        {voteCount}
      </span>
    </div>
  )
}

export function Star({ fill, size = 16 }: { fill?: boolean; size?: number }) {
  return fill ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={size} className="fill-amber-400">
      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={size} className="fill-amber-400">
      <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
    </svg>
  )
}
