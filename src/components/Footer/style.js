import React from 'react';
import styled from 'styled-components';

export const FooterSection = styled.footer`
  
    padding: 50px 0 30px;
    .fotterEnd{     
        font-size: 18px;
        line-height: 1.8;
        display:flex;
        justify-content:space-between;
        padding:30px 0px;
        }
        .foot{
            border-top: 0.5px solid gray;
            margin-top:30px;
        }
        .link{
            text-decoration: none;
            transition: 0.3s color ease-out;
            color:#6995b1;
        }
        .free{
            color:gray;
            gap:10px;
            display:flex;
        }
`;

export const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
   
    width: 100%;
    .icons{
        display:flex;
        gap:20px;
        font-size:20px;
    }
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1170px;
    }
   
`;

export const FooterHeading = styled.h6`
 
    color:black;
    letter-spacing: 0;
    font-size: 1.3em;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 20px;
`;

export const FooterLink = styled.ul`
    list-style: none;
    padding-left: 0;
    color:gray;
    text-decoration:none;
    .about{
        color:gray;
        text-decoration:none;
        font-size: 20px;
        font-weight: 300;
        line-height: 1;
    }
    .mail{
        color:gray;
        text-decoration:none;
        font-size: 20px;
        font-weight: 600;
        line-height: 1;
    }
    .para{
        color:gray;
        font-size: 20px;
        font-weight: 300;
        line-height: 1.6;
    }
`;

export const FooterItem = styled.li`
    margin-bottom: 1rem;
`;

export const FooterSocialIcon = styled.i`
    font-size: 15px;
    height: 34px;
    width: 34px;
    line-height: 34px;
    border-radius: 3px;
    text-align: center;
    display: inline-block;
`;
