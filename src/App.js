import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'; // Import the Button component
import DropdownButton from './components/DropdownButton/DropdownButton'; // Import the DropdownButton component


function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  const handleSelect = (option) => {
    alert(`Selected: ${option}`);
  };

  return (
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
  );
}

export default App;
