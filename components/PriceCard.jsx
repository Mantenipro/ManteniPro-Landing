const clsx = require('clsx');

export default function PriceCard({ title, price, description, btnTxt, icon, featureTitle, features }) {
  return (
    <div className={
      clsx('p-5 max-w-screen-sm flex flex-col flex-1 border-2 border-[#3C5191] rounded-lg ', 
          { 'text-white bg-[#3C5191]' : title === 'Avanzado' })}>
       <h1 className='font-semibold mb-5 text-2xl'>{title}</h1>
        <p className='text-lg mb-7'>{description}</p>
        <span className='text-3xl font-semibold'>${price} MXN</span>
          <button className={
            clsx('text-[#3C5191] px-4 py-2 w-full border border-[#3C5191] mt-5 text-2xl', 
                { ' bg-[#31416D] text-slate-50' : title === 'Avanzado' })}>
            {btnTxt}
          </button>
          <p className='mt-7 font-semibold text-lg mb-5'>
            {featureTitle}</p>

          {/* iterar sobre features */}
          <div>
            <ul className='flex flex-col gap-4 my-2'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-center '>
                  <img src={`icon/${icon}`} alt="check-icon" />
                  <div className='ml-2'>
                    <strong >{feature.featureTitle || feature.title}</strong>
                    {feature.desc && <p>{feature.desc}</p>}
                    </div>
                </li>
              ))}
            </ul>
          </div>
      </div> 
  )
}
