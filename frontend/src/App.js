import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout'
import Home from './Home'
import Festivesale from './Festivesale'
import Content from './Content';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='fectivesale' element={<Festivesale/>}/>
        <Route path='content' element={<Content/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
 
   </>
  )
}

export default App