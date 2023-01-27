import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss'
import App from './App';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import DetailedPostComponent from './component/DetailedPost';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/:page' element={<App />}></Route>
      <Route path='' element={<App />}></Route>
      <Route path='detailed/:id/:userId' element={<DetailedPostComponent />}></Route>
    </Routes>
    
    
      
    

  </BrowserRouter> 
  </React.StrictMode>
);

