export default function AboutProjectPage() {
  return (
    <article className='flex flex-col min-h-screen'>
      <section className='flex justify-center w-full py-12 md:py-24 lg:py-32 bg-white'>
        <div className='container px-4 md:px-6'>
          <h2
            className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'
            id='what-we-are-looking-for'>
            ¿Qué busca el proyecto?
          </h2>
          <p>
            Nuestro proyecto busca informar y motivar a más personas a donar
            sangre de manera voluntaria y altruista ya que queremos construir a
            través de nuestras palabras, ya que en cada palabra que hablamos y
            concientizamos estamos consiguiendo un donante más que salva una
            vida... Ya que el donar sangre, donas vida, además de un acto de
            amor que puede marcar la diferencia.
          </p>
        </div>
      </section>
    </article>
  )
}
