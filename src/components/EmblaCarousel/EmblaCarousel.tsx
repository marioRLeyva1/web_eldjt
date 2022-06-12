import React, {useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Arrow from '../../icons/arraow.svg'
import ArrowShadow from '../../icons/arraow-shadow.svg'

const EmblaCarousel = (props: any) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
        <div className="flex sm:hidden">
          {props.slides.map((slide:any) => 
            <img className='relative flex-slider' src={slide.url} alt={slide.key} />
          )}
        </div>
        <button className="" onClick={scrollPrev}>
          <img src={ArrowShadow} alt="arrow" className='blur-sm absolute rotate-90 w-14 left-0 top-56'/>
          <img src={Arrow} alt="arrow" className='absolute rotate-90 w-14 left-0 top-56 opacity-70'/>
        </button>
        <button className="" onClick={scrollNext}>
          <img src={ArrowShadow} alt="arrow" className='blur-sm absolute -rotate-90 w-14 right-0 top-56'/>
          <img src={Arrow} alt="arrow" className='absolute -rotate-90 w-14 right-0 top-56 opacity-70'/>
        </button>
      </div>
    )
}

export default EmblaCarousel