import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import{ Suspense } from 'react';
import WelcomeLayout from '../layouts/WelcomeLayout';
import Welcome from '../pages/Welcome';


// Lazy load de las páginas


const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        <Route path="/" element={<WelcomeLayout/>} >
        <Route index element={<Welcome/>} />
        
        </Route>
      
      </Routes>
    </Suspense>
  </Router>
);
        

export default AppRouter;