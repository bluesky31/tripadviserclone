import { Space, Divider } from 'antd';
import React from 'react';
import Gallery from "./Gallery";
import Info from "./Info";
import Input from "./Input";
import Data from "./Data";

const Entry = ({props}:{props:Data}) => {
    return (<>
    <Space direction="horizontal" size={0} className="entry-container">
    <Gallery images={props.images}/>
        <Space direction="vertical" size={0} className="right-parent-container">
            <span className="entry-title">{props.title}</span>
            <div className="right-container">
                <Info props={props}/>
                <Divider type="vertical" className="entry-divider"/>  
                <Input props={props}/>
            </div>
        </Space>
    </Space> 
    </>)
} 

export default Entry;