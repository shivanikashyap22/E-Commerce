import styled from "styled-components";

export const Contact=styled.div`
`

export const Message=styled.div`
display:flex;
gap:30px;

`
export const Touch=styled.div`
flex:0.5;
.touch{
    font-size: 2.6em;
    font-weight: 700;
    line-height: 1.4;
    margin: 25px 0;
    text-transform: capitalize;
}
.para{
    font-size: 18px;
    line-height: 1.8;
    margin: 0 0 20px 0;
    color:#8d8d8d;
    font-weight: 400;
    
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
        color: black;
    text-decoration: none;
    transition: 0.3s color ease-out;
        font-size: 18px;
    font-weight: 300;
    line-height: 2;
}


.iconsLink{
    font-size: 1.4em;
    line-height: 1.4;
    margin: 25px 0;
    text-transform: capitalize;
}
.icons{
    display:flex;
    gap:20px;
    font-size:20px;
    margin: 25px 0;
   
}

`
export const Input=styled.input`
    height: 50px;
    padding: 6px 15px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
margin-bottom:30px;
    &::placeholder{
        padding: 6px 15px;
        color:#dbdbdb;
        font-weight:400;
    }
`
export const TextArea=styled.textarea`
height: 180px;
padding: 6px 15px;
border: 1px solid #dbdbdb;
border-radius: 4px;
box-shadow: none;
box-sizing: border-box;
margin-bottom:30px;
&::placeholder{
    padding: 6px 15px;
    color:#dbdbdb;
    font-weight:400;
}
`
export const Mess=styled.div`
flex:0.5;

.touch{
    font-size: 2.6em;
    font-weight: 700;
    line-height: 1.4;
    margin: 25px 0;
    text-transform: capitalize;
}
.inputs{
    display:flex;
    flex-direction:column;
}
.check{
    display:flex;
    align-items:center;
    gap:10px;
}
.submit{
    background: black;
    color: white;
    padding: 1.1em 3.0em;
    font-size: 20px;
    display: block;
    margin: .85em 0;
    width: 100%;
    text-align: center;
}
.submit:hover{
   background: #6995B1;
}
`
export const Label=styled.label`
font-size: 18px;
font-weight: 300;
line-height: 2;
color: #8d8d8d;
font-weight: normal;

`