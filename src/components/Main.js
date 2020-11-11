import './styles/style.css';
import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Memes from "./Memes";
  import About from "./About";
  import Resume from "./Resume";
  import Blog from "./Blog";

class Main extends React.Component {
    constructor(){
        super();
    }

    /*create the navigation buttons except home button*/
    MyButton(){
        /*nav buttons*/
        const arr = ["Blog","Memes","Resume","About"];
        
        const buttons = arr.map((val,index)=>
          <button class={"navbutton"} id ={"bnav"+(index +1)}><NavLink to={"/"+val}>{val}</NavLink></button>
        );
        return buttons;   
      
      }

    render() {
        
      return (
          <HashRouter>
            <div>
                <h1 id="title">Yoel's Corner</h1> 
                <div class="nav-group">
                    <button class={"navbutton"} id ={"bnav0"}><NavLink to={"/"}>Home</NavLink></button>
                    <this.MyButton />
                </div>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Blog" component={Blog}/>
                    <Route path="/Memes" component={Memes}/>
                    <Route path="/Resume" component={Resume}/>
                    <Route path="/About" component={About}/>
                </div>
            </div>
          </HashRouter>
      );
    }
  }

  export default Main;