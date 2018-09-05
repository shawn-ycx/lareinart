import React from 'react';
import { push } from 'gatsby';

import { InstaIconSVG, FacebookIconSVG, LinkedInIconSVG,TwitterIconSVG} from '../assets/icons/svg';

const Footer = (props) => {

    return (
        <footer>
            <div className="footer-info">
                <h1>Hire Me</h1>
                <button>
                    Click Here
                </button>
            </div>
            <div className="footer-social">
                <InstaIconSVG/>
                <FacebookIconSVG/>
                <LinkedInIconSVG/>
                <TwitterIconSVG/>
            </div>
            <div className="footer-subscribe">
                <h1>Like my work?</h1>
                <button>Subscribe!</button>
            </div>
        </footer>
    )
}

export default Footer;