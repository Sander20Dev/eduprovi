export default function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`flex flex-col items-center space-y-4 p-6 ${className}`}>
      {children}
    </div>
  )
}
