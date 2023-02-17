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
            descrip = {'Como todos los años, después de haber culminado nuestra filantrópica misión del año 2022, nos reunimos para degustar un compartir, y hacer el balance de nuestros logros y planificar las próximas metas y proyectos del año 2023'}
            />

            <ContentA
            imagenes= {premios2022}
            titulo = 'Premiación Voluntarios 2022'
            descrip = {'Premiamos a nuestros voluntarios que destacaron, mostraron mayor compromiso y motivaron con su energía a sus compañeros. A pesar de las circunstancias difíciles del año 2022, siempre estuvimos presentes llevando ayuda, amor y mucho afecto a las personas más vulnerables y más necesitadas.¡¡¡gracias voluntarios!!!'}
            />

            <ContentA
            imagenes= {diakid2022}
            titulo = 'Día del Niño'
            descrip = {'Este domingo 21 por el día del niño 🥳 los voluntarios salieron a entregar conos sorpresas para los niños que se encontraban en la calle trabajando y algunos acompañando a sus padres, un día en el que deberían celebrarlo y dejar de trabajar, por ello los premiamos de esta manera, fue muy grato ver sus sonrisas después de recibir la sorpresita🥰'}
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
//       Reunion Navideña
//     </h1>
//     <p className=' text-justify'>
//       Como todos los años, después de haber culminado nuestra filantrópica misión del año 2022, nos reunimos para degustar un compartir, y hacer el balance de nuestros logros y planificar las próximas metas y proyectos del año 2023
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
//       Reunion Navideña
//     </h1>
//     <p className=' text-justify'>
//       Como todos los años, después de haber culminado nuestra filantrópica misión del año 2022, nos reunimos para degustar un compartir, y hacer el balance de nuestros logros y planificar las próximas metas y proyectos del año 2023
//     </p>
//   </div>
// </div>
