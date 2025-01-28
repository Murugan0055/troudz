import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import NotFound from './pages/notFound';
import GetStarted from './pages/getStarted';
import Services from './pages/services';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/service/:id" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
