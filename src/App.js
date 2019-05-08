import React from 'react';
import './App.css';
import scale from "./scale.macro";

function App() {
  return (
    <div className="App">
        <div>
            {scale(20)}
        </div>
        <div>
            {scale(40)}
        </div>
        <div>
            {scale(70)}
        </div>
    </div>
  );
}

export default App;
