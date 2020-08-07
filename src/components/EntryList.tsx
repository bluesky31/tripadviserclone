import React, { useState} from 'react';
import {Space, Pagination} from "antd";

const EntryList = ({entries}:{entries:JSX.Element[]}) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const defaultPageSize = 20;
    console.log(entries.length);
    const change = (page:number, pageSize?:number) => {
        setPage(page);
        setPageSize(pageSize==undefined?defaultPageSize:pageSize);
    }
    return (
    <Space direction="vertical" size={10} align="center" style={{width:"100%",display:"inlineBlock",backgroundColor:"rgb(230,230,230)",padding:"30px 0 0 20px"}}>
        {entries.slice(pageSize*(page-1),Math.min(page*pageSize,entries.length))}
        <Pagination total={entries.length} current={page} pageSize={pageSize} onChange={change}/>
    </Space>)
}

export default EntryList