import React from 'react'
import { journal } from '../MidSection/data'
import * as Styled from "./style";
import { IoArrowForwardSharp } from 'react-icons/io5';
const Journal = () => {
  return (
   <>
    <Styled.Journal >
        <div className='journalIcons'>
                <div className='section-header'>Our Journal</div>
                <div ><a href="" className='articles'>Read All Articles  <IoArrowForwardSharp /></a></div>
                </div>
                    <div className="fashion">
                        {journal?.map((item, index)=>{
                            return <>
                            <div>
                                <div className="img">
                                <img src={item.img} alt="/" className="fashionImg"/>
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

                </Styled.Journal>
   </>
  )
}

export default Journal
