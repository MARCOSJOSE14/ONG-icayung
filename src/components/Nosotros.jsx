const Nosotros = ({ data }) => {
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
        {data.map(({ nosDes, nosTit, nosId }) => (
        <div key={nosId} className='flex-1 p-5 shadow-xl border-t-4 border-orange-400 rounded-2xl'>
          <h2 className='font-bold text-3xl py-3 text-center '>
            {nosTit}
          </h2>

            {nosId === 3
              ? <ul className='text-center'>
              {(nosDes.split(', ')).map((des, index) => (
                <li className='my-1' key={index}>{des}</li>
              ))}
              </ul>
              : <p className='text-justify text-lg'>
              { nosDes }
              </p>
            }
        </div>
        ))}

      </div>

    </div>
        </>
  )
}

export default Nosotros
