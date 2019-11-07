import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filters from './filters';
import SentimentOutputs from './sentiment_outputs';

function App() {
  return (
    <div className="App">
      <header className="App-header" style= {{ backgroundColor: 'powderblue', height: '50px', margin: 0 }}>
            <img src={logo} className="App-logo" alt="logo"  style={{float:"left"}}/>
            <h1 >SENTIMENT ANALYSER</h1>
      </header>
      <Filters style={{float:"left"}}></Filters>
      <SentimentOutputs style={{backgroundColor:'black', float:"right",width:'60%'}}></SentimentOutputs>
    </div>

  );
}

export default App;
   

