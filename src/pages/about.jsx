import styles from '@/styles/About.module.css'

import Layout from '@/components/Layout'
import Nav from '@/components/Nav'

export default function Contact () {
  return (
    <Layout title='Van Gogh Gallery'>
      <Nav />
      <main className={`${styles.about} h-screen pt-20 px-2`}>
        <div className='px-5 py-2 bg-black bg-opacity-40 rounded-sm md:max-w-5xl md:m-auto md:px-28 md:bg-opacity-50'>
          <article id='about'>
            <h2 className='shadow mb-8 text-5xl font-bold text-white text-center'>Sobre la galería</h2>
            <p className='sm-shadow mb-5 p-2 h-fit font-medium text-lg text-white'>
              Esta galería fue creada con el fin de practicar Next.js y TailwindCSS. <br /> <br />
              La galería muestra una lista de obras de Vincent van Gogh, con información sobre cada una de ellas. <br />
              Al hacer click en una obra, se puede ver una imagen más grande y se puede acceder a la información de la misma. <br />
            </p>
          </article>

          <article id='contact'>
            <h2 className='shadow mb-8 text-5xl font-bold text-white text-center'>Contacto</h2>
            <p className='sm-shadow mb-10 p-2 h-fit font-medium text-lg text-white '>
              Hecho por <a href='https://github.com/JorTohme' target='_blank' rel='noreferrer' className='underline'>jo&dev</a>.
              Si te puedo ayudar en algo, no dudes en contactarme. <br /> <br />
              Mail: jorlopeztohme@gmail.com <br />
              Github: <a href='https://github.com/JorTohme' target='_blank' rel='noreferrer' className='underline'>JorTohme</a> <br />
              LinkedIn: <a href='https://www.linkedin.com/in/jorgetohme/' target='_blank' rel='noreferrer' className='underline'>Jorge Tohme</a>
            </p>
          </article>
        </div>
      </main>
    </Layout>
  )
}
