import Home from "./components/FunctionalComponents/Home"
import Button  from "./components/FunctionalComponents/Button";
import Card from "./components/FunctionalComponents/Card";
import Footer from "./components/FunctionalComponents/Footer";
import Header from "./components/FunctionalComponets/Header";
import Profile from "./components/FunctionalComponets/Profile";
import ClassCompEG from "./components/classComponents/ClassCompEG";
import Gallery from "./components/FunctionalComponents/Gallery";
import About from "./components/FunctionalComponets/About";
import Contact from "./components/FunctionalComponets/contact";
import Navbar from "./components/FunctionalComponets/Navbar";
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import SignUp from "./components/FunctionalComponets/SignUp";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<SignUp />}></Route>
       <Route path="/home" element={<Home />}></Route>
       <Route path="/card" element={<Card title="Introduction" description="This is a simple card component." />}></Route>
       <Route path="/about" element={<About Hello="Vigneshvar" />}></Route> {/* props Example */}
       <Route path="/profile" element={<Profile name="Vigneshvar pandi" age={19} profession="Developer" />}></Route>
       <Route path="/contact" element={<Contact />}></Route>   {/* state Example */}
       </Routes>
      </BrowserRouter>
      <Footer />
    {/* <Button label="Click Me" onClick={() => alert("Button clicked!")} /> */}
    </>
  );
};

export default App;