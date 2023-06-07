import localfont from '@next/font/local'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Nav from '@/components/Nav'

const archia = localfont({
  src: [
    {
      path: '../../public/fonts/archia-regular-webfont.woff2'
    }
  ]
})

export default function Gallery () {
  return (
    <Layout title='Gallery'>
      <Nav />
      <main className='pt-20 flex flex-col items-center w-full min-h-screen bg-yellow-500 '>
        <h1 className='mb-10 text-6xl font-bold'>GALERÍA</h1>

        {/* <div className='flex'>
          <div className='hvw flex flex-col items-end '>
            <div className={`${archia.className} text-3xl font-bold text-left `}> 1800 </div>
            <div className='w-1/2 h-2 mb-2 bg-black bg-opacity-90 rounded-l-full' />
            <div className='w-10/12 md:w-1/2 mr-2 mb-10'>
              <Image src='/paintings/Almendro-en-flor.webp' alt='' width={500} height={500} className='rounded-md' />
              <p className={`${archia.className} w-full text-xl font-bold text-center`}>Cerezo en flor</p>
            </div>

            <div className={`${archia.className} text-3xl font-bold text-left w-1/2`}> 1802 </div>
            <div className='w-1/2 h-2 mb-2 bg-black bg-opacity-90 rounded-l-full' />
            <div className='w-10/12 md:w-1/2 mr-2 mb-10'>
              <Image src='/paintings/Paisaje-con-nieve.webp' alt='' width={500} height={500} className='rounded-md' />
              <p className={`${archia.className} w-full text-lg font-bold text-center`}>Paisaje con nieve</p>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-3 h-screen bg-black bg-opacity-80 rounded-t-full z-0 ' />
            <div className='w-3 h-screen bg-black bg-opacity-80 rounded-b-full z-0' />
          </div>

          <div className='hvw flex flex-col items-start'>
            <div className={`${archia.className} text-3xl font-bold text-left w-1/2 mt-20`}> 1801 </div>
            <div className='w-1/2 h-2 mb-2 bg-black bg-opacity-90 rounded-r-full' />
            <div className='w-10/12 md:w-1/2 w-1/2 ml-2'>
              <Image src='/paintings/Los-Girasoles.webp' alt='' width={500} height={500} className='rounded-md' />
              <p className={`${archia.className} w-full text-xl font-bold text-center`}>Los girasoles</p>
            </div>

          </div>
        </div> */}

        <div className='mb-5'>
          <p className={`${archia.className} text-3xl font-bold w-1/2 text-center`}>1800</p>

          <div className='m-2 mt-0'>
            <div className='w-full h-2 bg-black mb-1 -mt-1' />
            <Image src='/paintings/Almendro-en-flor.webp' alt='' width={1000} height={1000} className='rounded-md' />
          </div>
          <p className={`${archia.className} text-xl text-center`}>Almendro en flor </p>
        </div>

        <div className='mb-5'>
          <p className={`${archia.className} text-3xl font-bold w-1/2 text-center`}>1800</p>
          <div className='m-2 mt-0'>
            <Image src='/paintings/Los-Girasoles.webp' alt='' width={1000} height={1000} className='rounded-md' />
          </div>
          <p className={`${archia.className} text-xl text-center`}>Los girasoles</p>
        </div>

        <div className='mb-5'>
          <p className={`${archia.className} text-3xl font-bold w-1/2 text-center`}>1800</p>
          <div className='m-2 mt-0'>
            <Image src='/paintings/Terraza-de-cafe-por-la-noche.webp' alt='' width={1000} height={1000} className='rounded-md' />
          </div>
          <p className={`${archia.className} text-xl text-center`}>Terraza de café por la noche</p>
        </div>
      </main>
    </Layout>
  )
}
