import React from 'react';
import JokeApp from './Components/JokeApp';
import {ThemeProvider} from './Contexts/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <JokeApp/>
      </ThemeProvider>
    </div>
  );
}

export default App;
