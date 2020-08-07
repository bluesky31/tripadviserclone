import React from 'react';
import { Rate } from 'antd';
import Line from './Line';
import Data from './Data';

const Info = ({props}:{props:Data}) => {
    return(<div className="info-container">
        <span className="location">
            {props.location}
        </span>
        <span style={{paddingBottom:"10px"}}>
            <Rate allowHalf disabled defaultValue={props.rating} style={{paddingRight:"10px"}}/>
            {props.totalRatings} ratings
        </span>
        <Line type="bedroom" num={props.bedroomNumber}/>
        <Line type="bathroom" num={props.bathroomNumber}/>
        <Line type="sleeps" num={props.sleepNumber} forward={false}/>
    </div>)
}

export default Info;