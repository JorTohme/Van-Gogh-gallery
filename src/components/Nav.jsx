import Image from 'next/image'
import Link from 'next/link'

export default function Nav () {
  const deployMenu = () => {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('hidden')
  }

  function handleMenu () {
    deployMenu()
  }

  return (
    <nav className='w-full px-3 py-2 fixed z-10 bg-black bg-opacity-70 text-white md:p-4'>
      <div className='flex flex-col md:flex-row md:max-w-6xl md:m-auto md:justify-between'>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-bold'>Van Gogh</p>
          <button onClick={handleMenu} className='md:hidden'>
            <Image src='/menu.svg' alt='Menu' width={30} height={30} />
          </button>
        </div>
        <ul className='menu sm-shadow hidden md:flex flex-row gap-5 font-semibold items-center'>
          <li className='m-auto p-2 w-20 text-center cursor-pointer hover:bg-blue-800 hover:bg-opacity-50 hover:rounded'>
            <Link href='/'>Inicio</Link>
          </li>
          <li className='m-auto p-2 w-20 text-center cursor-pointer hover:bg-blue-800 hover:bg-opacity-50 hover:rounded'>
            <Link href='/gallery'>Galería</Link>
          </li>
          <li className='m-auto p-2 w-20 text-center cursor-pointer hover:bg-blue-800 hover:bg-opacity-50 hover:rounded'>
            <Link href='/about#about'>About</Link>
          </li>
          <li className='m-auto p-2 w-20 text-center cursor-pointer hover:bg-blue-800 hover:bg-opacity-50 hover:rounded'>
            <Link href='/about#contact'>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
