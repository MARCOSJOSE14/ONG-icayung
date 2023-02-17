import Image from 'next/image'
import marcos from '../../public/marcos.jpg'

const ContentV = ({ nombre }) => {
  return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <Image className='rounded-full w-auto' src={marcos} width={200} alt={'voluntario'} priority/>
                <h1 className='text-xl font-semibold'>{nombre}</h1>
            </div>
        </>
  )
}

export default ContentV
