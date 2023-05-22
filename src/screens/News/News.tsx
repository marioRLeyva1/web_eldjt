import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import NewsCardDesktop from '../../components/NewsCard/NewsCardDesktop';
import NewsCardMobile from '../../components/NewsCard/NewsCardMobile'
import { ELDJTAPIURL, ELDJTWEBURL } from '../../utils/constans';

const News = () => {

  const [news, setNews] = React.useState<{id: number, title: string, subtitle: string, date: number, img: string, url:string}[]>([]);
  const [ready, setReady] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    getNews();
  }, [])

  const getNews = async () => {
    try {
        // const res = await fetch(`${ELDJTAPIURL}/api/news`);
        // console.log(await res.json())
        let config = {
            method: 'GET',
            url: `${ELDJTAPIURL}/api/news`,
            headers: { }
          };

        let res = await axios(config);
        console.log('res', res.data)
        setNews(res.data.news);
        setReady(true);
    } catch (error) {
        console.log('error',error);
    }
  }

  const onHandleClick = async (url: string) => {
    window.location.replace(`${ELDJTWEBURL}/noticias/${url}`)
  }


  return (
    <Layout location='news'>
      <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-14'>
          <div className=''>
              <h1 className='text-3xl sm:text-5xl'>Noticias</h1>
          </div>
          {/* <div className='hidden sm:block w-16'>
            <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
          </div> */}
          <div className='sm:mt-7 mt-7 sm:mb-6'>
            <p className='flex flex-col text-justify px-8 gap-4'>
              <span>Aquí están las últimas noticias de nuestra institución.</span>
            </p>
          </div>
          <div className='sm:hidden sm:gap-10 sm:w-full px-6 sm:p-0 items-center justify-center'>
            {news.map((cr) => <NewsCardMobile img={cr.img} buttonLabel='Entrar' title={cr.title} subtitle={cr.subtitle} onChange={() => onHandleClick(cr.url)}/>)}
          </div>
          <div className='hidden sm:flex sm:flex-col sm:gap-10 sm:w-full px-6 sm:p-0 items-center justify-center'>
            {news.map((cr) => <NewsCardDesktop img={cr.img} buttonLabel='Entrar' title={cr.title} subtitle={cr.subtitle} onChange={() => onHandleClick(cr.url)}/>)}
          </div>
          {/* <div className='sm:flex justify-center items-center sm:w-1024 sm:mt-10'>
            <img className='w-96' src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
            <div className='sm:flex flex-col gap-4 mt-5 sm:w-96 hidden'>
                <h3 className='text-2xl text-center'>Contáctanos</h3>
                <Input type='text' placeholder={'Nombre Completo'} required={true}/>
                <Input type='email' placeholder={'Correo Electrónico'} required={true}/>
                <Input type='tel' placeholder={'Teléfono'} required={true}/>
                <Input type='text' placeholder={'Ciudad'} required={true}/>
                <button className='mx-5 mb-5 border-LG p-2 bg-secondary rounded text-white font-bold drop-shadow'>ENVIAR</button>
            </div>
          </div> */}
      </div>
    </Layout>
  )
}

export default News