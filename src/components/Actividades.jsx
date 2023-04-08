const Actividades = ({ data, imagen }) => {
  return (
  <>
    <div id='actividades' className='px-10  bg-orange-100 pt-24 pb-6  lg:pt-28 '>

      <div className='container m-auto '>
        <div className='lg:mx-10 '>

          <h1 className='font-bold text-4xl py-3 text-center  my-5 '>Actividades</h1>

          <div className='flex flex-wrap gap-4 justify-center'>
            {data.map(({ actDes, actId, actTit }) => (
              <div key={actId} className='rounded-xl bg-white px-5 py-7 flex flex-col gap-2 items-center justify-center max-w-lg min-w-[15rem] flex-1'>
                <div className='flex gap-2 overflow-x-auto items-stretch h-1/3'>
                    {(imagen.filter((imagen) => imagen.actId === actId)).map(({ imgId, imgLink }) => (
                      <div key={imgId} className=' min-w-full bg-black/5 max-h-56'>
                        <img
                        src={imgLink}
                        alt='Imagen'
                        className='w-full h-full object-contain'/>
                      </div>
                    ))}
                </div>

                <div className=' flex flex-col justify-start gap-3 h-2/3 lg:px-5'>
                  <h1 className=' font-bold text-2xl text-center'>
                    {actTit}
                  </h1>
                  <p className=' text-justify'>
                    {actDes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          </div>
      </div>
    </div>
  </>
  )
}

export default Actividades
