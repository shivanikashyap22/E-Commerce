import React from 'react'
import * as Styled from "./style";
import postImg1 from '../../assets/images/postImg1.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from 'react-icons/fa6';
import SiteFooter from '../Footer/SiteFooter';
import SiteHeader from '../SiteHeader/SiteHeader';
import RepeatedContent from '../RepeatedContent/RepeatedContent';
import Journal from '../Journal/Journal';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
const SingleSection = () => {
  return (
  <>
<SiteHeader/>
<Styled.Banner>
<div className='container cont'>
            <div className='bread-data'>
            <div className="breadcrumbs">
              <span className="item">
                <Link to="/" className='link'> Home / </Link>
              </span>
              <span className="item">
                <Link to="/blog" className='link'> Blog /  </Link>
              </span>
              <span className="item">Single Post</span>
            </div>
                
                </div>
        </div>
</Styled.Banner>
<div className='container-fluid'>
  <Styled.SinglePost  >
           
           <Styled.Fashion >
            <div>
              <div className='post-meta'>
            <span className="datee">Feb 22, 2023 /</span>
            <a href="" className="blog-categories">Fashion</a>
            </div>
            <h1 className="page">Top 10 Casual Look Ideas To Dress Up Your Kids</h1>
            <div className="feature-image">
              <img src={postImg1} alt="post image" className="jarallax-img"/>
            </div>
            </div>
           </Styled.Fashion>
           <Styled.Shortcuts>
            <div>
              <p><strong>There are shortcuts to happiness, and dressing is one of them.</strong></p>
              <p>Fashion is like dreaming with your feet! Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisusmod tempor incidunt ut elit et.</p>
              <blockquote>Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.</blockquote>
             <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, <a href="" className='casual'>Casual Product</a> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <p>
                <strong>Are you amazed ?</strong>
              </p>
              <ul className="inner-list">
                <li>Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
                <li>Laculis sit sapien hac odio elementum egestas neque.</li>
              </ul>
              <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,<span className="highlight">quis nostrud exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            
             
                <div className="block-tag">
                  <ul className="list-unstyled d-flex">
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Fashion</a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Hoodie</a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Casual</a>
                    </li>
                  </ul>
                </div>
          <div className='shres'>
          <div className="element-title">Share:</div>
          <div className="icons">
              <FaFacebookF/><FaTwitter/><FaYoutube/><FaSquareInstagram/>
              </div>
          </div>
          <div id="single-post-navigation">
              <hr/>
              <div className="post-Nav">
                <a  className="previous" href="#" title="Previous Post">
                  <span className='prev'>Previous</span>
                  <h3 className="page-nav-title">Latest trends of wearing street wears supremely</h3>
                </a>
                <a  className="previous" href="#" title="Next Post">
                  <span className='prev'>Next</span>
                  <h3 className="page-nav-title">Types of comfortable clothes ideas for women</h3>
                </a>
              </div>
              <hr/>
            </div>
            
            
            </div>
            
           </Styled.Shortcuts>

  </Styled.SinglePost>
  </div>
  <Journal/>
  <RepeatedContent/>
  <SiteFooter/>

  </>
  )
}

export default SingleSection
