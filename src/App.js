
import { useState } from 'react';
import './App.css';
import CheckScreen from './components/CheckScreen';
import ScreenDetection from './components/ScreenDetection';

function App() {

  const [component,setComponent] = useState(true);

  return (
    <div className="App">
      <button onClick={()=>setComponent(!component)}>change component</button>
      {component?<CheckScreen/>:<ScreenDetection/>}
      <div>
        <h1>Andrea Soto Delgado</h1>
      </div>
    </div>
  );
}

export default App;
