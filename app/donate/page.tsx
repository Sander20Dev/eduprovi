import {
  IconActivity,
  IconBallpen,
  IconCalendar,
  IconDroplet,
  IconHeart,
  IconId,
  IconNumber1Small,
  IconNumber2Small,
  IconNumber3Small,
  IconNumber4Small,
  IconNumber5Small,
  IconNumber6Small,
  IconNumber7Small,
  IconRating18Plus,
  IconScaleOutline,
  IconToolsKitchen2Off,
  IconUser,
} from '@tabler/icons-react'
import Card from '../ui/card'
// import GeneralHeader from '../ui/general/general-header'

export default function DonatePage() {
  return (
    <article className='flex flex-col min-h-screen'>
      {/* <GeneralHeader bannerSrc='/images/banner-donate.jpg'>
        <h1 className='text-center font-bold text-3xl md:text-4xl text-red-600'>
          DONAR SANGRE
        </h1>
      </GeneralHeader> */}
      <section className='flex justify-center w-full py-12 md:py-24 lg:py-32 bg-white'>
        <div className='container px-4 md:px-6'>
          <h2
            className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'
            id='why-donate'>
            ¿Por qué Donar Sangre?
          </h2>
          <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
            <Card>
              <IconHeart className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>Salvar Vidas</h3>
              <p className='text-center text-gray-500'>
                Cada donación puede salvar hasta 3 vidas y hacer una diferencia
                real en tu comunidad.
              </p>
            </Card>
            <Card>
              <IconUser className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>
                Impacto Comunitario
              </h3>
              <p className='text-center text-gray-500'>
                Sé parte de una comunidad solidaria que apoya a pacientes
                necesitados en todo el país.
              </p>
            </Card>
            <Card>
              <IconCalendar className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>
                Necesidad Constante
              </h3>
              <p className='text-center text-gray-500'>
                Se necesita sangre todos los días para cirugías, tratamientos y
                emergencias.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className='flex justify-center w-full py-12 md:py-24 lg:py-32 bg-white'>
        <div className='container px-4 md:px-6'>
          <h2
            className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'
            id='how-donate'>
            ¿Cómo podemos donar?
          </h2>
          <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
            <Card>
              <IconNumber1Small className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>Presentación</h3>
              <p className='text-center text-gray-500'>
                Llenar un formulario y presentar tu DNI
              </p>
            </Card>
            <Card>
              <IconNumber2Small className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>Registro</h3>
              <p className='text-center text-gray-500'>
                Te registramos en la base de datos
              </p>
            </Card>
            <Card>
              <IconNumber3Small className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>Valoración</h3>
              <p className='text-center text-gray-500'>
                Te realizan una valoración medica
              </p>
            </Card>
            <Card>
              <IconNumber4Small className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>Muestra</h3>
              <p className='text-center text-gray-500'>
                Te toman una muestra de sangre
              </p>
            </Card>
            <Card>
              <IconNumber5Small className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>
                Paso a la Camilla
              </h3>
              <p className='text-center text-gray-500'>
                Pasas a la camilla a donar sangre
              </p>
            </Card>
            <Card>
              <IconNumber6Small className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>
                Toma la Merienda
              </h3>
              <p className='text-center text-gray-500'>
                Te tomas la merienda que te brinda el hospital
              </p>
            </Card>
            <Card>
              <IconNumber7Small className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>
                Entrega el Carnet
              </h3>
              <p className='text-center text-gray-500'>
                Te entregan tu carnet de Donante de Sangre
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className='flex justify-center w-full py-12 md:py-24 lg:py-32 bg-white'>
        <div className='container px-4 md:px-6'>
          <h2
            className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'
            id='prevention'>
            Prevención para Donar Sangre
          </h2>
          <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
            <Card>
              <IconToolsKitchen2Off className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>¿Ayunar?</h3>
              <p className='text-center text-gray-500'>
                No es recomendable estar en ayunas (es preferible que ingiera
                líquidos antes de acercarse a donar)
              </p>
            </Card>
            <Card>
              <IconId className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>
                Documento de identidad obligatorio
              </h3>
              <p className='text-center text-gray-500'>
                DNI, pasaporte, carnet extranjería
              </p>
            </Card>
            <Card>
              <IconDroplet className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>
                Tiempo entre donaciones
              </h3>
              <p className='text-center text-gray-500'>
                No haber donado sangre en un tiempo menor de 3 meses para
                hombres y menor de 4 meses para mujeres.
              </p>
            </Card>
            <Card>
              <IconScaleOutline className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>Peso y Talla</h3>
              <p className='text-center text-gray-500'>
                Peso mayor de 50Kg y talla mayor de 1.50m.{' '}
                <strong className='text-red-400 font-bold'>
                  Para donantes de plaquetas el peso debe ser mayor a 60Kg
                </strong>
              </p>
            </Card>
            <Card>
              <IconRating18Plus className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>Edad</h3>
              <p className='text-center text-gray-500'>
                Tener entre 18 años y 60 años
              </p>
            </Card>
            <Card>
              <IconActivity className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>Salud</h3>
              <p className='text-center text-gray-500'>
                Debe contar con buena salud en el momento de donar. No se puede
                donar con alguna infección u otra enfermedad grave.
              </p>
            </Card>
            <Card>
              <IconBallpen className='w-12 h-12 text-red-600' />
              <h3 className='text-xl font-bold text-center'>
                Tatuajes o piercing
              </h3>
              <p className='text-center text-gray-500'>
                Después de haberse tatuado o hecho un piercing no se puede donar
                durante 1 año.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className='flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2
                className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:mb-2'
                id='where-to-donate'>
                ¿Dónde puedo donar?
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl'>
                Si deseas donar sangre, puedes acercarte al Hospital Barranca
                Cajatambo que cuenta con un Banco de Sangre.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2
                className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:mb-2'
                id='permanence'>
                Fidelización
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl'>
                Hazte donante permanente, no te pierdas la oportunidad de salvar
                vidas.
              </p>
            </div>
            <div className='w-full max-w-sm space-y-2'>
              <form className='flex space-y-2 flex-col'>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1'
                  placeholder='Ingresa tu email'
                  type='email'
                />
                <input
                  className='flex w-full rounded-md bg-red-500 hover:bg-red-600 px-3 py-2 text-white text-sm'
                  type='submit'
                  value='Enviar'
                />
              </form>
              <p className='text-xs text-gray-500'>
                Respetamos tu privacidad. Cancela tu fidelización en cualquier
                momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
