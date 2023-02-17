import Header from '@/components/Header'
import Image from 'next/image'
import portada from '../../public/portada.jpg'
import Nosotros from '@/components/Nosotros'
import Actividades from '@/components/Actividades'
import Voluntarios from '@/components/Voluntarios'
import Contacto from '@/components/Contacto'
import Head from 'next/head'

export default function Home () {
  return (

    <>
      <Head>
        <title>Ica Young</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=''>
        <Header/>

        <div className=' flex justify-center pt-28 -mb-24 lg:pt-24 lg:mb-0'>
        <Image src={portada} alt='portada' priority></Image>
        </div>

        <Nosotros/>

        <Actividades/>

        <Voluntarios/>

        <Contacto/>
      </div>
    </>
  )
}
