import React, {useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Arrow from '../../icons/arraow.svg'
import ArrowShadow from '../../icons/arraow-shadow.svg'

const GenericCarousel = (props: any) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false });

    useEffect(() => {
      if (emblaApi) {
        // Embla API is ready
      }
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
  
    return (
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {props.children.map((children:any) => 
            <div className='relative flex-slider-auto mx-3'>
              {children}
            </div>
          )}
          {/* {props.slides.map((slide:any) =>(
            <div className='relative flex-slider'>
              {<>
                <img className='' src={slide.url} alt={slide.key} /> 
                {slide.button === true && <div className={`absolute w-full ${slide.buttonTop} flex items-center justify-center`}>
                <button className='absolute rounded shadow-xl w-52 h-12 bg-secondary text-white font-semibold text-lg'>{slide.buttonLabel}</button>
                </div>}
                </> }
            </div>)
          )} */}
        </div>
        {/* <button className="" onClick={scrollPrev}>
          <img src={ArrowShadow} alt="arrow" className='blur-sm absolute rotate-90 w-14 left-0 top-40'/>
          <img src={Arrow} alt="arrow" className='absolute rotate-90 w-14 left-0 top-40 opacity-70'/>
        </button>
        <button className="" onClick={scrollNext}>
          <img src={ArrowShadow} alt="arrow" className='blur-sm relative -rotate-90 w-14 right-0 top-40'/>
          <img src={Arrow} alt="arrow" className='relative -rotate-90 w-14 right-0 top-40 opacity-70'/>
        </button> */}
      </div>
    )
}

export default GenericCarousel