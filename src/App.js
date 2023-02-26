import React from "react";
import { useState,createContext } from "react";
import Flickr from "./Flickr";

function App(){
  const [Keyword,setKeyword]=useState("")
  
  const UserContext=createContext()

  const handleClick=()=>{
       return true
  }

  return(
    <div>
      <UserContext.Provider value={Keyword}>
      <h1>Snap Shot</h1>
     <form onSubmit={handleClick}>
     <label htmlFor="search"></label>
     <input id="search" type="search" value={Keyword} onChange={(e)=>{setKeyword(e.target.value)}} 
     placeholder="Search"></input>
     <button >Enter</button>
     </form>
     <Flickr/>
     
      </UserContext.Provider>
    </div>
  )
}
export default App;
