import React, {createContext, useContext, useState} from 'react';
import RoutPage from "./components/RoutPages/RoutPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";


const App = () => {
    const [active, setActive] = useState(false)
  return (
      <>

          <Header/>
          <div className='container'>
              <RoutPage/>
          </div>

          <Footer  active={active} setActive={setActive} />
      </>
  );
};

export default App;
