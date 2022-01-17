import styled from "styled-components";

export const Styledmajor= styled.div`
    flex-direction:column;
    padding:10px;
    margin:10px;
    justify-content:space-between;
    align-items:center;
    text-align:left;
    
    h2{
        font-size:60px;
        color:${({theme})=>theme.colors.darky};
        font-family:${({theme})=>theme.fonts.fontbold};
        text-align:left;
    }
    p{
        font-family:${({theme})=>theme.fonts.fontsemib};
        font-size:22px;  
    }
    button{
        border:2px solid ${({theme})=>theme.colors.bluey};
        font-size:30px;
        color:${({theme})=>theme.colors.darky};
        font-family:${({theme})=>theme.fonts.fontRegular};
        text-align:center;
        padding:10px;
    }
`
