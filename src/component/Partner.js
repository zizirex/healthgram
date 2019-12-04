import React from "react";
import Jumbo from "../Jumbotron";
import List2 from "../PartnerList";
import How from "../howto";
import Team from "../Team.jsx";
import Hear from "../Hear.jsx";
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Partner = () =>{
    return(
        <div>
            <div>
                <h1 className="title-blue">Partner with us</h1>
                <p>Why partner with us?</p>
            </div>
            <List2/>
            <Team/>
            <Hear/>

        </div>




    )
}
export default Partner;