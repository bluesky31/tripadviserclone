import React, { useState } from 'react';
import { Space, Button } from 'antd';
import { Switch } from 'antd';
import Entry from './components/Gallery';

const App = () => {
  const [enable, setEnable] = useState(true);

  return (
    <Space direction="vertical" size={10} align="center" style={{width:"100%",display:"inlineBlock"}}>
      <Switch defaultChecked checkedChildren="hi" disabled={enable} />
      <Button onClick={() => setEnable(!enable)}>Change</Button>
      <Entry images={["./img1.jpg","./img2.jpg","./img3.jpg"]} />
      <Entry images={["./img1.jpg","./img2.jpg","./img3.jpg"]} />
    </Space>
  );
};
 
export default App;
