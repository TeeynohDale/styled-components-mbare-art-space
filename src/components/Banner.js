
import {React} from 'react';
import { StyledBanner } from './styled/Banner.Styled';
import Major from './Major';

const Banner=(props )=> {
    return (
        <StyledBanner>
            <div className="inner">
                <div className="inverted">
                    <h2 className="greet">Welcome</h2>
                    <div className="hr"></div>
                </div>
                <div className="inner-pics">
                    <img className="marcus" src="./img/marcus.png" alt="banner-pic"/>
                    <div className="logos">
                        <img src="./img/LOGO.png" alt="banner-pic"/>
                        <img src="./img/00.png" alt="banner-pic"/>
                        <img src="./img/011.png" alt="banner-pic"/>
                    </div>
                </div>
            </div>
            <div className="item">
                <Major
                    heading="Mbare Art Space"
                    paragraph="Creating a space for artists to showcase their work "
                    btn="Empowering Communities"
                />
            </div>
        </StyledBanner>
    )
}

export default Banner
