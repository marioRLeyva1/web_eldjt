import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { ELDJTAPIURL } from '../../utils/constans';

const New = () => {

  const [newData, setNewData] = useState<{id: number, title: string, subtitle: string, date: number, img: string, url:string, body: string}>({id: 0, title: '', subtitle: '', date: 0, img: '', url:'', body: ''});
  const [ready, setReady] = React.useState(false);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const res = await fetch(`${ELDJTAPIURL}/api/news`);
      // console.log(await res.json())
      let config = {
          method: 'GET',
          url: `${ELDJTAPIURL}/api/news?url=${window.location.pathname.split('/')[2]}`,
          headers: { }
        };

      let res = await axios(config);
      console.log('res', res.data)
      setNewData(res.data.newData);
      setReady(true);
    } catch (error) {
      console.log('error',error);
    }
  }

  const navigate = useNavigate();
  return (
    <Layout location='news'>
      {ready && <div className='flex flex-col mt-28 items-center justify-center w-1024 mb-4'>
          <div className=''>
              <h1 className='text-3xl sm:text-5xl'>{newData.title}</h1>
          </div>
          <div className=''>
              <h3 className='mt-5 text-xl text-gray-600'>{newData.subtitle}</h3>
          </div>
          <div className='hidden sm:block w-full p-10'>
            <img src={newData.img} alt="eldjt" />
          </div>
          <div className='sm:mt-10 mt-7 '>
              <p className='flex flex-col text-justify px-8 gap-4 justify-center items-center'>
                {newData.body}
              </p>
              <div className='hover:scale-105 transition cursor-pointer' onClick={() => navigate('/admisiones')}>
                <h2 className='text-3xl text-dark text-center mt-10'>👉 ¡Toma ya la decisión correcta!</h2>
                <h5 className=' text-dark text-center '>No esperes más ⏳</h5>
              </div>
          </div>
      </div>}
    </Layout>
  )
}

export default New