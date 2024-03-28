import TopContent from './pages/TopContent/TopContent.jsx';
import Services from './pages/Services/Services.jsx'
import AboutUs from './pages/About/AboutUs.jsx';
import "./index.css"
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ScrollToHashElement from "./components/ScrollHelpers/ScrollToHashElement.js";
import ScrollTop from "./components/ScrollHelpers/ScrollToTop.js";

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
        <ScrollTop/>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
