import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logo from "./component/media/logo01.png"



const Footer = () =>{
    return(
        <footer className="page-footer font-small py-3 px-3">
            <div className='footerContainer'>
            <div className="row container-fluid px-0 mx-0 copyrightDiv">
                <ul className="list-unstyled list-inline linkfooter ">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-3" href="http://www.facebook.com">
                            <i className="fa fa-facebook-square"> </i>
                        </a>


                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-tw mx-3" href="http://www.twitter.com">
                            <i className="fa fa-twitter-square"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-youtube-square mx-3" href="http://www.youtube.com">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-inst mx-3" href="http://www.instagram.com">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>

                </ul>

                <div className="footer-copyright copyrightLink">

                    <a href="https://healthgram.ca/">
                        <img src={Logo} alt="" className="logo-footer d-block"/>  © 2018 Healthgram.ca</a>
                </div>




            </div>
            </div>
        </footer>
    )
}
export default Footer;