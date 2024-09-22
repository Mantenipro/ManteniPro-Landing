import { Montserrat, Source_Sans_3 } from 'next/font/google'
import clsx from 'clsx'

const montserrat = Montserrat({ subsets: ['latin'] })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function HowWork() {
  const works = [
    {
      title: 'Escanea el QR',
      description:
        'Cada equipo tiene un código QR único. Los clientes solo necesitan escanear el código para acceder instantáneamente a todos los detalles del equipo.',
      number: '1'
    },
    {
      title: 'Información Instantánea',
      description:
        'Al escanear el código QR, la información completa del equipo se envía automáticamente a tu sistema, permitiéndote visualizar todos los datos relevantes sin demora',
      number: '2'
    },
    {
      title: 'Soporte Rápido',
      description:
        'Reduce significativamente el tiempo dedicado a llamadas o chats de soporte. Con la información al alcance, tus clientes disfrutan de un servicio más rápido y efectivo, aumentando su satisfacción',
      number: '3'
    }
  ]

  return (
    <section className='py-16'>
      <div className='container mx-auto text-center'>
        <h2
          className={`text-2xl md:text-4xl font-medium mb-14 ${montserrat.className}`}
        >
          ¿Como Funciona?
        </h2>
        <div className='flex flex-wrap justify-center gap-6'>
          {works.map((work, index) => (
            <div
              key={index}
              className={clsx(
                'p-6 rounded-[30px] flex flex-col h-[533px] w-[303px] md:w-[370px] text-left shadow-lg',
                {
                  'bg-azulPersonal text-white': work.title === 'Escanea el QR',
                  'bg-azulPersonalHover text-white':
                    work.title === 'Información Instantánea',
                  'bg-azulPersonalLight text-black':
                    work.title === 'Soporte Rápido'
                }
              )}
            >
              <img
                className='hidden lg:absolute lg:top-0 lg:right-0 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-1/2 lg:h-1/2 lg:opacity-10'
                src='/line.howtowork.svg'
                alt='Decorative lines'
                aria-hidden='true'
              />
              <div className='flex items-start mb-4 relative'>
                <div className='w-20 h-20 bg-[#F2F6FC] rounded-[20px] shadow-md relative'>
                  <div className='absolute inset-0 w-full h-full bg-[#F2F6FC] opacity-30 blur-[40px]' />
                  <div
                    className={`inset-0 flex justify-center items-center text-6xl text-azulPersonal ${montserrat.className}`}
                  >
                    {work.number}
                  </div>
                </div>
              </div>

              <div className='mt-20'>
                <h3
                  className={`text-2xl font-semibold mb-2 ${montserrat.className}`}
                >
                  {work.title}
                </h3>
                <p
                  className={clsx(` ${sourceSans3.className} text-black mt-9`, {
                    'text-white': work.title !== 'Soporte Rápido'
                  })}
                >
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
