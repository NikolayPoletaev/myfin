import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WelcomePage from "./pages/1_WelcomePage";
import IdentificationUser from "./pages/2_IdentificationUser";
import Questionnaire from "./pages/3_Questionnaire";
import Strategy from "./pages/4_Strategy";
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<WelcomePage />} /> 
        <Route path="/Questionnaire" element={<Questionnaire />} /> 
      </Routes>
  </Router>
  );
}


export default App;
