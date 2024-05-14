

import React from 'react';
import * as Styled from "./style";
import { Link } from 'react-router-dom';

const Banner = ({image, title,link, nameLink}) => {
  return (
    <Styled.BannerContainer image={image}>
        <div className='container cont'>
            <div className='bread-data'>
            <h1 className="page-title">{title}</h1>
            <div className="breadcrumbs">
              <span className="item">
                <Link to="/" className='link'> {link} / </Link>
              </span>
              <span className="item">{nameLink}</span>
            </div>
                
                </div>
        </div>
    </Styled.BannerContainer>
  );
}

export default Banner;

