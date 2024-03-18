import React, { useState } from 'react';
import './SideMenu.css'


const SideMenu = () => {

    const [sideCatg, setSideCatg] = useState([
        'Fashion & Lifestyle',
        'Home & Kitchen',
        'Mens Wearing',
        'Womens Wearing',
        'Beauty & Cosmetics',
        'Toys ',
        'Fruits & Vegetables',
        'Grocery Products'
    ])
    const [sideSelected, setSideSelected] = useState(0)
    const contrSideMenu = (index, sdc) => {
        setSideSelected(index)

    }

    return (
        <div>
            <p style={{ margin: 0, backgroundColor: '#5D0E41', textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: '15px', padding: ' 4px 0' }}>All Categories</p>
            <ul className='list styleListCstm'>

                {
                    sideCatg.map((sdc, index) => {
                        return <li onClick={() => contrSideMenu(index + 1, sdc)} className={`${sideSelected === index + 1 ? 'activeSide' : ''}`}> {sdc}</li>
                    })
                }
            </ul>


        </div >
    );
};

export default SideMenu;