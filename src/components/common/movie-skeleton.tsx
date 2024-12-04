export function MovieSkeleton() {
  return (
    <div>
      <div className="rounded-md aspect-[2/3] w-full animate-pulse bg-slate-600" />
      <div className="bg-slate-600 rounded animate-pulse mx-auto mt-4 h-7 w-36" />
      <div className="bg-slate-600 rounded animate-pulse mx-auto mt-0.5 h-4 w-10" />
      <div className="bg-slate-600 rounded animate-pulse mx-auto mt-2 h-6 w-28" />
    </div>
  )
}
