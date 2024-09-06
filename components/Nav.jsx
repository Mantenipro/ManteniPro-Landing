import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex justify-between p-4 shadow-lg bg-white h-[80px]'>
      <div className='flex justify-center items-center ml-[44px] h-16 w-32'>
        <img className='' src='/mantenipro.logo.png' />
      </div>
      <div className='mr-[44px] flex justify-center items-center'>
        <button className='rounded-xl text-azulPersonal border-[1px] border-azulPersonal p-[10px_20px_10px_20px]'>
          <Link className="text-[16px] font-medium" href='/'>!Agenda tu Demo¡</Link>
        </button>
      </div>
    </nav>
  )
}
