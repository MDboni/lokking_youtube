import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage.jsx'
import DetailsPage from './Page/DetailsPage.jsx'
import CategoryPage from './Page/CategoryPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/category/:category_id' element={<CategoryPage/>}/>
      <Route path='/Details/:DetailID' element={<DetailsPage/>}/>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
