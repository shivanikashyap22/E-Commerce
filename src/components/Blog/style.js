import styled from "styled-components";

export const Blogs=styled.div`
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
    margin:80px 0px;
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


export const SinglePost=styled.div`
display:flex;
gap:40px;
padding:40px;
margin:50px 0px;
`

export const Banner=styled.div`
 margin: 10px 0px;
background-color:#fafafa;
padding-top: 2em;
padding-bottom: 2em;
.breadcrumbs{
    font-size:20px;
    color:#8d8d8d;
    display:flex;
    justify-content:center;
   
    
}
.link{
    color:#191919;
    text-decoration:none;
    font-size:20px;
}
`

export const Fashion=styled.div`
flex:0.5;

.post-meta{
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.14em;
    color: #8d8d8d;
}

.post-meta a{
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.14em;
    color: #8d8d8d;
    text-decoration:none;
}
.feature-image{
    width:618px;
    height:337px;
}
.jarallax-img{
    width:100%;
    height: auto;
    vertical-align: middle;
}
.page{
    font-size: 3.2em;
line-height: 1.4;
margin: 30px 0px;
}

`

export const Shortcuts=styled.div`
flex:0.5;
.previous{
    display:flex;
    flex-direction:column;
}
.previous:hover{
    color:#6995B1;
}
.post-Nav a{
    text-decoration:none;
    
}
.prev{
    color:#191919;
    font-size:22px;
}
.shres{
    display:flex;
    gap:10px;
    align-items:center;

}
.icons{
    display:flex;
    gap:10px;
    font-size:20px;
}
blockquote{
    font-size: 1.5em;
    line-height: 1.4em;
    font-weight: 500;
    letter-spacing: 2px;
    font-style: normal;
    margin: 0 0 20px;
    padding: 20px 40px;
}
h3{
    margin-top: 10px;
    transition: all 0.3s ease-in;
    color:#191919;
    font-size: 1.5em;
    line-height: 1.4;

}

p{
    font-size: 18px;
    line-height: 1.8;
    margin: 0 0 20px 0;
    color:#8d8d8d;
}
ul{
        list-style-type: disc;
    padding-left: 0;
    margin-top: 0;
        list-style: circle inside;
            font-size: 18px;
            color:#8d8d8d;

}
.casual{
        color: var(--primary-color);
    color:#6995B1;
    text-decoration: none;
    transition: 0.3s color ease-out;
}
.hoghlight{
        background:#6995B1;
    color: #fff;
    padding: 1px 5px;
}
.list-unstyled {
    list-style: none;
   
}
block-tag{
    display:flex;
    gap:10px;
}
.block-tag li{
    margin-right: 10px;
}

ul li, ol li {
    margin-bottom: 5px;
    outline: 0;
    list-style: none;
}
.btn.btn-rounded {
    border-radius: 6px;
}
.btn.btn-small {
    padding: 0.8em 1.8em;
    font-size: 15px;
}
.element-title{
    color:#8d8d8d;
    font-size:20px;
}
hr{
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-width: 0;
    border-top: 1px solid #dbdbdb;
}
.post-Nav{
    display:flex;
    justify-content:space-between;
align-items:center;
}
`

