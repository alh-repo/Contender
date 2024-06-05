import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'; // Import the Button component
import DropdownButton from './components/DropdownButton/DropdownButton'; // Import the DropdownButton component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';



function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  const handleSelect = (option) => {
    alert(`Selected: ${option}`);
  };

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="*" element={<NoPage/>} />

    </Routes>
    
    </BrowserRouter>
    

    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Challenger</h1>
        
        <div>
      <Button onClick={handleClick}>Login</Button>
    </div>    
    <div>
    <br></br>
    <div>
      <Button onClick={handleClick}>Sign Up</Button>
    </div>
    <br></br>
    <DropdownButton 
        options={['NBA', 'NFL', 'MLB']} 
        onSelect={handleSelect} 
      />
    </div>
    <br></br> 
    
      </header>
    </div>
    </div>
  );
}

export default App;
