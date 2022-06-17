import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import History from './screens/Us/History';
import EducationalModel from './screens/Us/EducationalModel';
import Caldendar from './screens/Us/Caldendar';
import Bachelors from './screens/AcademicOffer/Bachelors';
import Postgraduate from './screens/AcademicOffer/Postgraduate';
import HighSchool from './screens/AcademicOffer/HighSchool';
import AdmissionProcess from './screens/Admissions/AdmissionProcess';
import Scholarships from './screens/Admissions/Scholarships';
import OnlineClasses from './screens/Services/OnlineClasses';
import Linkage from './screens/Services/Linkage';
import Payment from './screens/Services/Payment';
import New from './screens/News/New';
import News from './screens/News/News';
import Graduate from './screens/Graduate/Graduate';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nosotros/historia' element={<History/>}/>
        <Route path='/nosotros/modelo-educativo' element={<EducationalModel/>}/>
        <Route path='/nosotros/calendario-institucional' element={<Caldendar/>}/>
        <Route path='/licenciaturas' element={<Bachelors/>}/>
        <Route path='/posgrados' element={<Postgraduate/>}/>
        <Route path='/prepa' element={<HighSchool/>}/>
        <Route path='/licenciaturas' element={<Bachelors/>}/>
        <Route path='/admisiones' element={<AdmissionProcess/>}/>
        <Route path='/becas' element={<Scholarships/>}/>
        <Route path='/clases-online' element={<OnlineClasses/>}/>
        <Route path='/vinculacion' element={<Linkage/>}/>
        <Route path='/pago' element={<Payment/>}/>
        <Route path='/noticias' element={<News/>}/>
        <Route path='/egresados' element={<Graduate/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
