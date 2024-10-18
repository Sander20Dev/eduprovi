export default function GeneralHeader({
  bannerSrc,
  children,
}: {
  bannerSrc: string
  children: React.ReactNode
}) {
  return (
    <header
      className='flex h-[calc(100vh-64px)] bg-red-600 bg-cover bg-center bg-no-repeat p-8'
      style={{ backgroundImage: `url(${bannerSrc})` }}>
      <div className='flex justify-center items-center w-full sm:w-72 h-full bg-white bg-opacity-75 sm:bg-opacity-100 backdrop-blur-sm rounded-md sm:backdrop-blur-none'>
        {children}
      </div>
    </header>
  )
}
