import { Source_Sans_3 } from 'next/font/google'
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function AboutUs() {
  return (
    <section className='my-14 lg:mt-36 w-full flex flex-col lg:flex-row items-center justify-center bg-[#e6eef8] gap-10  mx-auto p-4 md:px-10'>
      <h2 className='text-slate-800 text-center text-3xl font-semibold mb-5 lg:hidden'>
        Acerca de Mantenipro
      </h2>
      <div className=' min-w-56 lg:-mt-28 '>
        <img src='/img-aboutUs.png' alt='about us' className='w-full h-full' />
      </div>
      <div className='max-w-screen-md'>
        <h2 className='text-black text-center text-4xl font-medium mb-8 hidden lg:block'>
          Acerca de Mantenipro
        </h2>
        <p
          className={`text-center text-lg md:mx-10 md:text-xl ${sourceSans3.className}`}
        >
          En Mantenipro, simplificamos el mantenimiento de equipos con
          tecnología eficiente, reduciendo costos y optimizando procesos. Nos
          enfocamos en soluciones fáciles de usar que eliminan la necesidad de
          largas llamadas para obtener datos, permitiéndote concentrarte en el
          crecimiento de tu negocio.
        </p>
      </div>
    </section>
  )
}
