import React, { Component } from "react";
import "./App.css";
import Parrainage from "./components/Parrainage";
// import Navbar from "./components/Navbar";
// import Blog from "./components/Blog";
// import Profil from "./components/Profil";
// import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="nav">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Parrainage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </div> */}
        <div>
          <Parrainage />
        </div>
      </div>
    );
  }
}

export default App;
