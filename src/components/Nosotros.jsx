const Nosotros = () => {
  return (
  <>
    <div id='nosotros' className='container m-auto px-10  pt-24 lg:pt-28 bg-white '>

      <div className='text-center lg:mx-10  my-8'>
        <h1 className='font-bold text-4xl py-3'>
          Nosotros
        </h1>

        <p className='py-3 text-lg flg:mx-10'>
        ¡Únete a nuestro voluntariado y ayuda a mejorar la calidad de vida de la población iqueña! <br />
        El voluntariado de Ica Young son jóvenes entre 15 y 29 años de edad dedicados a ayudar y apoyar a la población iqueña. Nos enfocamos en tres áreas principales: social, ambiental y bienestar animal sin ningún tipo de interés. Trabajamos de manera colaborativa con la comunidad para promover un cambio positivo en nuestra región. <br />
        Si te interesa ser parte de este voluntariado, no dudes en contactarnos. ¡Juntos podemos marcar la diferencia en nuestra comunidad y en nuestro entorno!
        </p>
      </div>

      <div className='flex flex-wrap mx-5 gap-10  my-8 justify-between bg-white  lg:mx-10 '>
        <div className='flex-1 p-5 shadow-xl border-t-4 border-orange-400 rounded-2xl'>
          <h2 className='font-bold text-3xl py-3 text-center '>
            Mision
          </h2>

          <p className='text-justify text-lg'>
          Nuestra misión es mejorar la calidad de vida de la población iqueña, promoviendo la igualdad de oportunidades, el cuidado del medio ambiente y el bienestar animal. Trabajamos de manera colaborativa con la comunidad, fomentando una cultura de respeto y tolerancia, y promoviendo prácticas sostenibles y responsables.
          </p>
        </div>

        <div className='flex-1 p-5 shadow-xl border-t-4 border-orange-400 rounded-2xl'>
          <h2 className='font-bold text-3xl py-3 text-center '>
            Vision
          </h2>

          <p className='text-justify text-lg'>
          Nuestra visión es ser un referente en la promoción del desarrollo sostenible y la mejora de la calidad de vida en la región iqueña. Queremos inspirar a la comunidad a actuar de manera responsable y comprometida con el bienestar social, ambiental y animal.
          </p>
        </div>

        <div className='flex-1  p-5 shadow-xl border-t-4 border-orange-400 rounded-2xl flex-col flex'>
          <h2 className='font-bold text-3xl py-3 text-center'>
            Valores
          </h2>

          <ul className=' grow items-center justify-center flex-col flex text-lg font-normal gap-3'>
            <li>Compromiso</li>
            <li>Respeto</li>
            <li>Responsabilidad</li>
            <li>Solidaridad</li>
            <li>Transparencia</li>
          </ul>
        </div>

      </div>

    </div>
        </>
  )
}

export default Nosotros
