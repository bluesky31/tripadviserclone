import React from 'react';
import { AndroidFilled } from '@ant-design/icons';
import Data from "./Data"

const Line = ({type,forward=true, margin="8px 0 0 0", num=0, plural=true}:{type:string,forward?:boolean,margin?:string,num?:number,plural?:boolean}) =>{
    var str:string = forward? num.toString()+" "+type + (num!=1 && plural?"s":"") : type+" "+num.toString();
    if (type=="Payment Protection")str=type;
    return(<span style={{margin:margin}} className="line">
        <AndroidFilled style={{fontSize:"20px",paddingRight:"5px"}}/>
        {str}
    </span>)
}

export default Line;