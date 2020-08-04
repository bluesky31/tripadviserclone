import React, { useState } from 'react';
import { Space, Button } from 'antd';
import { Switch } from 'antd';

const App = () => {
  const [enable, setEnable] = useState(true);

  return (
    <Space direction="vertical" size={12}>
      <Switch defaultChecked disabled={enable} />
      <Button onClick={() => setEnable(!enable)}>Change</Button>
    </Space>
  );
};

export default App;
