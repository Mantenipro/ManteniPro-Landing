import { Montserrat, Source_Sans_3 } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer>
      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        <div className='ml-1'>
          <img src='/mantenipro.logo.png' alt='' />
        </div>
        <div className='grid grid-cols-4 grid-rows-1 gap-4 items-center text-center mr-1'>
          <div
            className={`bg-white rounded hover:bg-azulPersonalHover cursor-pointer leading-8 tracking-wider font-medium ${montserrat.className}`}
          >
            INICIO
          </div>
          <div
            className={`bg-white rounded hover:bg-azulPersonalHover cursor-pointer leading-8 tracking-wider font-medium ${montserrat.className}`}
          >
            PLANES
          </div>
          <div
            className={`bg-white rounded hover:bg-azulPersonalHover cursor-pointer leading-8 tracking-wider font-medium ${montserrat.className}`}
          >
            BENEFICIOS
          </div>
          <div
            className={`bg-white rounded hover:bg-azulPersonalHover cursor-pointer leading-8 tracking-wider font-medium ${montserrat.className}`}
          >
            ACERCA DE
          </div>
        </div>
        <div className='flex flex-row gap-2 items-center ml-3'>
          <img src='/Facebook.svg' className='w-7 h-7' />
          <img src='/Instagram.svg' className='w-7 h-7' />
          <img src='/Twitter.svg' className='w-7 h-7' />
        </div>
        <div
          className={`flex flex-row-reverse justify-items-end items-center mr-3 ${montserrat.className}`}
        >
          Copyright ©2024
        </div>
      </div>
    </footer>
  )
}
