import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import AddCarsEdit from "./components/add-carsedit.component";
import CarsEditsList from "./components/carsedits-list.component";
import Profile from "./components/about.component";

class App extends Component {
  render() {
    return (
      
      <div class="example-div">
      <nav>
          <div className="flex flex-fixed black">
            
              
              <Link to={"/about"}>Perfil</Link>
           
              <Link to={"/clips"}>Clips</Link>
           
              <Link to={"/add"}>Agregar</Link>
            
              

              <div class="animation start-home"></div>
              </div>
                
                </nav>
          
     

        <div  className="container-body" >
          
          <Routes>
            <Route exact path="/clips" element={<CarsEditsList />} />
            <Route exact path="/add" element={<AddCarsEdit />} />
            <Route exact path="/about" element={<Profile />} />
          </Routes>       
        </div>
      </div >
      
    );
  }
}


export default App;