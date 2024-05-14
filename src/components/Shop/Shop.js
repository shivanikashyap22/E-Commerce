import React from 'react'
import Journal from '../Journal/Journal'
import SiteFooter from '../Footer/SiteFooter'
import SiteHeader from '../SiteHeader/SiteHeader'
import RepeatedContent from '../RepeatedContent/RepeatedContent'
import * as Styled from "./style";
import { JacketImg, ShoesImg, mixImg, productImg } from './data'
import { LiaSearchSolid } from "react-icons/lia";
import Banner from '../Banner/Banner'
import heroImage from '../../assets/images/heroImage.jpg'

const Shop = () => {
  return (
    <div>

        <SiteHeader/>
        <Banner image={heroImage} altImg="Description of the Shop Image" title="Shop Page" link="Home" nameLink="Shop"/>

        <Styled.Shop>
        <Styled.Products>
                    <Styled.Content>
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
                        <div className='productImages'>
                        {mixImg?.map((item, index) => {
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
        <Styled.InShort>
          <form className='form'>
          <Styled.Input type="text" placeholder="Search"/>
          <button className='btn'><LiaSearchSolid/></button>
          </form>
         <Styled.Tags>
            <div>
                <h2 className='title'>Tags</h2>
                <div>
                <ul>
                <li><a href="">White</a></li>
                <li><a href="">Cheap</a></li>
                <li><a href="">Branded</a></li>
                <li><a href="">Modern</a></li>
                <li><a href="">Simple</a></li>

                </ul>
                </div>
            </div>
            <div>
                <h2 className='title'>Brands</h2>
                <div>
                <ul>
                <li><a href="">Nike</a></li>
                <li><a href="">Adidas</a></li>
                <li><a href="">Puma</a></li>
                <li><a href="">Spike</a></li>
                </ul>
                </div>
            </div>
            <div>
                <h2 className='title'>Filter By Price</h2>
                <div>
                    <ul>
                <li><a href="">Less than $10</a></li>
                <li><a href="">$10- $20</a></li>
                <li><a href="">$20- $30</a></li>
                <li><a href="">$30- $50</a></li>
                </ul>
                   
                </div>
            </div>
         </Styled.Tags>
        </Styled.InShort>
        </Styled.Shop>
      <Journal/>
      <RepeatedContent/>
      <SiteFooter/>
    </div>
  )
}

export default Shop
