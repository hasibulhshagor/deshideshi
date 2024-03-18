import React from 'react';
import SideMenu from './../../Extra Component/Side Menu/SideMenu'
import './Banner.css'
import bannerImg from './../../../Images/header.jpg'



const Banner = () => {
    return (
        <div className='containerBanner'>
            <div className='containerBannerInside m-3'>
                <div className=''>
                    <SideMenu></SideMenu>
                </div>
                <div className='bannerHeading'  >
                    <img src={bannerImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;