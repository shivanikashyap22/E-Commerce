import React from 'react'
import { instaData, shipping } from '../MidSection/data'
import * as Styled from "./style";

const RepeatedContent = () => {
  return (
   <>
            <Styled.Insta >
                    <div className='section-header'>Follow Our Instagram</div>
                    <p className="instaa">Our official Instagram account
                        <a href="#" className="ultra">@ultras</a>
                        or
                        <a href="#" className="ultra">#ultras_clothing</a>
                    </p>
                    <div className="instaData">
                        {instaData?.map((item, index)=>{
                            return <>
                            <div className="instaWidth">
                            <img src={item?.img} alt="" className="imgInsta"/>
                            </div>
                            </>
                        })}
                    </div>
                </Styled.Insta>
                <Styled.Shipping >
                    {shipping?.map((item, index)=>{
                        return <>
                         <div className="itemShip">
                            <b>{item?.data}</b> {item?.money}
                        </div>
                        </>
                    })}
                       
                       

                </Styled.Shipping>
   </>
  )
}

export default RepeatedContent
