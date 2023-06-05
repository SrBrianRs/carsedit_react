import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import CarsEditsList from "./components/carsedits-list.component";
import Profile from "./components/about.component";
import Login from "./Google-login/Login";

class App extends Component {
  render() {
    const user = localStorage.getItem('user');
    const logout = () => {
      localStorage.clear()
      window.location.reload()
    }


    return (

      <div class="example-div">
        <nav>
          <div className="flex flex-fixed black">


            <Link to={"/about"}>Perfil</Link>

            <Link to={"/clips"}>Clips</Link>

            <Link to={"/add"}>Agregar</Link>

            {user &&
              
              <Link onClick={logout} to={"/home"}>Logout</Link>
              
            }



            <div class="animation start-home"></div>
          </div>

        </nav>



        <div className="container-body" >

          <Routes>
            <Route exact path="/clips" element={<CarsEditsList />} />
            <Route exact path="/add" element={<Login />} />
            <Route exact path="/about" element={<Profile />} />
          </Routes>
        </div>
      </div >

    );
  }
}


export default App;