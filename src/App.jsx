import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './App.css'
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Aboutus from './component/Aboutus/Aboutus';
import Footer from './component/Footer/Footer'

function App() {

  return (
    <>
     <Header/>
     <Banner/>  
     <Aboutus/>
     <Footer/>
    </>
   
  );
}

export default App
