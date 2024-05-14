import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: 500px; 
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin-bottom:80px;
  .cont{
        display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .page-title{
    font-size: 7.2em;
    font-weight: 800;
    line-height: 1em;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color:#191919;
  }
  .breadcrumbs{
    color:#8d8d8d;
    font-size:20px;
    margin-top:30px;
  }
  .link{
    text-decoration:none;
    color:#191919;

  }
  .bread-data{
    text-align:center;
  }
`;

