import ContentA from './ContentA'

const Actividades = () => {
  const compartir2022 = ['https://icayoung.s3.sa-east-1.amazonaws.com/actividades/compartir2022/act01img01.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/compartir2022/act01img02.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/compartir2022/act01img03.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/compartir2022/act01img04.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/compartir2022/act01img05.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/compartir2022/act01img06.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/compartir2022/act01img07.jpg']
  const premios2022 = ['https://icayoung.s3.sa-east-1.amazonaws.com/actividades/premiacion2022/img01.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/premiacion2022/img02.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/premiacion2022/img03.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/premiacion2022/img04.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/premiacion2022/img05.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/premiacion2022/img06.jpg']
  const diakid2022 = ['https://icayoung.s3.sa-east-1.amazonaws.com/actividades/diakid2022/img01.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/diakid2022/img02.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/diakid2022/img03.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/diakid2022/img04.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/diakid2022/img05.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/diakid2022/img06.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/diakid2022/img07.jpg', 'https://icayoung.s3.sa-east-1.amazonaws.com/actividades/diakid2022/img08.jpg']
  return (
  <>
    <div id='actividades' className='px-10  bg-orange-100 pt-24 pb-6  lg:pt-28 '>

      <div className='container m-auto '>
        <div className='lg:mx-10 '>

          <h1 className='font-bold text-4xl py-3 text-center  my-5 '>Actividades</h1>

          <div className='flex flex-wrap gap-10 my-8'>

            <ContentA
            imagenes= {compartir2022}
            titulo = 'Compartir 2022'
            descrip = {'Como todos los a??os, despu??s de haber culminado nuestra filantr??pica misi??n del a??o 2022, nos reunimos para degustar un compartir, y hacer el balance de nuestros logros y planificar las pr??ximas metas y proyectos del a??o 2023'}
            />

            <ContentA
            imagenes= {premios2022}
            titulo = 'Premiaci??n Voluntarios 2022'
            descrip = {'Premiamos a nuestros voluntarios que destacaron, mostraron mayor compromiso y motivaron con su energ??a a sus compa??eros. A pesar de las circunstancias dif??ciles del a??o 2022, siempre estuvimos presentes llevando ayuda, amor y mucho afecto a las personas m??s vulnerables y m??s necesitadas.??????gracias voluntarios!!!'}
            />

            <ContentA
            imagenes= {diakid2022}
            titulo = 'D??a del Ni??o'
            descrip = {'Este domingo 21 por el d??a del ni??o ???? los voluntarios salieron a entregar conos sorpresas para los ni??os que se encontraban en la calle trabajando y algunos acompa??ando a sus padres, un d??a en el que deber??an celebrarlo y dejar de trabajar, por ello los premiamos de esta manera, fue muy grato ver sus sonrisas despu??s de recibir la sorpresita????'}
            />

          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Actividades

// {/* ACTIVIDAD 1 */}
// <div className='flex flex-col rounded-xl bg-white py-10 gap-4'>
//   <div className='flex justify-center '>
//     <button className='' onClick={prevImage}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
//     </button>

//     <div className=''>
//       <Image onTouchStart={(e) => { inicio = e.touches[0].clientX }} onTouchEnd={cambiar} onTouchMove={handleTouchMove} src={carrusel[imagenes]} alt='Imagen' width={300}>
//       </Image>
//     </div>

//     <button className='' onClick={nextImage}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
//     </button>
//   </div>

//   <div className=' flex flex-col justify-end gap-3  rounded-xl mx-10  lg:px-5'>
//     <h1 className=' font-bold text-2xl text-center'>
//       Reunion Navide??a
//     </h1>
//     <p className=' text-justify'>
//       Como todos los a??os, despu??s de haber culminado nuestra filantr??pica misi??n del a??o 2022, nos reunimos para degustar un compartir, y hacer el balance de nuestros logros y planificar las pr??ximas metas y proyectos del a??o 2023
//     </p>
//   </div>
// </div>

// {/* ACTIVIDAD 2 */}
// <div className='flex flex-col rounded-xl bg-white py-10 gap-4'>
//   <div className='flex justify-center '>
//     <button className='' onClick={prevImage}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
//     </button>

//     <div className=''>
//       <Image onTouchStart={(e) => { inicio = e.touches[0].clientX }} onTouchEnd={cambiar} onTouchMove={handleTouchMove} src={carrusel[imagenes]} alt='Imagen' width={300}>
//       </Image>
//     </div>

//     <button className='' onClick={nextImage}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
//     </button>
//   </div>

//   <div className=' flex flex-col justify-end gap-3  rounded-xl mx-10  lg:px-5'>
//     <h1 className=' font-bold text-2xl text-center'>
//       Reunion Navide??a
//     </h1>
//     <p className=' text-justify'>
//       Como todos los a??os, despu??s de haber culminado nuestra filantr??pica misi??n del a??o 2022, nos reunimos para degustar un compartir, y hacer el balance de nuestros logros y planificar las pr??ximas metas y proyectos del a??o 2023
//     </p>
//   </div>
// </div>
