import React from 'react';
import { Media, Container, Col } from 'reactstrap';
import personal from "./component/media/assets/person_icon@1x.svg"
import global from "./component/media/assets/global_icon@1x.svg"
import notification from "./component/media/assets/notification_icon@1x.svg"

const Example = () => {
    return (
        <div>
        <div className="d-inline-block">
            <h1>What is Healthgram?</h1>
            <p>Lorem Ipsum Dolor Sil Amet</p>
        </div>
        <div className="row mx-auto whatContainer">

            <div className="col-lg-4">
                <img className=""
                     src={personal}
                     alt="Generic placeholder image" width="140" height="140" />
                    <h2>Personal Allergies</h2>
                    <p>Cross check user’s profile with specific location.</p>
                    {/*<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>*/}
            </div>

            <div className="col-lg-4">
                <img className=""
                     src={global}
                     alt="Generic placeholder image" width="140" height="140" />
                    <h2>Global Disease</h2>
                    <p>Know the disease status changing every year.</p>
                    {/*<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>*/}
            </div>
            <div className="col-lg-4">
                <img className=""
                     src={notification}
                     alt="Generic placeholder image" width="140" height="140" />
                    <h2>Notifications</h2>
                    <p>Notify user about any outbreak in nearby location.</p>
                    {/*<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>*/}
            </div>

        </div>
        </div>


)
};

export default Example;