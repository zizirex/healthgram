import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import howto from "./component/media/assets/@1xhowitwork.svg"

export default class Example extends React.Component {
    render() {
        return (
            <div className="mx-auto py-3 row howContainer">
                <br/>
                <div className="row container-fluid fluid mx-auto py-3">
                     <div className=" align-self-start col-sm-6">
                        <Media className="featurette-image img-fluid mx-auto" src={howto} alt="Generic placeholder image"/>
                    </div>
                     <div className="col-sm-6 homelist py-3">
                        <h2 className="featurette">How it Works.</h2>
                        <p className="lead">With just a few simple steps, you can prepare for your trip more safe and fun</p>
                         <ol>
                            <li>Sign up to start the plan. Don’t worry it’s free</li>
                            <li>Start planning your trip in the PLANNER page</li>
                            <li>You can view your plans anytime in your profile</li>
                        </ol>
                    </div>
                </div>
                <br/>
            </div>
        )
        }
    }