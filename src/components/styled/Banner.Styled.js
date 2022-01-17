import styled from "styled-components";

export const StyledBanner = styled.div`
 background-color:#B7253C;
 height:100vh;
 display:flex;
 justify-content:space-between;
 color:${ ( {theme})=>theme.colors.whitey};
 

 .inner{
     position:relative;
     display:flex;
     justify-content:space-around;
     width:45%;

     
     .inner-pics{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;

        .marcus{
            width:75%;
            position:absolute;
            top:8%;
            right:-5%;
            z-index:10;
        }
        .logos{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 3%;
            margin-left:-40%;
            
            img{
                width:20%;
            }
        }
    }
    .inverted{
        width:30%;
        margin-right:10%;
        .greet{
            transform: rotate(-90deg);
            font-size: 75px;
            margin-top:157%;
            color:#fff;
            font-family:${({theme})=>theme.fonts.fontsemib};
        }
        .hr{
            margin-top: 150%;
            margin-left:5%;
            height:32vh;
            width:3px;
            background:${({theme})=>theme.colors.whitey};
            margin:53%;
        }
    }
 }
 .item{
     background-color:${({theme})=>theme.colors.bluey};
     width:60%;
     >div{
        h2{
            color:${({theme})=>theme.colors.whitey};
            font-family:${({theme})=>theme.fonts.fontbold};
            font-size:90px;
        }
        p{
            font-size:50px;
            diplay:flex;
            justify-content:center;
            align-items:center;
            width:90%;
            font-family:${({theme})=>theme.fonts.fontsemib};
        }
        button{
            font-size:40px;
            background-color:transparent;
            color:${({theme})=>theme.colors.whitey};
            border:2px solid ${({theme})=>theme.colors.whitey};
            display:flex;
            align-self:flex-start;
            margin-left:6%;
            padding:10px;
            font-family:${({theme})=>theme.fonts.fontsemib};
        }
     }
 }
`
