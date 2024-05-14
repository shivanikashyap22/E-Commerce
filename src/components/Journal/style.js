import styled from "styled-components";

export const Journal=styled.div`
padding:0 40px;
.journalIcons{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.articles{
        color: #191919;
    text-decoration: none;
    transition: 0.3s color ease-out;
    font-weight: 500;
    text-transform: capitalize;
    width: fit-content;
    font-size: 18px;
    line-height: 2;
}
.articles:hover{
    color:#6995B1;
}
.fashion{
    display:flex;
    gap:20px;
}
.section-header{
    font-size: 2.6em;
    font-weight: 700;
    margin-bottom:20px; 
    
}
.img{
    width:402px;
    height:245px;
}
.fashionImg{
    width:100%;
}
.titleDay{
    display:flex;
    align-items:center;
    margin-top:20px;
}
.title{
    transition: 0.3s color ease-out;
    font-size: 1.5em;
    font-weight: 700;
}
.fas{
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8d8d8d;
    margin-top:10px;
    transition: 0.3s color ease-out;

}

.date{
    font-size: 2.4em;
    line-height: 1;
    font-weight: 200;
    color:#6995B1;
}
.month{
    line-height: 1.4;
    font-weight: 600;
    color: gray;

}
`