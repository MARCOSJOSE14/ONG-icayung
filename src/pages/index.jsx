import Nosotros from '@/components/Nosotros'
import Actividades from '@/components/Actividades'
import Contacto from '@/components/Contacto'
import axios from 'axios'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Voluntarios from '@/components/Voluntarios'

export default function Home ({ data }) {
  const { nosotros, actividades, imageAct, imageIni, volunt } = data

  return (
    <>
      <div className=''>
        <Header/>

        <Carousel images={imageIni} intervalTime={10000} />

        <Nosotros data={nosotros}/>

        <Actividades data={actividades} imagen ={imageAct}/>

        <Voluntarios data={volunt}/>

        <Contacto/>
      </div>
    </>
  )
}

export async function getStaticProps () {
  const { data } = await axios.get('http://localhost:3000/api/apiData')

  return {
    props: {
      data
    }
  }
}
