import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Book from "./components/Book";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [searchFocus, setSearchFocus] = useState(false)
  // Set Components Position

  const [bookTop, setBookTop] = useState(0)
  const [destinationsTop, setDestinationsTop] = useState(0)
  const [contactTop, setContactTop] = useState(0)
  
  return (
  <>
  {!isLogin ? <div>
                <Navbar 
                  isLogin={isLogin} 
                  setIsLogin={setIsLogin} 
                  bookTop={bookTop} 
                  destinationsTop={destinationsTop}
                  contactTop={contactTop}
                  setSearchFocus={setSearchFocus}
                  />
                <Hero 
                  searchFocus={searchFocus}
                  setSearchFocus={setSearchFocus}
                />
                <Book 
                  setBookTop={setBookTop} 
                  />
                <Destinations 
                  setDestinationsTop={setDestinationsTop} 
                />
                <Footer 
                  setContactTop={setContactTop}
                  contactTop={contactTop}
                  bookTop={bookTop}
                  destinationsTop={destinationsTop}
                />
              </div> : <div>
                        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
                      </div>}
  </>
  );
}

export default App;
