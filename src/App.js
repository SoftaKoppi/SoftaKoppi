import './App.css';

import TopContent from './pages/TopContent/TopContent.jsx';
import Services from './pages/Services/Services.jsx'
import AboutUs from './pages/About/AboutUs.jsx';

function App() {
  return (
    <div className="backgroundcontainer">
    <TopContent />
    <Services />
    <AboutUs />
    </div>
   
  );
}

export default App;
