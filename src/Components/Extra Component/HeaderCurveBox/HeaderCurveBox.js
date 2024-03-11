import React from 'react';
import './HeaderCurveBox.css'

const HeaderCurveBox = () => {
    return (
        <div className='curveContainer'>
            <div style={{ display: 'flex', width: '100%', height: '49%', margin: '2px' }}>
                <div style={{ width: '49%', height: '100%', borderRight: '3px solid', borderBottom: '3px solid', margin: '2px', textAlign: 'center' }}>
                    Frame 01
                </div>
                <div style={{ width: '49%', height: '100%', borderLeft: '3px solid', borderBottom: '3px solid', margin: '2px', textAlign: 'center' }}>
                    frame 2
                </div>
            </div>
            <div style={{ display: 'flex', width: '100%', height: '50%', margin: '2px' }}>
                <div style={{ width: '49%', height: '100%', borderRight: '3px solid', borderTop: '3px solid', margin: '2px', textAlign: 'center' }}>
                    frame 3
                </div>
                <div style={{ width: '49%', height: '100%', borderLeft: '3px solid', borderTop: '3px solid', margin: '2px', textAlign: 'center' }}>
                    frame 4
                </div>
            </div>
        </div>
    );
};

export default HeaderCurveBox;