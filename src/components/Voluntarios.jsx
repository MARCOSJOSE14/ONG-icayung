import ContentV from './ContentV'

const Voluntarios = () => {
  return (
        <>
        <div id="voluntarios" className="bg-blue-200 pb-10 pt-28">
            <h1 className='font-bold text-4xl py-3 text-center  my-5 '>Voluntarios</h1>

            <div className="container mx-auto flex flex-wrap gap-14 justify-center px-5 mt-10">

                <ContentV
                nombre = {'Marcos Ramos José Luis'}
                />

            </div>
        </div>
        </>
  )
}

export default Voluntarios
