import Image from 'next/image'

const Voluntarios = ({ data }) => {
  return (
        <>
        <div id="voluntarios" className="bg-blue-200 pb-10 pt-28">
          <h1 className='font-bold text-4xl py-3 text-center  my-5 '>Voluntarios</h1>

            <div className="container mx-auto flex flex-wrap gap-14 justify-center px-5 mt-10">
              {
                data.map(({ volApe, volCargo, volId, volImg, volNom }) => (
                  <div key={volId} className='flex flex-col justify-center items-center'>
                  <Image className='rounded-full w-auto' src={volImg} width={200} height={200} alt={'voluntario'} priority/>
                  <h1 className='text-xl font-semibold'>{volNom} {volApe}</h1>
                  <h1 className='text-xl font-semibold'>{volCargo}</h1>
                  </div>
                ))
              }

            </div>
        </div>
        </>
  )
}

export default Voluntarios
