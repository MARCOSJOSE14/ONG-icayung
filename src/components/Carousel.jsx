import React, { useState, useEffect } from 'react'

function Carousel ({ images, intervalTime }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState()

  function handlePrevClick () {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function handleNextClick () {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, intervalTime)

    return () => clearInterval(intervalId)
  }, [currentIndex, images.length, intervalTime])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!windowWidth) return <h1>Cargando</h1>

  return (
    <>
      <div className="relative overflow-hidden z-10">
        <div className="flex transition duration-500 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * windowWidth}px)` }}>
          {images.map(({ imgId, imgLink }) => (
              <img key={imgId} src={imgLink} alt='xdimagen' className='w-full h-auto' />
          ))}
        </div>
        <button className="carousel-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 fill-white px-3 py-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
          onClick={handlePrevClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
          </button>
        <button className="carousel-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 fill-white px-3 py-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
          onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
          </button>
      </div>
    </>
  )
}

export default Carousel
