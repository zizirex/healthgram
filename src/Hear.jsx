import React from "react";

const Hear = () =>{
    return(
        <div className="text-center text-md-left p-5" id="hear">


            <div className="row container-fluid hearContainer">


                <div className="col-md-6 mx-auto container-fluid p-2">


                    <h3 className="mt-3 mb-4 title-blue">We Love To Hear From You</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore id ipsam perferendis placeat, sequi voluptatum!</p>

                </div>
                <div className="col-md-6 my-auto mx-auto container-fluid p-2">
                    <form className="form-group">
                       <div className="hearInput">
                           <input type="text" className="form-control form-control-sm col form-inline" placeholder="Your Name"
                                  aria-label="Your name" aria-describedby="basic-addon2"/>
                       </div>
                       <div className="hearInput">
                           <input type="text" className="form-control form-control-sm col form-inline" placeholder="Email"
                                  aria-label="Your email" aria-describedby="basic-addon2"/>
                       </div>
                        <div className="form-group message">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="text-right">
                            <button className="commit-trans" type="button">Send</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
export default Hear;