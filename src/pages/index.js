import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

import Layout from '@/components/Layout'
import Nav from '@/components/Nav'

export default function Home () {
  return (
    <Layout title='Van Gogh Gallery'>
      <Nav />
      <main className={styles.main}>
        <div className={`${styles.presentation} flex justify-center items-center`}>
          <h1 className='shadow text-5xl font-bold text-white text-center drop-shadow-2xl lg:text-8xl'>Van Gogh <br /> Gallery</h1>
        </div>
        <div className='lg:flex lg:w-8/12 lg:m-auto lg:mt-20'>
          <article className='h-fit pt-6 px-3 max-w-3xl md:m-auto'>
            <h2 className='w-9/12 mb-4 text-4xl font-bold text-left text-gray-700 '>Vincent Willem van Gogh</h2>
            <p className='font-semibold text-gray-700 md:text-base lg:text-lg lg:max-w-2xl'>
              Vincent van Gogh fue un artista postimpresionista nacido en los Países Bajos en el año 1853.
              Conocido por su estilo distintivo de pinceladas gruesas y colores brillantes y por su influencia en la pintura
              moderna. Creó más de 2,000 obras de arte durante su corta carrera como artista, incluyendo muchos paisajes,
              retratos y naturalezas muertas. También luchó con problemas de salud mental y emocionales, lo que en ocasiones afectó
              su trabajo y lo llevó a cortarse la oreja. Hoy en día, es considerado uno de los artistas más importantes e
              influyentes de la historia del arte.
            </p>
          </article>
          <Image
            src='/vangogh.jpg'
            alt='Vincent Willem van Gogh'
            width={2500} height={1259} className='mt-6 lg:w-5/12 lg:mt-10 lg:object-cover'
          />
        </div>
        <div className='lg:flex lg:w-8/12 lg:m-auto lg:mt-20'>
          <Image
            src='/blute-fin.png'
            alt='En la pintura se ve un retrato del molino Blute-Fin en Auvers-sur-Oise, Francia.'
            width={2500} height={1259} className='mt-6 lg:w-5/12 hidden lg:mt-10 lg:block lg:object-cover'
          />
          <article className='pt-6 px-3 max-w-3xl md:m-auto'>
            <h2 className='w-9/12 mb-4 text-4xl font-bold text-left text-gray-700'>Obra</h2>
            <p className='font-semibold text-gray-700 lg:text-lg lg:max-w-2xl'>
              Conocido por su estilo distintivo y emocional, así como por su lucha personal con la salud mental y la pobreza.
              La obra de Van Gogh es muy reconocida por su uso intenso de color y pinceladas expresivas.
              Se centró en temas como la naturaleza, la vida cotidiana y las emociones humanas.
              A menudo retrataba escenas rurales y campesinos, así como autorretratos que mostraban su propio sufrimiento y
              vulnerabilidad emocional.
            </p>
          </article>
        </div>
        <div className={`${styles.galleryButton} mt-6 h-screen flex flex-col items-center justify-center lg:w-11/12 lg:m-auto lg:mt-24 `}>
          <Link href='/gallery' className='sm-shadow py-4 px-16 text-white text-3xl font-semibold bg-black bg-opacity-70 rounded-lg'>
            <p>Ver Galería</p>
          </Link>
        </div>
      </main>
    </Layout>
  )
}
