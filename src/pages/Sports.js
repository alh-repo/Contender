import Header from "../components/Header"
import DropdownButton from '../components/DropdownButton/DropdownButton'; // Import the DropdownButton component


export default function Sports(){
    const handleSelect = () => {
       
    };

    return (
        <>
        <Header />
        <h2>Sports Page</h2>
        <div>
        <DropdownButton 
        options={['NBA', 'NFL', 'MLB']} 
        onSelect={handleSelect} 
        />
        </div>
        <br></br>
        </>
    )
}
