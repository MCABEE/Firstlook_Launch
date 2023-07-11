import Index from "./Pages/Index"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
