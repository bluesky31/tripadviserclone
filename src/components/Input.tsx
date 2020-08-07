import React from 'react';
import { Button } from 'antd';
import { AndroidFilled } from '@ant-design/icons';
import Line from './Line';
import Data from './Data';

const Input = ({props}:{props:Data}) => {
    return(<div className="input-container">
        <div className="input-button-container">
            <div>
                <div className="coloured-rectange" style={{backgroundColor:"green"}}/>
                <Button icon={<AndroidFilled style={{fontSize:"20px"}}/>} className="input-button-inner">Check in</Button>
            </div>
            <div>
                <div className="coloured-rectange" style={{backgroundColor:"red"}}/>
                <Button icon={<AndroidFilled style={{fontSize:"20px"}}/>} className="input-button-inner">Check out</Button>
            </div>
        </div>
        <Button className="price-button">Show Prices</Button>
        <Line type="Payment Protection" margin="10px 0 0 0"/>
        <Line type="other travellers have booked this property" plural={false} num={props.previousBookings}/>
    </div>)
}

export default Input;