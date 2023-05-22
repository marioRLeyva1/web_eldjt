import React, {useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Arrow from '../../icons/arraow.svg'
import ArrowShadow from '../../icons/arraow-shadow.svg'
import { ELDJTWEBURL } from '../../utils/constans'

const EmblaCarouselHome = (props: any) => {
 
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
    }, [emblaApi]);

    const onHandleClick = (e:any) => {
      if (e.target.id === '0') {        
        console.log('e', e)
        props.onClickSlide1();
        window.location.replace(`${ELDJTWEBURL}/licenciatura`)
      }
    }
  
    return (
      <div className="overflow-hidden font-poppins" ref={emblaRef}>
        <div className="flex">
          {props.slides.map((slide:any) =>(
            <div className='relative flex-slider'>
              {<>
                <img className='sm:hidden' src={slide.url} alt={slide.key} onLoad={()=>props.onLoadedSlider()} />
                <img id = {slide.key} className='hidden sm:block w-full cursor-pointer' src={slide.urlDesktop} alt={slide.key} onLoad={()=>props.onLoadedSlider()} onClick={(e) => onHandleClick(e)}/> 
                {slide.button === true && <div className={`absolute w-full ${slide.buttonTop} flex items-center justify-center`}>
                <button id={slide.key} className={`absolute sm:hidden rounded shadow-xl w-52 h-12 bg-secondary text-white font-semibold text-lg`} onClick={(e) => onHandleClick(e)}>{slide.buttonLabel}</button>
                </div>}
                </> }
            </div>)
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

export default EmblaCarouselHome