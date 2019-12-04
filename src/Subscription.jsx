import React from "react";

const Subs = () =>{
    return(
        <div className="text-center text-md-left p-5" id="subs">


            <div className="row container-fluid subsContainer">


                <div className="col-md-6 mx-auto container-fluid p-2 subs">


                    <h3 className="font-weight-bold mt-3 mb-4">Have you subscribe to our newsletter yet?</h3>
                    <p>We promise not to spam you.</p>

                </div>
                <div className="col-md-6 my-auto mx-auto container-fluid p-2">
                    <form className="form-inline">
                        <input type="text" className="form-control form-control-sm col" placeholder="Enter Your email"
                               aria-label="Your email" aria-describedby="basic-addon2"/>
                        <div className="">
                            <button className="commit" type="button">Send</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
export default Subs;