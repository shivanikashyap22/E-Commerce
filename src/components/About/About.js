import React from 'react'
import SiteHeader from '../SiteHeader/SiteHeader'
import SiteFooter from '../Footer/SiteFooter'
import Journal from '../Journal/Journal'
import RepeatedContent from '../RepeatedContent/RepeatedContent'
import Banner from '../Banner/Banner'
import heroImage from '../../assets/images/heroImage.jpg'
import * as Styled from "./style";
import aboutImg from '../../assets/images/aboutImg.jpg'
import { shipping } from '../MidSection/data'
import { IoArrowBack, IoArrowForwardSharp } from 'react-icons/io5'
import { IoMdQuote } from 'react-icons/io'

const About = () => {
    return (
        <>
            <SiteHeader />
            <Banner image={heroImage} altImg="Description of the Blog image" title="About Us" link="Home" nameLink="About" />
            <Styled.About className='container-fluid'>
            <Styled.Shipping >
                    {shipping?.map((item, index)=>{
                        return <>
                         <div className="itemShip">
                            <b>{item?.data}</b> {item?.money}
                        </div>
                        </>
                    })}
                       
                       

                </Styled.Shipping>
                <Styled.MainCont>
                    <Styled.Left>
                        <div className='img'>
                            <img src={aboutImg} alt='' className='aboutImg' />
                        </div>
                    </Styled.Left>
                    <Styled.Right>
                        <div className="detail">
                            <div className="display-header">
                                <h2 className="section-title">How was Ultras Store started?</h2>
                                <p>Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at.
                                    <br />
                                    Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et. </p>
                                <div className="btn-wrap">
                                    <a href="" className="btn" >Shop our store<i class="icon icon-arrow-io"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Styled.Right>


                </Styled.MainCont>
                <div>
                    <Styled.Bio className="main">
                        <div className="col-md-2 quo"><IoMdQuote /></div>
                        <div className="col-md-8">
                            <p className="para">“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                            <p className="maggie">By Maggie Rio</p>
                            <div className="arrow">
                                <IoArrowBack />
                                <IoArrowForwardSharp/>
                            </div>
                        </div>
                    </Styled.Bio>

                </div>
            </Styled.About>
            <Journal />
            <RepeatedContent />
            <SiteFooter />
        </>
    )
}

export default About;
