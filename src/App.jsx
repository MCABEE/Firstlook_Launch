import Index from "./Pages/Index"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
