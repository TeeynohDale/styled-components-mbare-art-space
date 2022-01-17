import styled from "styled-components";

export const StyledAbout=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    margin:100px;
`
export const Pics = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:120vh;

    img{
        height:100%;
        width:auto;
    }
`
export const Button = styled.button`
    color:${({theme})=>theme.colors.whitey};
    background:transparent;
    border: 2px solid ${({theme})=>theme.colors.whitey};
    font-family:${({theme})=>theme.fonts.fontsemib};
    font-size:40px;
    padding:10px;
    position:absolute;
    bottom:5%;
    right:10%;
`
export const AboutInner = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

img{
    width:100%;
}


`