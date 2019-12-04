import React from 'react';
import { Media, Container, Col } from 'reactstrap';
import pill from "./component/media/assets/pill@1x.svg"
import business from "./component/media/assets/business@1x.svg"
import pie from "./component/media/assets/pie@1x.svg"

const Example = () => {
    return (
        <div>
        <div className="row mx-auto">

            <div className="col-lg-4">
                <img className=""
                     src={pill}
                     alt="Generic placeholder image" width="140" height="140" />
                    <p>Provide services specialized in allergies and disease.</p>
                    {/*<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>*/}
            </div>

            <div className="col-lg-4">
                <img className=""
                     src={business}
                     alt="Generic placeholder image" width="140" height="140" />
                    <p>Get your potential customers around the world. </p>
                    {/*<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>*/}
            </div>
            <div className="col-lg-4">
                <img className=""
                     src={pie}
                     alt="Generic placeholder image" width="140" height="140" />
                    <p>Expand you clinic business in many aspects.</p>
                    {/*<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>*/}
            </div>

        </div>
        </div>


)
};

export default Example;