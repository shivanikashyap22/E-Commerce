import styled from "styled-components";

export const About=styled.div`
margin-bottom:50px;
`
export const MainCont=styled.div`
display:flex;
`
export const Left=styled.div`
flex:0.5px;
.img{
    width:618px;
    height:665px;
   
}
.aboutImg{
    width:100%;
    padding: 0px 0px 0px 40px;
}
`



export const Shipping=styled.div`
display:flex;
gap:30px;
margin:90px 0px;
padding:20px 0px;

.itemShip{
    padding:30px;
    line-height: 1.2;
    font-weight: 400;
    margin: 20px 0;
    font-size:22px;
}

`
export const Right=styled.div`
flex:0.5px;
.detail{
    padding: 0 60px;
}
.section-title{
    font-size: 2.6em;
    font-weight: 700;
}
p {
    font-size: 18px;
    line-height: 1.8;
    margin: 0 0 20px 0;
    color:#8d8d8d;
    padding:20px 0px;
}
.btn{
    display:flex;
    align-items:center;
    background: #191919;
    color: #fff;
    padding: 1.1em 3.0em;
    font-size: 1.0em;
    font-weight: 500;
    text-transform: capitalize;
    width: fit-content;
    border-radius:0;
    font-size:20px;
}
`

export const Bio = styled.div`

    display:flex;
    align-items:center;
    padding:50px 40px;

.para{
    font-size: 1.3em;
    color: #8d8d8d;
    font-size: 23px;
    line-height: 1.8;
 
}
.arrow{
    font-size: 1.5em;
    font-weight: 600;
    color: #8d8d8d;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 10px;
    left: 23px;
    display:flex;
    gap:10px;
    margin-top:10px;
}
.maggie{
    font-weight: 700;
    color: #6995B1;
    font-size: 20px;
}
.quo{
    font-size: 12em;
    color:#dbdbdb;
    display: flex;
        line-height: 1;
}
`