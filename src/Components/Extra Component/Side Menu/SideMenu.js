import React, { useState } from 'react';
import './SideMenu.css'


const SideMenu = () => {

    const [sideCatg, setSideCatg] = useState([
        'Patali Gur',
        'Sugar',
        'Fruits',
        'Ghani Oil',
        'Ghee',
        'Mango',
        'Vegetables'
    ])
    const [sideSelected, setSideSelected] = useState(0)
    const contrSideMenu = (index, sdc) => {
        setSideSelected(index)

    }

    return (
        <div>
            <p style={{ margin: 0, backgroundColor: '#335840', textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: '15px', padding: ' 4px 0' }}>Categories</p>
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