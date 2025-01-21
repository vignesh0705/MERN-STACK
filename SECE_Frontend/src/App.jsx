import React from 'react';
import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import ClassCompEG from "./components/classComponents/ClassCompEG";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Navbar from './components/FunctionalComponents/Navbar';

function App() {
  return (
    <section>
      <Navbar />
      <Home /><hr />
      <About /><hr />
      <h2>Gallery</h2>
      <Gallery page="Gallery" img="SECE Logo" /><hr />
      <Contact /><hr />
      <ClassCompEG />
    </section>
  );
}

export default App;
