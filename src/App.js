//import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      {/* <AlbumFeature /> */}
      <ColorBox />
      <Counter />
    </div>
  );
}

export default App;
