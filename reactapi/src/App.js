import axios from 'axios';
import { Route , Switch } from "react-router-dom"; 
import React, {useState} from 'react';
import { useEffect } from 'react';
import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";

function App() {
  const [state , setState] =  useState([]);

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/cards?pageSize=10')
    .then((response) => { setState(response.data.data)
    },[]);
  })
  return (
    <div>
      <Nav/>
      <Switch>

       <Route exact path="/Home" component = {Home}/>
       <Route exact path="/About" component = {About}/>
      
     </Switch>
    
    <div>
      <ul>
      {state.map((item,i) =>{
       return  <div key={i}>
          <h1>{item.name}</h1>
          <img src={item.images}/>
        </div>
      })}
      </ul>
    </div></div>
  );
}

export default App;
