import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import { Space, Button } from 'antd';
import React, { useState } from 'react';
//import "../index.less"

const Gallery = ({images}:{images:string[]}) => {
    const [imageNum, setNum] = useState(0);
    const directory = require.context("../images",false);
    const change = (dir:string) =>{
        if (dir=="right"){
            if (imageNum == images.length - 1) setNum(0);
            else setNum(imageNum + 1);
        }
        else if (dir=="left"){
            if (imageNum == 0) setNum(images.length - 1);
            else setNum(imageNum - 1);
        }
    } 
    return <div className="gallery">
        <img className="gallery-image" src={directory("./"+images[imageNum])} alt="error loading" />
        <Button icon={<LeftOutlined/>} onClick={() => {change("left")}} className="button-left"/>
        <Button icon={<RightOutlined/>} onClick={() => {change("right")}} className="button-right"/>
    </div> 
}

export default Gallery;