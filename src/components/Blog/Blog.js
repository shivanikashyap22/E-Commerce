import React from 'react'
import * as Styled from "./style";
import { journal1, journal2, journal3 } from './data';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../Footer/SiteFooter';
import RepeatedContent from '../RepeatedContent/RepeatedContent';
import Banner from '../Banner/Banner';
import heroImage1 from '../../assets/images/heroImage1.jpg'


const Blog = () => {
    return (
        <>
        <SiteHeader/>
        <Banner image={heroImage1} altImg="Description of the Blog image" title="Blog Page" link="Home" nameLink="Blog"/>

            <Styled.Blogs>
                <div className="fashion">
                    {journal1?.map((item, index) => {
                        return <>
                            <div>
                                <div className="img">
                                    <img src={item.img} alt="/" className="fashionImg" />
                                </div>
                                <div className="titleDay">
                                    <div >
                                        <h3 className="date">{item.date}</h3>
                                        <span className="month">{item.month}</span>
                                    </div>
                                    <div >
                                        <div className="title"> {item?.title}</div>

                                        <div className="fas">{item.fashion}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>

                <div className="fashion">
                    {journal2?.map((item, index) => {
                        return <>
                            <div>
                                <div className="img">
                                    <img src={item.img} alt="/" className="fashionImg" />
                                </div>
                                <div className="titleDay">
                                    <div >
                                        <h3 className="date">{item.date}</h3>
                                        <span className="month">{item.month}</span>
                                    </div>
                                    <div >
                                        <div className="title"> {item?.title}</div>

                                        <div className="fas">{item.fashion}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
                <div className="fashion">
                    {journal3?.map((item, index) => {
                        return <>
                            <div>
                                <div className="img">
                                    <img src={item.img} alt="/" className="fashionImg" />
                                </div>
                                <div className="titleDay">
                                    <div >
                                        <h3 className="date">{item.date}</h3>
                                        <span className="month">{item.month}</span>
                                    </div>
                                    <div >
                                        <div className="title"> {item?.title}</div>

                                        <div className="fas">{item.fashion}</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>

            </Styled.Blogs>
            <RepeatedContent/>
            <SiteFooter/>
        </>
    )
}

export default Blog
