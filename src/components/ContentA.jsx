import Image from 'next/image'
import { useState } from 'react'

const ContentA = ({ imagenes, titulo, descrip }) => {
  let inicio = 0
  let final = 0

  const [contador, setContador] = useState(0)

  const handleTouchMove = (e) => {
    final = e.touches[0].clientX
  }

  const nextImage = () => {
    setContador((contador + 1) % imagenes.length)
  }

  const prevImage = () => {
    setContador((contador + imagenes.length - 1) % imagenes.length)
  }

  const cambiar = () => {
    if (inicio !== final) {
      if (inicio < final) {
        prevImage()
      } else {
        nextImage()
      }
    }
  }
  return (
    <>
    <div className='flex flex-col rounded-xl bg-white py-10 gap-4 flex-1'>
<div className='flex justify-center '>
  <button className='' onClick={prevImage}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
  </button>

  <div>
    <Image onTouchStart={(e) => { inicio = e.touches[0].clientX }} onTouchEnd={cambiar} onTouchMove={handleTouchMove} src={imagenes[contador]} alt='Imagen' width={400} height={300} priority>
    </Image>
  </div>

  <button className='' onClick={nextImage}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
  </button>
</div>

<div className=' flex flex-col justify-end gap-3  rounded-xl mx-10  lg:px-5'>
  <h1 className=' font-bold text-2xl text-center'>
    {titulo}
  </h1>
  <p className=' text-justify'>
    {descrip}
  </p>
</div>
</div>
    </>
  )
}

export default ContentA
