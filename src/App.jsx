import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ClientsHome from './pages/clientsHome';
import ProjectPosting from './pages/ProjectPosting';



function App() {

  return (
    <div className="" style={{maxWidth:"430px", maxHeight:"932"}}>
    <BrowserRouter >
      <Routes >
        <Route path='/' element={<ClientsHome />}></Route>
        <Route path='/project-posting' element={<ProjectPosting />}></Route>
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
