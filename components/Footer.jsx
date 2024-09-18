import { Montserrat, Source_Sans_3 } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className='p-4 bg-gray-200 shadow-inner shadow-lg'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0 '>
          <img src='/mantenipro.logo.png' alt='Logo' className='h-20' />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
          <div
            className={`bg-gray-200 text-sm rounded hover:bg-azulPersonalHover cursor-pointer leading-8 tracking-wider font-medium ${montserrat.className}`}
          >
            INICIO
          </div>
          <div
            className={`bg-gray-200 text-sm rounded hover:bg-azulPersonalHover cursor-pointer leading-8 tracking-wider font-medium ${montserrat.className}`}
          >
            PLANES
          </div>
          <div
            className={`bg-gray-200 text-sm rounded hover:bg-azulPersonalHover cursor-pointer leading-8 tracking-wider font-medium ${montserrat.className}`}
          >
            BENEFICIOS
          </div>
          <div
            className={`bg-gray-200 text-sm rounded hover:bg-azulPersonalHover cursor-pointer leading-8 tracking-wider font-medium ${montserrat.className}`}
          >
            ACERCA DE
          </div>
        </div>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <img src='/Facebook.svg' className='w-7 h-7' />
          <img src='/Instagram.svg' className='w-7 h-7' />
          <img src='/Twitter.svg' className='w-7 h-7' />
        </div>
      </div>
      <div
        className={`text-center mt-4 ${montserrat.className} leading-8 tracking-wider font-medium`}
      >
        Copyright ©2024
      </div>
    </footer>
  )
}
