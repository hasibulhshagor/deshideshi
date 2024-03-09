import React, { useState } from 'react';
import './Counter.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ProductImg from '../../../Images/khejur.jpg';


const Counter = () => {
    const [quant, setQuant] = useState(1)


    const plusBtnCrt = () => {
        setQuant(quant + 1)
    }


    const minusBtnCrt = () => {
        if (quant > 1) {
            setQuant(quant - 1)
        }

    }


    return (
        <div>
            <div className='d-flex  px-2 mt-2 align-items-center ' style={{ boxShadow: '1px 1px 2px gray', height: '80px', margin: '0 5px', borderRadius: '5px' }}>
                <div className='ofcCrtImg'>
                    <img src={ProductImg} alt="imag" />
                </div>
                <div className='ofcCrtTitle'>
                    <p> Egyptian Medjool Dates - 1 kg (Medium)</p>
                </div>
                <div className='ofcCrtIncrt'>
                    <button className='ofcCrtPlusBtn' onClick={plusBtnCrt}><AddIcon style={{ width: '100%' }}></AddIcon></button>
                    <button className='ofcCrtQuantBtn'>{quant}</button>

                    <button className='ofcCrtMinusBtn' onClick={minusBtnCrt}><RemoveIcon style={{ width: '100%' }}></RemoveIcon></button>
                </div>
                <div className='ofcCrtPrice'>
                    <p>{quant * 1200}</p>
                </div>
            </div>
            <div className='d-flex  px-2 mt-2 align-items-center ' style={{ boxShadow: '1px 1px 2px gray', height: '80px', margin: '0 5px', borderRadius: '5px' }}>
                <div className='ofcCrtImg'>
                    <img src={ProductImg} alt="imag" />
                </div>
                <div className='ofcCrtTitle'>
                    <p> Egyptian Medjool Dates - 1 kg (Medium)</p>
                </div>
                <div className='ofcCrtIncrt'>
                    <button className='ofcCrtPlusBtn' onClick={plusBtnCrt}><AddIcon style={{ width: '100%' }}></AddIcon></button>
                    <button className='ofcCrtQuantBtn'>{quant}</button>

                    <button className='ofcCrtMinusBtn' onClick={minusBtnCrt}><RemoveIcon style={{ width: '100%' }}></RemoveIcon></button>
                </div>
                <div className='ofcCrtPrice'>
                    <p>{quant * 1200}</p>
                </div>
            </div>
            <div className='d-flex  px-2 mt-2 align-items-center ' style={{ boxShadow: '1px 1px 2px gray', height: '80px', margin: '0 5px', borderRadius: '5px' }}>
                <div className='ofcCrtImg'>
                    <img src={ProductImg} alt="imag" />
                </div>
                <div className='ofcCrtTitle'>
                    <p> Egyptian Medjool Dates - 1 kg (Medium)</p>
                </div>
                <div className='ofcCrtIncrt'>
                    <button className='ofcCrtPlusBtn' onClick={plusBtnCrt}><AddIcon style={{ width: '100%' }}></AddIcon></button>
                    <button className='ofcCrtQuantBtn'>{quant}</button>

                    <button className='ofcCrtMinusBtn' onClick={minusBtnCrt}><RemoveIcon style={{ width: '100%' }}></RemoveIcon></button>
                </div>
                <div className='ofcCrtPrice'>
                    <p>{quant * 1200}</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;