import React from 'react';
import Entry from './components/Entry';
import Data from './components/Data';
import EntryList from './components/EntryList';

const App = () => {
  const data:Data[] = require("./data-entries.json");
  var display = data.map((i:Data)=>(<Entry props={i}/>));
  const title = require("./images/img0.jpg");
  return (<>
    <div className="title">
      <img src={title}/>
      <h1>TripOdviser</h1>
    </div>
    <EntryList entries={display}/>
  </>);
};
 
export default App;
