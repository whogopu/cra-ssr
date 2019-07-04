import React from 'react';
import Loadable from 'react-loadable';
import logo from './logo.svg';
import './App.css';

const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "myNamedChunk" */ "./SomeComponent"),
  loading: () => <div>loading...</div>,
  modules: ['myNamedChunk']
});

function App() {
  return (
    <div className="App">
      <div>App compoent</div>
      <AsyncComponent/>
    </div>
  );
}

export default App;
