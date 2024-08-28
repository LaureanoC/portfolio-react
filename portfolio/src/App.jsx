import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects/:id' element={<ProjectPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
