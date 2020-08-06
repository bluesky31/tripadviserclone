import { Space, Divider } from 'antd';
import React from 'react';
import Gallery from "./Gallery";
import Info from "./Info";
import Input from "./Input";

const Entry = ({images, title, rating}:{title:string, images:Array<string>, rating:number}) => {
    return (<>
    <Space direction="horizontal" size={10} style={{backgroundColor:"green",width:"500px",height:"270px"}}>
        <Space direction="vertical" size={10} style={{backgroundColor:"green",width:"200px",height:"270px"}}>
            <span className="entry-title">abcdefghijklmn</span>
            <Space direction="horizontal" style={{backgroundColor:"green"}}>
                <span>hi</span>
                {/*<Info rating={rating}/>*/}
                <Divider type="vertical" style={{backgroundColor:"black",paddingLeft:"10px"}}/>  
                {/*<Input rating={rating}/>*/}
                <span>hi</span>
            </Space>
        </Space>
    </Space>
    </>)
}

export default Entry;