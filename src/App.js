import React from "react";
import { useState } from "react";
import Flickr from "./Flickr";
import  {UserContext} from "./CreateContext";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import searchpic from "./searchbar.png";


function App(){
  const [Keyword,setKeyword]=useState("")

  function handleMountain(){
    setKeyword("Mountain")
  }
  function handleBeach(){
    setKeyword("Beach")
  }
  function handleSun(){
    setKeyword("Sun")
  }
  function handleBirds(){
    setKeyword("Birds")
  }

  return(
      <UserContext.Provider value={Keyword}>
      <BrowserRouter>
      <h1>Snap Shot</h1>
     <form>
     <label htmlFor="search"></label>
     <img src={searchpic} alt="searchbar" width="15" height="15" style={{"marginLeft":"10px","marginRight":"10px"}}></img>
     <input id="search" type="search" value={Keyword} onChange={(e)=>{setKeyword(e.target.value)}}
     placeholder="Search"></input>
     <Link to="/flickr"><button onClick={handleMountain}>Mountain</button></Link>
     <Link to="/flickr"><button onClick={handleBeach}>Beach</button></Link>
     <Link to="/flickr"><button onClick={handleBirds}>Birds</button></Link>
     <Link to="/flickr"><button onClick={handleSun}>Sun</button></Link>
     </form>
     
        <Routes>
          <Route path="/flickr" element={<Flickr/>}></Route>
        </Routes>
        </BrowserRouter>
     
      </UserContext.Provider>

  )
}
export default App;
