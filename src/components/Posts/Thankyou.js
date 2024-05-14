import React from 'react'
import * as Styled from "./style";
import SiteHeader from '../SiteHeader/SiteHeader';
import RepeatedContent from '../RepeatedContent/RepeatedContent';
import SiteFooter from '../Footer/SiteFooter';
import Journal from '../Journal/Journal';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Thankyou = () => {
  return (
  <>
  <SiteHeader/>
<Styled.MainCont>
  <Styled.Thankyou className='container-fluid'>
  <Styled.LeftCont>
    <div>
    <h1 className="page-title">Thank You!</h1>
    <p className='para'>We will get back to you as soon as possible.</p>
    </div>
  </Styled.LeftCont>
  <Styled.RightCont>
    <div>
    <h1 className="page-title">Get in touch</h1>
    <div className="row">
                <div className="d-flex flex-wrap mains">
                  <div className="col-md-6 border-right border-bottom">
                    <div className="detail">
                      <h3>Phones</h3>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon icon-phone"></i>+1650-243-00023
                        </li>
                        <li>
                          <i className="icon icon-phone"></i>+1650-243-00021
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 border-bottom">
                    <div className="detail">
                      <h3>Emails</h3>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon icon-envelope"></i>
                          <a href="">info@yourcompany.com</a>
                        </li>
                        <li>
                          <i className="icon icon-envelope"></i>
                          <a href="">info@yourcompany.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 border-right">
                    <div className="detail">
                      <h3>Address</h3>
                      <ul class="list-unstyled">
                        <li>
                          <i class="icon icon-location"></i>
                          <span>North Melbourne VIC 3051, Australia</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail">
                      <h3>Social Links</h3>
                      <div className="icons">
              <FaFacebookF/><FaTwitter/><FaYoutube/><FaSquareInstagram />
              </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  </Styled.RightCont>
  </Styled.Thankyou>
  </Styled.MainCont>
  <Journal/>
  <RepeatedContent/>
  <SiteFooter/>
  </>
  )
}

export default Thankyou

