import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBarCom from './Compenes/NavBarCom'
import StudentForm from './Compenes/StudentForm/StudentForm'
import StudentView from './Compenes/StudentView/StudentView'



function App() {


  return (
    <>
      <NavBarCom />
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path='/view' element={<StudentView/>} />
      </Routes>
    </>
  )
}

export default App
