import React from 'react';
import SideMenu from './../../Extra Component/Side Menu/SideMenu'
import './Banner.css'
import HeaderCurveBox from '../../Extra Component/HeaderCurveBox/HeaderCurveBox';


const Banner = () => {
    return (
        <div className='containerBanner'>
            <div className='containerBannerInside m-3'>
                <div className=' border border-secondary'>
                    <SideMenu></SideMenu>
                </div>
                <div className='' style={{ position: 'relative' }}>
                    <h3>text loading here</h3>
                    <h4>wait for next update</h4>
                    <HeaderCurveBox></HeaderCurveBox>
                </div>

            </div>
        </div>
    );
};

export default Banner;