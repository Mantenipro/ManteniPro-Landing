import { Source_Sans_3 } from 'next/font/google'
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function AboutUs() {
  return (
    <section className='mt-14 mb-14 w-full flex items-center justify-center bg-[#e6eef8] gap-44'>
      <div className='-mt-10'>
        <img src='/img-aboutUs.png' alt='about us' className='w-full h-full' />
      </div>

      <div className='max-w-screen-sm'>
        <h2 className='text-black text-center text-4xl font-medium mb-8'>
          Acerca de Mantenipro
        </h2>
        <p className={`text-center text-lg ${sourceSans3.className}`}>
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
