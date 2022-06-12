import React, { useEffect } from 'react'
import Arrow from '../../../icons/arraow.svg'

/*NO SE USA, SE REEMPLAZÓ POR EMBLA SLIDER*/

const MobileSlider = () => {

    const images = [
        'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F1-mobile.png?alt=media&token=f518073a-8fc9-45dd-bca1-68430759f211',
        'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F2-mobile.png?alt=media&token=293f1c89-fdc7-4f63-b121-153f0b2c9898',
        'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F3-mobile.png?alt=media&token=ce94d0be-70d9-44a6-b18f-56c6c8a49f26'
    ];

    const positionReady = {
        center: 'absolute transition-all duration-200 right-0',
        left: 'fixed transition-all duration-200 right-full',
        right: 'fixed transition-all duration-200 -right-full'
    };

    const positionWait = {
        center: 'absolute -z-50 transition-all duration-200 right-0',
        left: 'fixed -z-50 transition-all duration-200 right-full',
        right: 'fixed -z-50 transition-all duration-200 -right-full'
    }

    const [imagesPosition, setImagesPosition] = React.useState({
        zero: 'absolute right-0',
        one: 'fixed -right-full',
        two: 'fixed right-full'
    });

    const [imageShown, setImageShown] = React.useState('0');

    const onHandleSlider = (e:any) => {
        console.log(e.target.id);
        const { target: { id } } = e;

        if (id === 'right') {

            switch (imageShown) {
                case '0':
                    setImagesPosition({zero:positionReady.left, one: positionReady.center, two: positionWait.right});
                    setImageShown('1');
                    break;
                case '1':
                    setImagesPosition({zero:positionWait.right, one: positionReady.left, two: positionReady.center});
                    setImageShown('2');
                    break;
                case '2':
                    setImagesPosition({zero: positionReady.center, one: positionWait.right, two: positionReady.left});
                    setImageShown('0');
                    break;
                default:
                    break;
            }
        }else{
            switch (imageShown) {
                case '0':
                    setImagesPosition({zero:positionReady.right, one:positionWait.left, two:positionReady.center});
                    setImageShown('2');
                    break;
                case '1':
                    setImagesPosition({zero:positionReady.center, one:positionReady.right, two: positionWait.left});
                    setImageShown('0');
                    break;
                case '2':
                    setImagesPosition({zero: positionWait.left, one: positionReady.center, two: positionReady.right});
                    setImageShown('1');
                    break;
                default:
                    break;
            }
        }
        
    };

  return (
    <section className='md:hidden h-full'>
        <img id='0' src={images[0]} className={`w-full ${imagesPosition.zero}`} />
        <img id='1' src={images[1]} className={`w-full ${imagesPosition.one}`} />
        <img id='2' src={images[2]} className={`w-full ${imagesPosition.two}`} />
        <img id='left' src={Arrow} alt="arrow" className='rotate-90 absolute w-14 top-56' onClick={(e) => onHandleSlider(e)}/>
        <img id='right' src={Arrow} alt="arrow" className='-rotate-90 absolute w-14 top-56 right-0' onClick={(e) => onHandleSlider(e)}/>
    </section>
  )
}

export default MobileSlider