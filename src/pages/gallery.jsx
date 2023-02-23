import localfont from '@next/font/local'

import Layout from '@/components/Layout'
import Nav from '@/components/Nav'

const archia = localfont({
  src: [
    {
      path: '../../public/fonts/archia-regular-webfont.woff2'
    }
  ]
})

console.log('Gallery page')
export default function Gallery () {
  return (
    <>
      <Layout>
        <Nav />
        <div className='flex flex-col items-center justify-center w-full h-screen bg-yellow-500 '>
          <h1 className='text-4xl font-bold'>Galería</h1>
          <p className={`${archia.className} text-xl`}>Próximamente...</p>
        </div>
      </Layout>
    </>
  )
}
