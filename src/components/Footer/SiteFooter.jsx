import * as Styled from "./style";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import mastercard from '../../assets/images/mastercard.png'
import americanExpress from '../../assets/images/americanExpress.jpg'
import visaIcon from '../../assets/images/visaIcon.jpg'

const SiteFooter = () => {
  return (
    <Styled.FooterSection className="bg-footer">
      <Styled.Container className="container" >
        <div className="row">
          <div className="col-lg-3">
            <div>
              <Styled.FooterHeading >Ultras</Styled.FooterHeading>
              <Styled.FooterLink >
                <Styled.FooterItem ><a href="#" className="about">About us</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Conditions </a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Our Journals</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Careers</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Affiliate Programme</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Ultras Press</a></Styled.FooterItem>
              </Styled.FooterLink>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <Styled.FooterHeading >Customer Services</Styled.FooterHeading>
              <Styled.FooterLink >
                <Styled.FooterItem><a href="#" className="about">FAQ</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Contact</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Privacy Policy</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Returns & Refunds</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Cookie Guidelines</a></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="about">Delivery Information</a></Styled.FooterItem>
              </Styled.FooterLink>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <Styled.FooterHeading >Contact Us</Styled.FooterHeading>
              <Styled.FooterLink >
                <Styled.FooterItem><p className="para">Do you have any questions or suggestions? </p></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="mail">ourservices@ultras.com</a></Styled.FooterItem>
                <Styled.FooterItem><p className="para">Do you need assistance? Give us a call. </p></Styled.FooterItem>
                <Styled.FooterItem><a href="#" className="mail">+57 444 11 00 35</a></Styled.FooterItem>
              </Styled.FooterLink>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <Styled.FooterHeading >Forever 2018</Styled.FooterHeading>
              <Styled.FooterLink >
                <p className="para">Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper in orci, ultrices integer eget arcu. Consectetur leo dignissim lacus, lacus sagittis dictumst.</p>
              </Styled.FooterLink>
           <div className="icons">
              <FaFacebookF/><FaTwitter/><FaYoutube/><FaSquareInstagram/>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </Styled.Container>
      <div className="foot">
          <div className=" container fotterEnd">
      <div className="free">Freebies by <a href="" className="link">Templates Jungle</a> Distributed by <a href="" className="link">ThemeWagon</a></div>
        <div className="free">Payment Option
        <img src={visaIcon} alt=""/>
        <img src={americanExpress} alt=""/>
        <img src={mastercard} alt=""/>
        </div>
      </div>
      </div>
    </Styled.FooterSection>
  );
};

export default SiteFooter;