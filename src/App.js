import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddBus from './Components/AddBus';
import SearchBus from './Components/SearchBus';

function App() {
  return (
    <div>
      <Login/>
      <SignUp/>
      <AddBus/>
      <SearchBus/>
    </div>
  );
}

export default App;
