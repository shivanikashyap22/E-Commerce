import styled from "styled-components";

export const Shop=styled.div`

display:flex;
`
export const Products=styled.div`

`
export const Content=styled.div`

padding:50px 40px;
.title{
    font-size: 2.6em;
    font-weight: 700;
 margin: 50px 0;
 
}

.productImages{
    display:flex;
    gap:30px;
    margin-top:50px;
}
.tabs{
    display: flex;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 40px;
    gap:40px;
    list-style:none;
}
.img{
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    width: 290px;
    height: 350px;
}
a{
    text-decoration: none;
    font-size: 1.7em;
   color:black;
   font-weight:600;
}
.price{
    font-size: 1.7em;
    color:#6995B1;
}
.items{
    font-weight: 500;
    color:#8d8d8d;
    cursor: pointer;
    transition: 0.2s all;
    font-size:20px;
}
li:hover{
    color:#6995B1;
}
`

export const InShort=styled.div`
padding: 50px 0px;
flex:0.3;
.btn:hover{
    background:#6995B1;
}
.btn{
        background-image: none;
    background:black;
    text-decoration: none !important;
    display: inline-block;
    position: relative;
    border: 2px solid transparent;
    border-radius: 0;
    
    height:50px;width:100%;

    font-size: 25px;
    font-weight: 900;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    z-index: 1;
    cursor: pointer;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  
}

.form{
    display:flex;

}
`

export const Input=styled.input`
height: 50px;
    padding: 6px 15px;
    border: 1px solid #dbdbdb;
    border-radius: 4px 0px 0px 4px;
    
    box-shadow: none;
    box-sizing: border-box;
margin-bottom:30px;
    &::placeholder{
        padding: 6px 15px;
        color:#dbdbdb;
        font-weight:400;
    }
    
`


export const Tags=styled.div`
.title{
    letter-spacing: 0;
    font-size: 1.3em;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 20px;
}
ul{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
}
li{
    margin-bottom: 5px;
    outline: 0;
}
a{
    color:#8d8d8d;
    font-size: 18px;
    line-height: 2;
    text-decoration: none;
    transition: 0.3s color ease-out;
}
a:hover{
    color:#6995B1;
}
`