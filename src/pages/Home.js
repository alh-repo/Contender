import Header from "../components/Header"
import Button from '../components/Button/Button'; // Import the Button component
import DropdownButton from '../components/DropdownButton/DropdownButton'; // Import the DropdownButton component

export default function Home(){


    const handleClick = () => {
        alert('Button clicked!');
      };
    const handleSelect = () => {
       
      };


    return (
        <>
        <Header />
        <h2>Home Page</h2>
        <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Ella's Challenger Website</h1>
        
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
        </>
        

        
    )
}