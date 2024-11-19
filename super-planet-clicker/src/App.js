import './App.css';
import PublicIcon from '@mui/icons-material/Public';
import React, { useState } from 'react';

function App() {
  const [power, setCount] = useState(0);
  const add = () => {
    power++;
  }
  return (
    <div className="App">
      <header className="App-header">
        <PublicIcon onClick={() => setCount(power + 1)} style={{fontSize: "750px", color:"green", backgroundColor:"blue"}} alt="earth" />
        <p>
          Power: {power}
        </p>
      </header>
    </div>
  );
}

export default App;
