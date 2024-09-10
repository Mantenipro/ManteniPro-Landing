export default function PriceCard({ title, price, description, btnTxt, icon, featureTitle, features }) {
  return (
    <div className='border-4 p-5 '>
        <h1 className='text-2xl font-semibold mb-5'>{title}</h1>
        <p className='text-gray-600 mb-10'>{description}</p>
        <span className='text-3xl font-semibold'>${price} MXN</span>
          <button className='bg-white text-[#31416D] px-4 py-2 w-full border border-[#31416D] mt-5'>
            {btnTxt}
          </button>
          <p className='mt-7 font-semibold text-lg'>
            {featureTitle}</p>

          {/* iterar sobre features */}
          <div>
            <ul className='flex flex-col gap-1 my-2'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-center '>
                  <img src={icon} alt="check-icon" />
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
