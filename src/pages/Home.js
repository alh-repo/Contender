import Header from "../components/Header"
import Button from '../components/Button/Button'; // Import the Button component

export default function Home(){


    const handleClick = () => {
        alert('Button clicked!');
      };

    return (
        <>
        <Header />
        <h2>Home Page</h2>
        <div className="App">
        <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Challenger Website</h1>
        
        <div>
        <Button onClick={handleClick}>Login</Button>
        </div>    
    
       <br></br>
        <div>
        <Button onClick={handleClick}>Sign Up</Button>
        </div>
        <br></br>
        </header>
        </div>
        </> 
    )
}