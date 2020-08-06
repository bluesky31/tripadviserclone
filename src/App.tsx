import React, { useState } from 'react';
import { Space, Button } from 'antd';
import { Switch } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import Gallery from './components/Gallery';

const App = () => {
  const [enable, setEnable] = useState(true);
  const [colour, setColour] = useState("red");

  return (
    <Space direction="vertical" size={12} align="center" style={{width:"300px"}}>
      <Switch defaultChecked checkedChildren="hi" disabled={enable} />
      <Button onClick={() => setEnable(!enable)}>Change</Button>
      <Button type="ghost" icon={<LeftOutlined/>} />
      <Gallery/>
    </Space>
  );
};

export default App;
