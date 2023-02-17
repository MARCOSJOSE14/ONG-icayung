const Nosotros = () => {
  return (
  <>
    <div id='nosotros' className='container m-auto px-10  pt-24 lg:pt-28 bg-white '>

      <div className='text-center lg:mx-10  my-8'>
        <h1 className='font-bold text-4xl py-3'>
          Nosotros
        </h1>

        <p className='py-3 flg:mx-10'>
          Somos parte del movimiento Internacional de Cruz Roja y Media Luna Roja, <br />
          dedicada a auxiliar a víctimas de guerras o conflictos, personas afectadas por grandes desastres naturales, y a las víctimas <br />
          en situaciones de emergencia masiva, sea en nuestro país, y en el mundo entero.
        </p>
      </div>

      <div className='flex flex-wrap mx-5 gap-10  my-8 justify-between bg-white  lg:mx-10 '>
        <div className='flex-1 p-5 shadow-xl border-t-4 border-orange-400 rounded-2xl'>
          <h2 className='font-bold text-3xl py-3 text-center '>
            Mision
          </h2>

          <p className='text-justify'>
            Somos una institución humanitaria, auxiliar de los poderes del Estado; integrada por voluntarias y voluntarios en una red de filiales a nivel nacional. Basamos nuestra acción en los Principios y Valores del Movimiento Internacional de la Cruz Roja y de la Media Luna Roja.
          </p>
        </div>

        <div className='flex-1 p-5 shadow-xl border-t-4 border-orange-400 rounded-2xl'>
          <h2 className='font-bold text-3xl py-3 text-center '>
            Vision
          </h2>

          <p className='text-justify'>
            Al 2020 la Cruz Roja Peruana es una organización reconocida por estar conformada por voluntarias y voluntarios, líder en el fortalecimiento de las comunidades vulnerables y en la gestión del riesgo de desastres y crisis, y se gestiona de una forma eficiente, sostenible y con buenas prácticas de gobierno.
          </p>
        </div>

        <div className='flex-1  p-5 shadow-xl border-t-4 border-orange-400 rounded-2xl flex-col flex'>
          <h2 className='font-bold text-3xl py-3 text-center'>
            Valores
          </h2>

          <ul className='grow items-center justify-center flex-col flex text-xl font-normal gap-3'>
            <li>Solidaridad</li>
            <li>Amor</li>
            <li>Respeto</li>
          </ul>
        </div>

      </div>

    </div>
        </>
  )
}

export default Nosotros
