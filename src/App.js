import React, { memo, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToHashElement from "./components/ScrollHelpers/ScrollToHashElement.js";
import ScrollTop from "./components/ScrollHelpers/ScrollToTop.js";

const LazyTopContent = React.lazy(() => import('./pages/TopContent/TopContent.jsx'));
const LazyServices = React.lazy(() => import('./pages/Services/Services.jsx'));
const LazyAboutUs = React.lazy(() => import('./pages/About/AboutUs.jsx'));

// Wrap the lazy-loaded components with React.memo()
const MemoizedLazyTopContent = memo(LazyTopContent);
const MemoizedLazyServices = memo(LazyServices);
const MemoizedLazyAboutUs = memo(LazyAboutUs);

function App() {
  return (
    <BrowserRouter>
      <div className="backgroundcontainer">
        <ScrollToHashElement />
        <Routes>
          {/* Use Suspense with fallback for lazy-loaded components */}
          <Route path="/*" element={
            <Suspense fallback={<div>Loading...</div>}>
              <>
                {/* Lazy-loaded components */}
                <MemoizedLazyTopContent />
                <MemoizedLazyServices />
                <MemoizedLazyAboutUs />
              </>
            </Suspense>
          } />
          
        </Routes>
        <ScrollTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
