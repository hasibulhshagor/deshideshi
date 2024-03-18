import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../../Images/deshi_deshi-removebg-preview.png'
import SearchIcon from '@mui/icons-material/Search';
import SelectDrop from '../SelectDrop/SelectDrop';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, Drawer, Typography } from '@mui/material';
import Counter from '../Same Component/Counter/Counter';






const Header = () => {

    const [categorie, setCategorie] = useState([
        'Patali Gur',
        'Sugar',
        'Fruits',
        'Ghani Oil',
        'Ghee',
        'Mango'
    ])

    const setAllCountry = [];

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then(res => res.json())
            .then(data => {
                if (data.data) {
                    data.data.map((items, index) => setAllCountry.push(items?.country))
                }
            })

    }, [])

    const [accountOpen, setAccountOpen] = useState(false)

    const processingAccount = (e) => {
        setAccountOpen(!accountOpen)
    }


    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };














    return (
        <>
            <header>
                <div style={{ height: '45px', margin: '0 0 10px 0', padding: '2px 20px', backgroundColor: '#5D0E41', color: 'white', fontSize: '12px', fontWeight: '600', display: 'flex', justifyContent: 'right', alignItems: 'center', }}>
                    <p style={{ paddingRight: '15px', paddingTop: '15px', color: 'yellow' }}>
                        <CallOutlinedIcon style={{ fontSize: '25px', fontWeight: 'bold' }} />01626205938
                    </p>
                    <p style={{ paddingRight: '15px', paddingTop: '15px', color: 'yellow' }}>
                        <EmailOutlinedIcon style={{ fontSize: '25px', fontWeight: 'bold' }} />hasibul0211@gmail.com
                    </p>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='logoContainer col-sm-2'>
                            <img src={logo} alt="" />
                        </div>
                        {/* header search here  */}
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center' style={{ fontSize: '12px' }}>
                                <SelectDrop data={categorie} defaultData='All Categoires'></SelectDrop>

                                <div className='search'>
                                    <input type="text" placeholder='Find your items here' />
                                </div>
                                <div className='searchIcon cursor'>

                                    <SearchIcon></SearchIcon>
                                </div>
                            </div>
                        </div>

                        <div className='headerLocation col-sm-5'>
                            <div className='d-flex  justify-content-between'>
                                <div className='w-25' style={{ fontSize: '12px' }}>
                                    <SelectDrop data={setAllCountry} defaultData='Your Location' icon={<MyLocationIcon></MyLocationIcon>}>
                                    </SelectDrop>
                                </div>
                                <div className='headerTabs d-flex w-75'>


                                    <ul className='list list-inline ps-3' style={{ cursor: 'pointer' }} title='Your wishlist'>
                                        <li className='list-inline-items' onClick={toggleDrawer(true)}>
                                            <span><FavoriteBorderIcon /></span>
                                            <span>Wishlist</span>
                                            <span className='badges'>13</span>
                                        </li>

                                    </ul>
                                    <ul className='list list-inline ps-3' style={{ cursor: 'pointer' }} title='Your Cart'>
                                        <li className='list-inline-items' onClick={toggleDrawer(true)}>
                                            <span><ShoppingCartOutlinedIcon /></span>
                                            <span>Cart</span>
                                            <span className='badges'>13</span>
                                        </li>

                                    </ul>
                                    <ul className='list list-inline ps-3' style={{ cursor: 'pointer' }} title='Your Account'>
                                        <li className='list-inline-items'>
                                            <span><AccountCircleOutlinedIcon /></span>
                                            <span onClick={(e) => processingAccount()}>Account</span>
                                            {
                                                accountOpen && < div className='accountContainer'>
                                                    <ul className='list list-inline'>
                                                        <li className='list-inline-items'>Login</li>
                                                        <li className='list-inline-items'>LogOut</li>
                                                        <li className='list-inline-items'>Dashboard</li>
                                                        <li className='list-inline-items'>Setting</li>
                                                    </ul>
                                                </div>
                                            }

                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div>

                        <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
                            <Box sx={{ width: 380, marginTop: '15px' }} role="presentation" onClick={toggleDrawer(true)}>

                                <div className='ofcHeader'>
                                    <p style={{ textAlign: 'center' }}>
                                        Hi!! Dear Customer
                                    </p>
                                    <p style={{ fontSize: '15px', paddingTop: '5px' }}>Total Quantity:</p>
                                    <p>Total Amount:</p>

                                </div>
                                <div style={{ width: '100%' }}>
                                    <Counter></Counter>
                                </div>
                            </Box>

                        </Drawer>
                    </div>


                </div>
            </header >

        </>
    );
};

export default Header;