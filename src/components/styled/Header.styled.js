import styled from "styled-components";

export const Headers = styled.header`
    position:absolute;
    height:20vh;
    width:60%;
    right:0;

    i{
        font-size:60px;
        z-index:7;
        font-weight:600;
    }
    .menu-icon{
        position:absolute;
        z-index:100;
        color:white;
        top:10%;
        right:5%;
    }
    .nav-menu{
        z-index:9;
        background-color:#1473E6;
        opacity:0;  
        transition: 0.9s all ease-in-out;
        height:100vh;
        right:-100%;
        width:80%;
        padding:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;aq2
        
    }
    .active{
        opacity:1;
        width:100%;
        right:0%;
    }
    .icons{
        position:absolute;
        top:10%;
        z-index:11;
        left:0;
        display:flex;
        align-self:start;
        justify-content:space-between;
        color:#fff;
        i{
            border:solid 2px #fff;
            border-radius:100%;
            font-size:25px;
            padding:10px;
            margin:5px;
            font-weight:100!important;
        }
    }
`
export const Navbar = styled.div`
    display:flex;
    flex-direction:row-reverse;
    width:100%;
    background:transparent;
    justify-content:space-between;
    align-items:center;

    
    .nav-item{
        color:#FFFFFF;
        font-size:50px;
        list-style:none;
        text-align:left;
    }
    
`
