import React from "react";
import Jumbo from "../Jumbotron";
import Carou from "../Carousel";
import Carou2 from "../Carousel2";
import List from "../Media";
import How from "../howto";
import Subs from "../Subscription";
import {Link} from "react-router-dom";


const Home = () =>{

    return(
        <div>
           <div className="row ">
               {/*<div className=" col-7 mr-auto px-0"><Jumbo/></div>*/}
               <div className=" col-md-12 ml-auto px-0 carousel-container">
                   <Carou/>
                   <div className="tagline">
                       <h1 className="title-blue">Ready For Your New Trip</h1>
                       <p>Lorem ipsum dolor sil amet</p>
                       <button><Link to="/planner">Plan your trip</Link></button>
                   </div>
               </div>
           </div>
            <br/>
            <List/>
            <br/>
            <How/>
            <Subs/>
        </div>
    )
}

export default Home;