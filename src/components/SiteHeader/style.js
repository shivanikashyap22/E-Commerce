/* style.js */

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
`;

export const NavBtn = styled.div`
  cursor: pointer;
`;

export const Nav = styled.ul`
  background: white;
  list-style: none;
  display: flex;
    gap: 4rem;
`;

export const NavItem = styled.li`
  position: relative;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  background: white;
  color: #191919  ;
  display: block;
  display: flex;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color:#6995B1;
    text-decoration: none;
  }
`;

export const SubNavLink=styled(Link)`

cursor: pointer;
text-decoration: none;

background: #191919;
color: #fff  ;
display: block;
display: flex;
text-transform: capitalize;
font-size: 20px;
font-weight: 600;
padding-bottom: 6px;
cursor: pointer;
text-decoration: none;

&:hover {
  color:#6995B1;
  text-decoration: none;
}
`
export const DropdownMenu = styled.ul`
  padding-left: 5px;
  position: absolute;
  width: 10em;
  left: -50px;
  background:#191919;
  display: none;
  list-style: none;
  ${NavItem}:hover & {
    display: block;
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }
`;

export const DropdownItem = styled.li`
background:#191919;
color:#fff;
`;

export const SubDropdownMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 100%;
  background: #555;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;

`;
export const DataNav = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background: white;

`;
export const Image = styled.div`
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    color: #fff;
  }
  .donateBtn {
 
    position: relative;
  }
  .BtnDonate:hover {
    background: #f1ae44;
    cursor: pointer;
  }
  .BtnDonate {
 
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0 30px 0 35px;
    line-height: 49px;
    border: none;
    border-radius: 0;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
  width: 40%;
  .imgLogo {
    display: flex;
    justify-content: space-between;
  }
`;
export const NavItems = styled.div`
  display: flex;
  gap: 40px;
  color: #818181;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  margin: 0 22px;
  padding-bottom: 17px;
  cursor: pointer;
  a {
    color: #818181;
    text-decoration: none;
  }
  a:hover {
    color: #818181;
    text-decoration: none;
  }
`;
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0px;
`;

export const MainContainer=styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  
    color:#8d8d8d;
    padding:0px 30px;
    .shippin-purchase{
      margin-top: 14px;
    }
    .header-contact{
      margin-top: 14px;
      font-size:20px;
    }
    .ab li{
        color: #fff;
        background: darkorange;
        display: block;
        float: left;
        padding: 1rem;
        position: relative;
        text-decoration: none;
        transition-duration: 0.5s;
      }
    .ab li:hover {
      background: red;
      cursor: pointer;
    }
.user-items{
  display: flex;
  justify-content: end;
  align-items: center;
  font-size:20px;
  gap:5px;
}
.main{
  display:flex;
  align-items:center;
}
`
export const SiteIdentity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  h1 {
    font-size: 40px;
   font-weight:700;
   
  }
`;

export const Navigation = styled.nav`
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  .dropdown{
    display: none;
  }

  li {
       display: block;
           position: relative;
               line-height: normal;
    margin: 1.4em 1em 1em 1em;
  }
`;

export const SiteLink = styled(Link)`
  text-decoration: none;
      padding: 20px 40px; 
  color: var(--dark-color);
    font-weight: 500;
font-size:20px;
  
`;
export const SiteSubLink=styled.a`
text-decoration: none;
color:gray;
`

export const SiteMainLink = styled.a`
  text-decoration: none;
      padding: 20px 40px; 
      color: Black;

.ultras{

    font-weight: 500;
font-size:40px;
}
 
`;

















