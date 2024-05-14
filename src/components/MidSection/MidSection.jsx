
import React from "react";
import * as Styled from "./style";
import { IoMdQuote } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { FeaturedImg, JacketImg, ShoesImg, dataImg, instaData, journal, productImg, shipping } from "./data";
import model from '../../assets/images/model.jpg'
import collection from '../../assets/images/collection.jpg'
import collection2 from '../../assets/images/collection2.jpg'
import collection3 from '../../assets/images/collection3.jpg'
import RepeatedContent from "../RepeatedContent/RepeatedContent";
import Journal from "../Journal/Journal";
import SiteHeader from "../SiteHeader/SiteHeader";
import SiteFooter from "../Footer/SiteFooter";
const MidSection = () => {
    return (
        <>
        <SiteHeader/>
            <Styled.MainContainer >
                <Styled.Banner>
                 <div className="homeBanner" >
                 <h2 className="banner-title">Summer Collection</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                 <div style={{    width: "100%"}}>
                    <button className="btn-wrap">Shop it now <IoArrowForwardSharp/></button>
                     
                    </div>
                 </div>
              
                </Styled.Banner>
                <Styled.FeaturedProd>
                    <div>
                        <div className="articlesFeat">
                    <div className="title">Best selling products</div>
                    <div ><a href="" className='articles'>View All Products  <IoArrowForwardSharp /></a></div>
                    </div>
                    <div className="productImages">
                            {FeaturedImg?.map((item, index) => {
                                return <>
                                    <div>
                                        <img src={item?.img} alt="" className="img" />
                                        <div>
                                            <a href="">{item?.title}</a>
                                        </div>
                                        <div className="price">{item?.price}</div>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </Styled.FeaturedProd>
            <div >
                <Styled.Images className="container-fluid">

                    <div className="wear">
                        <div className="image1">
                            <div>
                        <img src={collection} alt="" className="img"/>
                        </div>
                        </div>
                        <Styled.WearData >
                   
                <div className="col2">
                        <div class="categories">Casual collection</div>
                        <h3 class="item-title">Street Wear.</h3>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                        <a href="" className="shop">Shop Collection <IoArrowForwardSharp/></a>
                         </div>
                        
                </Styled.WearData>
                    </div>
                    <div className="shoes">
                    <div className="imagesportion">
                    <div className="image2">
                    <div>
                    <img src={collection2} alt="" className="img"/>
                    </div>
                    <Styled.ImageShoes >
                   <div className="col2">
                           <div class="categories">Best Selling Product</div>
                           <h3 class="item-title">Basic Shoes.</h3>
                           <a href="" className="shop">Shop Collection <IoArrowForwardSharp/></a>
                            </div>
                           
                   </Styled.ImageShoes>
                    </div>
                    <div className="image3">
                        <div>
                    <img src={collection3} alt="" className="img"/>
                    </div>
                    <Styled.ImageShoes >
                   
                   <div className="col2">
                           <div class="categories">Casual collection</div>
                           <h3 class="item-title">Woolen Hat.</h3>
                           <a href="" className="shop">Shop Collection <IoArrowForwardSharp/></a>
                            </div>
                           
                   </Styled.ImageShoes>
                    </div>
                    </div>
                    </div>
                </Styled.Images>
            </div>
                <div>
                    <Styled.Coupons className="col-md-9">
                        <div className="title">Get 25% off Discount Coupons</div>
                        <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
                        <form className="form">
                            <Styled.Input type="text" name="email" placeholder="Enter your email addresss here" />
                            <button class="btn btn-dark ">Subscribe Now</button>
                        </form>
                    </Styled.Coupons>
                </div>
                <Styled.Products>
                    <Styled.Content>
                        <div className="title">Best selling products</div>
                        <div>
                            <ul className="tabs">
                                <li className="items">All</li>
                                <li className="items">Shoes</li>
                                <li className="items">Tshirts</li>
                                <li className="items">Pants</li>
                                <li className="items">Hoddie</li>
                                <li className="items">Outer</li>
                                <li className="items">Jackets</li>
                                <li className="items">Accessories</li>
                            </ul>
                        </div>

                        <div className="productImages">
                            {productImg?.map((item, index) => {
                                return <>
                                    <div>
                                        <img src={item?.img} alt="" className="img" />
                                        <div>
                                            <a href="">{item?.title}</a>
                                        </div>
                                        <div className="price">{item?.price}</div>
                                    </div>
                                </>
                            })}
                        </div>
                        <div className="productImages">
                            {JacketImg?.map((item, index) => {
                                return <>
                                    <div>
                                        <img src={item?.img} alt="" className="img" />
                                        <div>
                                            <a href="">{item?.title}</a>
                                        </div>
                                        <div className="price">{item?.price}</div>
                                    </div>
                                </>
                            })}
                        </div>
                        <div className="productImages">
                            {ShoesImg?.map((item, index) => {
                                return <>
                                    <div>
                                        <img src={item?.img} alt="" className="img" />
                                        <div>
                                            <a href="">{item?.title}</a>
                                        </div>
                                        <div className="price">{item?.price}</div>
                                    </div>
                                </>
                            })}
                        </div>
                    </Styled.Content>
                </Styled.Products>
                <div>
                    <Styled.Bio className="main">
                        <div className="col-md-2 quo"><IoMdQuote /></div>
                        <div className="col-md-8">
                            <p className="para">“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                            <p className="maggie">By Maggie Rio</p>
                            <div className="arrow">
                                <IoArrowBack />
                                <IoArrowForwardSharp />
                            </div>
                        </div>
                    </Styled.Bio>

                </div>
                <Styled.Sales>
                    <div className="title">Flash Sales</div>
                    <div className="salesImages">
                        {dataImg?.map((item, index) => {
                            return <>
                                <div>
                                    <img src={item?.img} alt="" className="img" />
                                    <div>
                                        <a href="">{item?.title}</a>
                                    </div>
                                    <div className="price">{item?.price}</div>
                                </div>
                            </>
                        })}
                    </div>
                </Styled.Sales>
                <Styled.ModelData>
                <Styled.Model>
                    <div className="mode">
                        <img src={model} alt="" className="model"/>
                        </div>
                       
                </Styled.Model>
                <Styled.Collection className="container">
                    <div className="col1"></div>
                <div className="col2">
                        <div class="categories">Denim collection</div>
                        <h3 class="item-title">The Casual Selection.</h3>
                        <p className="para">Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio.</p>
                        <a href="" className="shop">Shop Collection <IoArrowForwardSharp/></a>
                         </div>
                </Styled.Collection>
                </Styled.ModelData>
                <Styled.Quote>
                    <div className="title">Quote of the day</div>
                    <blockquote><q>It's true, I don't like the whole cutoff-shorts-and-T-shirt look, but I think you can look fantastic in casual clothes.</q></blockquote>
                    <div className="seus">- Dr. Seuss</div>
                </Styled.Quote>
             
               <Journal/>
       
             <RepeatedContent/>
            </Styled.MainContainer>
            <SiteFooter/>
        </>
    )
}

export default MidSection
// hr@posttely.com