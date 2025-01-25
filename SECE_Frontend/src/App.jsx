import Home from "./components/FunctionalComponents/Home"
import Card from "./components/FunctionalComponents/Card";
import Footer from "./components/FunctionalComponents/Footer";
import Profile from "./components/FunctionalComponents/Profile";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import SignUp from "./components/FunctionalComponents/Signup";
import UseEffect from "./components/FunctionalComponents/UseEffect";
import UseStateComponent from "./components/FunctionalComponents/UseState";
import UseEffectAPI from "./components/FunctionalComponents/UseEffectAPI";
import UseRef from "./components/FunctionalComponents/UseRef";
import UseMemo from "./components/FunctionalComponents/UseMemo";
import UseReducerEX from "./components/FunctionalComponents/Usereducer";
import UseCallback from "./components/FunctionalComponents/UseCallback";
import Students from "./components/FunctionalComponents/Students";
import Memo from "./components/FunctionalComponents/Memo";
import ReactLifecycleMethods from "./components/classComponents/ReactLifeCycleMethods";
// import UseLocalStorage from "./components/FunctionalComponents/UseLocalStorage";
import LazyLoadingWithSuspense from "./components/FunctionalComponents/LazyLoadingWithSuspense";
import HoC from "./components/Hoc/HoC";
import useeffecApi from "./components/FunctionalComponents/useeffecApi";  

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<SignUp />}></Route>
       <Route path="/home" element={<Home />}></Route>
       <Route path='/use-state' element={<UseStateComponent/>}></Route>
       <Route path='/use-effect' element={<UseEffect/>}></Route>
       <Route path="/card" element={<Card title="Introduction" description="This is a simple card component." />}></Route>
       <Route path="/about" element={<About Hello="Vigneshvar" />}></Route> {/* props Example */}
       <Route path="/profile" element={<Profile name="Vigneshvar pandi" age={19} profession="Developer" />}></Route>
      /* state Example */
        <Route path="/use-api" element={<UseEffectAPI/>}></Route>
        <Route path="/use-ref" element={<UseRef/>}></Route>
        <Route path="/use-memo" element={<UseMemo/>}></Route>
        <Route path="/use-redu" element={<UseReducerEX/>}></Route>
        <Route path="/use-call" element={<UseCallback/>}></Route>
        <Route path="/react-life" element={<ReactLifecycleMethods/>}></Route>
        <Route path="/use-context" element={<Students/>}></Route>
        <Route path="/use-Memo" element={<Memo/>}></Route>
        <Route path="/lazy" element={<LazyLoadingWithSuspense />}></Route>
        <Route path="/hoc" element={<HoC/>}></Route>
        <Route path="/use-effect-Api" element={<useeffecApi/>}></Route>
       </Routes>
      </BrowserRouter>
      <Footer />
    {/* <Button label="Click Me" onClick={() => alert("Button clicked!")} /> */}
    </>
  );
}


export default App;