import React from "react";
import Footer from "../Footer";
import './style.css';
import Home from "../../pages/Home";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);


function App() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;