import React from 'react'
import * as Styled from "./style";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import RepeatedContent from '../RepeatedContent/RepeatedContent';
import SiteFooter from '../Footer/SiteFooter';
import SiteHeader from '../SiteHeader/SiteHeader';
import Banner from '../Banner/Banner';
import  heroImage from '../../assets/images/heroImage.jpg'

const Contact = () => {
  return (
   <>

   <SiteHeader/>
   <Banner image={heroImage} altImg="Contact Image" title="Contact Us" link="Home" nameLink="Contact Us"/>

   <Styled.Contact>
    <Styled.Message className='container'>
        <Styled.Touch >
            <div className='firstCont'>
                <h2 className='touch'>Get In Touch</h2>
               <div>
                <p className='para'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <ul>
               <li>
                <a href=''><IoCallOutline/> +1650-243-0000</a>
               </li>
               <li><a href=''><MdMessage/> info@yourcompany.com</a></li>
               <li><a href=''><FaLocationDot/> North Melbourne VIC 3051, Australia</a></li>
               </ul>
               <div className='iconsLink'>
                Social Link
                <div className="icons">
              <FaFacebookF/><FaTwitter/><FaYoutube/><FaSquareInstagram/>
              </div>
               </div>
              
               </div>
            </div>

        </Styled.Touch>
        <Styled.Mess>
            <div>
                <h2 className='touch'>Send Us A Message</h2>
            </div>
            <div>
                <form className='inputs'>
                <Styled.Input type="text" placeholder="Name"/>
                <Styled.Input type="email" placeholder="Email"/>
                <Styled.TextArea type="text" placeholder="Message"/>
                <div className='check'>
                <input type="checkbox" />
                 <Styled.Label for="vehicle1"> I agree all the <b>terms and conditions </b> </Styled.Label>
                 </div>
                 <button className='submit'>Submit</button>
                </form>
            </div>

        </Styled.Mess>

    </Styled.Message>
    <RepeatedContent/>
   </Styled.Contact>
   <SiteFooter/>
   </>
  )
}

export default Contact
