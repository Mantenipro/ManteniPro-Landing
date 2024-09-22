export default function Hero() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-col p-4  md:p-20 bg-[url("/bghero.png")] bg-cover h-[40rem]'>
        <h1 className='text-center text-[30px] lg:text-6xl font-semibold text-[#131316]'>
          Simplifica el Mantenimiento de Tus Equipos con
          <p className='text-azulPersonal inline'> Mantenipro</p>
        </h1>
        <div className='flex justify-center items-center lg:pr-[20rem] lg:pl-[20rem] mt-10'>
          <p className='text-[18px] lg:text-2xl text-center text-azulPersonal'>
            Tus clientes escanean, tú recibes la información. Así de fácil.
            Menos tiempo en llamadas y clientes más felices.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center flex-row gap-[1rem] mt-[-15rem] md:mt-[-18rem] lg:mt-[-14rem]'>
        <div className='flex md:hidden'>
          <img
            className='z-10  w-[350px] h-[600px]'
            src='/mobilehero.png'
            alt=''
          />
        </div>
        <div className='hidden md:flex justify-end'>
          <img
            className='z-10 md:w-[715px] md:h-[417px]  lg:w-[1100px] lg:h-[609px]'
            src='/heroimg.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
