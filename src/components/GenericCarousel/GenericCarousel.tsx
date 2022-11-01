import React, {useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Arrow from '../../icons/arraow.svg'
import ArrowShadow from '../../icons/arraow-shadow.svg'

const GenericCarousel = (props: any) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

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
    
      <div className='flex items-center justify-center sm:flex-col sm:w-full'>
        <div className='hidden sm:w-1024 sm:flex sm:relative sm:items-end sm:justify-end'>
                <button className="hidden sm:block" onClick={scrollPrev}>
                  <img src={ArrowShadow} alt="arrow" className='relative rotate-90 w-10 opacity-70'/>
                </button>
                <button className="hidden sm:block" onClick={scrollNext}>
                  <img src={ArrowShadow} alt="arrow" className='relative -rotate-90 w-10 opacity-70'/>
                </button>
        </div>
        <div className="overflow-hidden w-1024" ref={emblaRef}>
          <div className="flex">
            {props.children.map((children:any) =>
              <div className='relative flex-slider-auto mx-3'>
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    )
}

export default GenericCarousel