import React, {Component} from "react";
import Profile from "./profile.json";
import path from "path";

class profile extends Component{
    render() {
        return (
            <div className="profile">
                <div>
                    {Profile.map((detail, index) => {
                        console.log([__dirname, detail.Img]);
                        return <div>
                            <h1 className="title-blue">Hello, {detail.Nickname}</h1>
                            <img src={path.resolve(__dirname, detail.Img)} alt="" key={Profile}/>
                            <h3>Basic Info</h3>
                            <form>
                                <div><label>Full Name: {detail.FullName}</label></div>
                                <div><label>Birthday: {detail.Birthday}</label></div>
                                <div><label>Gender: {detail.Gender}</label></div>
                            </form>
                            <br/>
                            <h3>Contact Info</h3>
                            <form>
                                <div><label>Location: {detail.Address}, {detail.City}, {detail.State}</label></div>
                                <div><label>Contact: {detail.Contact}</label></div>
                                <div><label>Email: {detail.Email}</label></div>
                            </form>

                        </div>
                    })}

                </div>


            </div>


        )
    }
}
export default profile;