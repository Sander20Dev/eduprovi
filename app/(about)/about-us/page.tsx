import Card from '@/app/ui/card'

const members = [
  {
    name: 'Nombre',
    role: 'Rol',
    image: '/images/members/Nombre.jpg',
  },
  {
    name: 'Nombre',
    role: 'Rol',
    image: '/images/members/Nombre.jpg',
  },
  {
    name: 'Nombre',
    role: 'Rol',
    image: '/images/members/Nombre.jpg',
  },
  {
    name: 'Nombre',
    role: 'Rol',
    image: '/images/members/Nombre.jpg',
  },
  {
    name: 'Nombre',
    role: 'Rol',
    image: '/images/members/Nombre.jpg',
  },
  {
    name: 'Nombre',
    role: 'Rol',
    image: '/images/members/Nombre.jpg',
  },
  {
    name: 'Nombre',
    role: 'Rol',
    image: '/images/members/Nombre.jpg',
  },
  {
    name: 'Nombre',
    role: 'Rol',
    image: '/images/members/Nombre.jpg',
  },
]

export default function AboutUsPage() {
  return (
    <article className='flex flex-col min-h-screen'>
      <section className='flex justify-center w-full py-12 md:py-24 lg:py-32 bg-white'>
        <div className='container px-4 md:px-6'>
          <h2
            className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'
            id='who-we-are'>
            ¿Quiénes somos?
          </h2>
          <p>
            Somos una asociación de promotores de salud estudiantiles de la
            institución educativa “Las Palmas Nueva Esperanza” formamos de los
            niveles de primaria y secundaria, además yacemos de la provincia de
            Barranca, somos jóvenes soñadores, somos jóvenes con las ganas de
            respirar, ver y sentir vida en nuestro país y no solo el país sino
            también el mundo.
          </p>
        </div>
      </section>
      <section className='flex justify-center w-full py-12 md:py-24 lg:py-32 bg-white'>
        <div className='container px-4 md:px-6'>
          <h2
            className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'
            id='members'>
            Integrantes
          </h2>
          {/* That's is a grid of members */}
          <div className='flex flex-row flex-wrap gap-6 lg:gap-12 justify-center'>
            {members.map((member) => (
              <Card
                key={member.name}
                className='border rounded-md border-gray-200 w-48 aspect-[3/4]'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-32 h-32 rounded-full bg-gray-200 object-cover object-center'
                />
                <h3 className='text-xl font-bold text-center'>{member.name}</h3>
                <p className='text-center text-gray-500'>{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
