import styled from "styled-components";
import banner1 from '../../assets/images/banner1.jpg'

export const MainContainer = styled.div`
`
export const Model=styled.div`

display:flex;
justify-content:center;
margin:80px 0px;
.model{
    width:1290px;
    border-radius:20px;
    height:660px;
        object-fit: cover; 
 object-position: top;
}

`

export const Collection=styled.div`
position:absolute;
right: 60px;
bottom: 90px;
display:flex;
.categories{
    font-size: 22px;
    font-weight: 300;
    line-height: 2;
    color: #8d8d8d;
     margin:15px 0px;
}
.item-title{
    font-size: 4.8em;
    line-height: 1;
    font-weight: 900;
     margin:15px 0px;
}
.para{
    font-size: 22px;
    line-height: 1.8;
    margin: 0 0 20px 0;
    color: #8d8d8d;
        width: 80%;
        margin:15px 0px;
}
.col1{
    flex:0.5;
}
.col2{
    flex:0.5;
}
.shop{
    font-weight: 500;
    text-transform: capitalize;
    font-size:24px;
    cursor:pointer;
    color:#6995B1;
    text-decoration:none;
    transition: 0.3s color ease-out;
    color:black;
    margin-top:20px;
}
.shop:hover{
    color:#6995B1;
}
`
export const ModelData=styled.div`
position:relative;
`



export const Quote = styled.div`
text-align:center;
margin:80px 0px;
.title{
    font-size: 2.6em;
    font-weight: 700;
}
blockquote{
    width: 50%;
    margin: 0 auto;
    padding: 0;
    display: block;
    padding: 50px 0;
    color:gray;
    font-size: 1.5em;
    line-height: 1.4em;
    font-weight: 500;
    letter-spacing: 2px;
    font-style: normal;
}
.seus{
    margin: 0 auto;
    padding: 0;
    display: block;
    color:gray;
    font-size: 1.5em;
    line-height: 1.4em;
    font-weight: 500;
    letter-spacing: 2px;
    font-style: normal;
}
`

export const Coupons = styled.div`
margin:80px 0px;
padding:0px 40px;
.title{
    font-size: 2.6em;
    font-weight: 700;
}
.lorem{
    font-size: 1em;
    font-size: 18px;
    line-height: 1.8;
    color:gray;
    margin-top:50px;
}
.btn-dark {
    font-weight: 700;
    height: 65px;
    border-radius: 0 4px 4px 0;
    margin:0;
}
.form{
    display: flex;
    margin-top:50px;
}
`

export const Input = styled.input`
width: 50%;
height: 65px;
background:#fafafa;
border: 1px solid #dbdbdb;
border-radius: 4px 0 0 4px;
padding-left: 25px;

`

export const Bio = styled.div`

    display:flex;
    align-items:center;
    padding:0px 40px;
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
export const Sales = styled.div`
padding:0px 40px;
.title{
    font-size: 2.6em;
    font-weight: 700;
    margin: 50px 0;
}
.salesImages{
    display:flex;
    gap:40px;
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
`


export const Content=styled.div`
padding:0px 40px;
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
`
export const Products=styled.div`
margin:80px 0px;
padding-top: 7em;
padding-bottom: 7em;
background:#fafafa;

`

export const ImageShoes=styled.div`
position: absolute;
width: 50%;
left: 11%;
bottom: 36px;
}

.categories{
    font-size: 22px;
    font-weight: 300;
    line-height: 2;
    color: #8d8d8d;
     margin:15px 0px;
}
.item-title{
    font-size: 2.5em;
    line-height: 1;
    font-weight: 900;
     margin:15px 0px;
}

.shop{
    font-weight: 500;
    text-transform: capitalize;
    font-size:20px;
    cursor:pointer;
    color:#6995B1;
    text-decoration:none;
    transition: 0.3s color ease-out;
    color:black;
    margin-top:20px;
}
.shop:hover{
    color:#6995B1;
}
`

export const Images=styled.div`
margin:50px 0px;
display:flex;
gap:30px;
.img{
   width:100%;
    object-fit: cover;
margin-left:30px;
    object-position: top;
    border-radius:10px;
}

.image1{
    width: 725px;
    height: 660px;
}
.image2{
    position:relative;
    width:510px;
}
.image3{
    position:relative;
    width:510px;
}
.imagesportion{
    display: flex;
    flex-direction: column;
    gap: 17px;
}
.wear{
    flex:0.5;
    position:relative;
}
.shoes{
    flex:0.5;
}
`
export const ImageData2=styled.div`

position: absolute;
width: 30%;
left: 66%;
bottom: 22%;


.categories{
    font-size: 22px;
    font-weight: 300;
    line-height: 2;
    color: #8d8d8d;
     margin:15px 0px;
}
.item-title{
    font-size: 3em;
    line-height: 1;
    font-weight: 900;
     margin:15px 0px;
}
.para{
    font-size: 22px;
    line-height: 1.8;
    margin: 0 0 20px 0;
    color: #8d8d8d;
        width: 80%;
        margin:15px 0px;
}

.shop{
    font-weight: 500;
    text-transform: capitalize;
    font-size:24px;
    cursor:pointer;
    color:#6995B1;
    text-decoration:none;
    transition: 0.3s color ease-out;
    color:black;
    margin-top:20px;
}
.shop:hover{
    color:#6995B1;
}
`
export const WearData=styled.span`
position:absolute;
width:30%;
left:33%;
bottom: 0px;

.categories{
    font-size: 22px;
    font-weight: 300;
    line-height: 2;
    color: #8d8d8d;
     margin:15px 0px;
}
.item-title{
    font-size: 4.8em;
    line-height: 1;
    font-weight: 900;
     margin:15px 0px;
}
.para{
    font-size: 22px;
    line-height: 1.8;
    margin: 0 0 20px 0;
    color: #8d8d8d;
        width: 80%;
        margin:15px 0px;
}

.shop{
    font-weight: 500;
    text-transform: capitalize;
    font-size:24px;
    cursor:pointer;
    color:#6995B1;
    text-decoration:none;
    transition: 0.3s color ease-out;
    color:black;
    margin-top:20px;
}
.shop:hover{
    color:#6995B1;
}
`



export const Banner=styled.div`
background: url(${banner1});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
width: 1349px;
    height: 90vh;
    min-height: 700px;
    .homeBanner{
        width: 50%;
        margin-left:50px;
        height:100%;
        display:flex;
align-items:center;
        flex-direction:column;
        justify-content: center;

    }
.banner-title {
    font-size: 5.1em;
    font-weight: 800;
    line-height: 1em;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color:#191919;
}
p{
    margin: 35px 0 60px;
    font-size: 18px;
    line-height: 1.8;
    color:#8d8d8d;
}
.btn-wrap{
    background-color:#fff;
    color:#191919;
    font-weight: 500;
    text-transform: capitalize;
    width: fit-content;
    border:none;
    padding: 1.1em 3.0em;
    font-size: 1.0em;
  gap:10px;
    font-size:22px;

}
`

export const FeaturedProd=styled.div`
margin:100px 0px;
padding:0px 40px;
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
.title{
    font-size: 2.6em;
    font-weight: 700;
    margin-bottom:20px; 
    
}
.articlesFeat{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.productImages{
    display:flex;
    gap:30px;
    margin-top:50px;
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
`


