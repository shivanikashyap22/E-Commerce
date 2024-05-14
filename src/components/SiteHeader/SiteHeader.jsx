
import React from "react";
import * as Styled from "./style";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";

const SiteHeader = () => {
    return (
      <>
      <Styled.MainContainer>
     
          <div className="container-fluid ">
            <div className="row main">
              <div className="col-md-4 header-contact">
                <p>Let's talk! <strong>+57 444 11 00 35</strong>
                </p>
              </div>
              <div className="col-md-4 shipping-purchase text-center">
                <p>Free shipping on a purchase value of $200</p>
              </div>
              <div className="col-md-4 col-sm-12 user-items">
                <IoPersonOutline/><BsCart2/><IoMdHeartEmpty/><LiaSearchSolid/>
              </div>
            </div>
          </div>
   
        </Styled.MainContainer>
      <Styled.Header className="site-header">
        <Styled.SiteIdentity className="site-identity">
          <h1><Styled.SiteMainLink href="#" className="ultras">Ultras.</Styled.SiteMainLink></h1>
         <Styled.SiteSubLink href="#">Casual Wear Store</Styled.SiteSubLink>
        </Styled.SiteIdentity>  
        <Styled.Navigation className="site-navigation">
        <Styled.DataNav>
        <Styled.NavLinks className="container">
         
          <Styled.Nav>
            <Styled.NavItem>
              <Styled.NavLink >Home</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem>
                  <Styled.SubNavLink to="/">Home</Styled.SubNavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink to="/about">About</Styled.NavLink>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink>Shop</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem>
                  <Styled.SubNavLink to="/shop">Shop</Styled.SubNavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink>Pages</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem>
                  <Styled.SubNavLink to="/styles">Styles</Styled.SubNavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem>
                  <Styled.SubNavLink to="/thankyou">Thank You </Styled.SubNavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink>Blog</Styled.NavLink>
              <Styled.DropdownMenu>
                <Styled.DropdownItem>
                  <Styled.SubNavLink to="/blog">Blog</Styled.SubNavLink>
                </Styled.DropdownItem>
                <Styled.DropdownItem>
                  <Styled.SubNavLink to="/single-post">Single Post</Styled.SubNavLink>
                </Styled.DropdownItem>
              </Styled.DropdownMenu>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink to="/contact">Contact</Styled.NavLink>
            </Styled.NavItem>
       
           
          </Styled.Nav>
        </Styled.NavLinks>
      </Styled.DataNav>
        </Styled.Navigation>
      </Styled.Header>
    
    </>
    );
  };
  
  export default SiteHeader;






