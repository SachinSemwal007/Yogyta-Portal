import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import CandidateForm from './pages/CandidateForm';
import VacancyForm from './pages/VacancyForm';

const App = () => {
  return (
    <div>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/candidate-form' element={<CandidateForm />} />
        <Route path='/vacancy-form' element={<VacancyForm/>}/>
      </Routes>
    </div>
  );
};

export default App;
