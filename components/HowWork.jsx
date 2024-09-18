import { Montserrat, Source_Sans_3 } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] });

export default function HowWork() {
const works = [
    {
      title: 'Escanea el QR',
      description:
        'Cada equipo tiene un código QR único. Los clientes solo necesitan escanear el código para acceder instantáneamente a todos los detalles del equipo.',
      number: '1',
      color : "bg-azulPersonal",
      text: "text-white"
    },
    {
      title: 'Información Instantánea',
      description:
        'Al escanear el código QR, la información completa del equipo se envía automáticamente a tu sistema, permitiéndote visualizar todos los datos relevantes sin demora',
      number: '2',
      color : "bg-azulPersonalHover",
      text: "text-white",
    },
    {
      title: 'Soporte Rápido',
      description:
        'Reduce significativamente el tiempo dedicado a llamadas o chats de soporte. Con la información al alcance, tus clientes disfrutan de un servicio más rápido y efectivo, aumentando su satisfacción',
      number: '3',
      color : 'bg-azulPersonalLight',
      text: "text-black",
    },
]

return (

<section className="py-16 ">
      <div className="container mx-auto text-center">
       <h2 className={`text-3xl font-medium mb-6 ${montserrat.className}`}>
  ¿Como Funciona?
</h2>
<p className={`text-lg mb-12 ${sourceSans3.className}`}>
</p>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {works.map((work, index) => (
    <div
      key={index}
      className={`${work.color} p-6 rounded-lg flex flex-col h-[533px] text-left`}
    >
      <div className="flex items-start mb-4">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <div
            style={{
              width: 79,
              height: 38,
              left: 22,
              top: 113,
              position: 'absolute',
              opacity: 0.30,
              background: '#F2F6FC',
              boxShadow: '40px 40px 40px ',
              filter: 'blur(40px)',
            }}
          />
          <div
            style={{
              width: 120,
              height: 120,
              left: 0,
              top: 0,
              position: 'absolute',
              background: '#F2F6FC',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 20,
            }}
          />
          <div
            className={`text-6xl text-azulPersonal ${montserrat.className}`}
            style={{ position: 'absolute', left: 45, top: 30, }}
          >
            {work.number}
          </div>
        </div>
      </div>
      <div> 
        <h3 className={`text-2xl font-semibold mb-2 ${montserrat.className} ${work.text} mt-48`}>
          {work.title}
        </h3>
        <p className={`text-gray-600 ${sourceSans3.className} ${work.text} mt-9`}>
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