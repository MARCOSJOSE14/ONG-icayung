import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import logo from '../../public/logo.jpg'

const Header = () => {
  const [selectedOption, setSelectedOption] = useState('opcion1')

  const hamburguesa = useRef()
  const menu = () => {
    if (hamburguesa.current.classList.contains('hidden')) {
      hamburguesa.current.classList.add('flex', 'flex-col')
      hamburguesa.current.classList.remove('hidden')
    } else {
      hamburguesa.current.classList.remove('flex', 'flex-col')
      hamburguesa.current.classList.add('hidden')
    }
  }

  const quitar = (option) => {
    hamburguesa.current.classList.remove('flex', 'flex-col')
    hamburguesa.current.classList.add('hidden')
    setSelectedOption(option)
  }

  return (
        <>
        <div className='fixed w-full '>

          <header className='bg-orange-500'>
              <div className="container m-auto  text-white flex justify-center px-20 py-4 items-center font-medium text-lg lg:justify-between">
                  <span className='hidden lg:block'><a className='hover:font-bold' href="mailto:voluntariadoicayoung@gmail.com"> voluntariadoicayoung@gmail.com</a></span>
                  <div className='flex gap-5'>

                      <a href={'https://www.facebook.com/voluntariadoicayoung'} target='_blank' rel="noreferrer">
                      <svg className='fill-white hover:fill-black active:fill-blue-700' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                      </a>
                      <a href="https://wa.me/51956902562?text=Hola,%20quiero%20unirme%20al%20voluntariado" target='_blank' rel="noreferrer">
                      <svg className='fill-white hover:fill-black active:fill-green-600' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg>
                      </a>

                  </div>
              </div>
          </header>

          <nav className='flex flex-wrap  justify-between items-center  bg-white lg:flex-nowrap'>
              <div className='flex items-center my-3 lg:ml-10'>
                  <Link href={'/'}><Image className='' src={logo} alt='logo' priority></Image></Link>
              </div>

              <div ref={hamburguesa} className='hidden font-semibold text-base text-center w-screen order-1 lg:flex  lg:justify-end' >
                  <Link onClick={() => quitar('opcion1')} className={selectedOption === 'opcion1' ? 'bg-orange-500 py-5 px-5 hover:font-bold' : ' py-5 px-5 hover:font-bold'} href={'/'}>Inicio</Link>
                  <Link onClick={() => quitar('opcion2')} className={selectedOption === 'opcion2' ? 'bg-orange-500 py-5 px-5 hover:font-bold' : ' py-5 px-5 hover:font-bold'} href={'#nosotros'}>Nosotros</Link>
                  <Link onClick={() => quitar('opcion3')} className={selectedOption === 'opcion3' ? 'bg-orange-500 py-5 px-5 hover:font-bold' : ' py-5 px-5 hover:font-bold'} href={'#actividades'}>Actividades</Link>
                  <Link onClick={() => quitar('opcion4')} className={selectedOption === 'opcion4' ? 'bg-orange-500 py-5 px-5 hover:font-bold' : ' py-5 px-5 hover:font-bold'} href={'#voluntarios'}>Voluntarios</Link>
                  <Link onClick={() => quitar('opcion5')} className={selectedOption === 'opcion5' ? 'bg-orange-500 py-5 px-5 hover:font-bold' : ' py-5 px-5 hover:font-bold'} href={'#contacto'}>Contacto</Link>
              </div>

              <button className='block mr-5 lg:hidden' onClick={menu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                </svg>
              </button>
          </nav>
        </div>

        </>
  )
}

export default Header
