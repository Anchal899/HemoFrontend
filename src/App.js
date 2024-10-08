import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from 'react';
import AuthContext from "./Components/context/AuthContext";
import Home from "./Components/Main/Home";
import Navbar from "./Components/Main/Navbar";
import About from "./Components/Main/About";
import Camps from "./Components/Main/Camps";
import Contact from "./Components/Main/Contact";
import Banks from "./Components/Main/Banks";
import AboutDonation from "./Components/Main/AboutDonation";
import Auth from "./Components/Auth/Auth";
import User from "./Components/User/User";
import Bank from "./Components/Bank/Bank";
import "./App.css";

export default function App() {
  const { loggedIn, user } = useContext(AuthContext);

  return (
    <BrowserRouter>
       <Navbar logIn={loggedIn} user={loggedIn && user ? user.latitude : null} />
      <Routes>
        <Route path="/" element={<Home />} />
        {!loggedIn && <Route path="/:type/:handle" element={<Auth logIn={loggedIn} />} />}
        {loggedIn && (user && user.hospital ? 
		
          <Route path="/bank/:handle?" element={<Bank />} /> :
          <Route path="/user/:handle?" element={<User />} />
        )}
        <Route path="about" element={<About />} />
        <Route path="aboutBloodDonation" element={<AboutDonation />} />
        <Route path="bloodDirect" element={<Banks />} />
        <Route path="bloodCamps" element={<Camps />} />
        <Route path="contactUs" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
