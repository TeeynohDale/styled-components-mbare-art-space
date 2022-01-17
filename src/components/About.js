import React from 'react'
import Major from './Major'
import { AboutInner, Button, Pics, StyledAbout } from './styled/About.Styled'

const About=() =>{
    return (
        <div id="about">
            <StyledAbout>
                <Pics>
                    <img src="./img/woman.png" alt="matapi area"/>
                    <Button>View Matapi Flats</Button>
                </Pics>
                <AboutInner>
                    <img src="./img/Group 7.png" alt="kids on a car"/>
                    <Major
                    
                    heading="About Mbare"
                    paragraph="
                    About MbareMbare is home to large number of artists in Zimbabwe,
                    from oil painters to material  recycle artists.
                    "
                    btn="More on the community"
                    >
                        <p>
                         The main concern is getting exposure for those artist, that's
                         where the urban culture and heritage initiative to come and 
                         help. 

                        </p>
                    </Major>
                </AboutInner>
            </StyledAbout>
        </div>
    )
}

export default About
