import './App.css';

import TopContent from './pages/TopContent/TopContent.jsx';
import Services from './pages/Services/Services.jsx'
import AboutUs from './pages/About/AboutUs.jsx';

import { Routes, Route, BrowserRouter} from 'react-router-dom'
import ScrollToHashElement from "./ScrollToHashElement";
function App() {
  return (
    <BrowserRouter>
      <div className="backgroundcontainer">
        
      <ScrollToHashElement />
        <Routes>
          {/* Catch-all route for rendering all pages initially */}
          <Route path="/*" element={
            <>
              <TopContent />
              <Services />
              <AboutUs />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
