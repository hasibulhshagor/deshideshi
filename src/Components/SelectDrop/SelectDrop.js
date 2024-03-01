import React, { useState, useTransition } from 'react';
import './SelectDrop.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const SelectDrop = (props) => {

    const [openSelect, setOpenSelect] = useState(false)
    const [selectedCtg, setSelectedCtg] = useState(0)
    const [categName, setCatgName] = useState(props.defaultData)

    const processSelect = () => {
        setOpenSelect(!openSelect)
    }

    const categClose = (index, name) => {
        setSelectedCtg(index)
        setOpenSelect(false)
        setCatgName(name)
    }



    return (
        <div className='allCateg cursor position-relative'>
            <span>{props.icon}</span>
            <span className='openSelect' onClick={processSelect}> {categName} <ArrowDropDownIcon /></span>

            <div className='selectDrop'>
                {
                    openSelect && <div className='selectField'>
                        <input type="text" placeholder='Search Tag here' />
                        <ul>
                            <li onClick={() => categClose(0, props.defaultData)} className={`${selectedCtg === 0 ? 'active' : ''}`}> {props.defaultData}</li>

                            {
                                props.data.map((items, index) => {
                                    return <li onClick={() => categClose(index + 1, items)} className={`${selectedCtg === index + 1 ? 'active' : ''}`}> {items}</li>
                                })
                            }



                        </ul>
                    </div>
                }


            </div>
        </div>
    );
};

export default SelectDrop;