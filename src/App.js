import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddBus from './Components/AddBus';
import SearchBus from './Components/SearchBus';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/add" element={<AddBus/>}/>
      <Route path="/search" element={<SearchBus/>}/>
      <Route path="/view" element={<ViewAll/>}/>
      <Route path="/view" element={<ViewAll/>}/>
  
    </Routes>
      
   </BrowserRouter>
  );
}

export default App;
