import Nosotros from '@/components/Nosotros'
import Actividades from '@/components/Actividades'
import Contacto from '@/components/Contacto'
import Header from '@/components/Header'
import Voluntarios from '@/components/Voluntarios'
import Carousel from '@/components/Carousel'
import { pool } from 'config/db'

export default function Home ({ data }) {
  const { nosotros, actividades, imageAct, volunt, imageIni } = data

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
  // const baseUrl = process.env.BASE_URL
  // const apiEndpoint = '/api/apiData'
  // const apiUrl = `${baseUrl}${apiEndpoint}`
  const [resp] = await pool.query('CALL Sp_Data')
  // const response = await fetch('http://localhost:3000/api/apiData')
  // const data = await response.json()

  return {
    props: {
      data: { nosotros: resp[0], actividades: resp[1], imageAct: resp[2], imageIni: resp[3], volunt: resp[4] }
    }
  }
}
