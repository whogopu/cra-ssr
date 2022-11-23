/** @jsx jsx */ 
import React from 'react';
import Loadable from 'react-loadable';
import logo from './logo.svg';
import './App.css';
import { css, jsx } from "@emotion/react";
import { baseIcon_style, bgSizeHeightWidth_COMMON_w24_starHover_style, bgSizeHeightWidth_COMMON_w24_style, bg_url_COMMON_style } from './styles';

const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "myNamedChunk" */ "./SomeComponent"),
  loading: () => <div>loading...</div>,
  modules: ['myNamedChunk']
});

function App() {
  return (
    <div className="App" css={{ color: 'hotpink' }} >
      <div><i
        css={[baseIcon_style,
          bg_url_COMMON_style,
          bgSizeHeightWidth_COMMON_w24_style,
          bgSizeHeightWidth_COMMON_w24_starHover_style
        ]}
      ></i></div>
      <div><i
        css={[baseIcon_style,
          bg_url_COMMON_style,
          bgSizeHeightWidth_COMMON_w24_style,
          bgSizeHeightWidth_COMMON_w24_starHover_style
        ]}
      ></i></div>
      <AsyncComponent />
    </div>
  );
}

export default App;
