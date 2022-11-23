// /** @jsx jsx */
import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/css'

import { baseIcon_style, bgSizeHeightWidth_COMMON_w24_call_style, bgSizeHeightWidth_COMMON_w24_starHover_style, bgSizeHeightWidth_COMMON_w24_style, bg_url_COMMON_style } from './styles';

const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "myNamedChunk" */ "./SomeComponent"),
  loading: () => <div>loading...</div>,
  modules: ['myNamedChunk']
});

// const myStyle1 = css`
//   color: rebeccapurple;
// `

// const myStyle2 = css`
//   background-color: blue;
// `

// const myStyle3 = css`
//   height: 30px;
//   width: 30px;
// `

function App() {

  return (
    <div id='myapp'>
      <div>hello</div>
      <div><i
        // css={[baseIcon_style,
        //   bg_url_COMMON_style,
        //   bgSizeHeightWidth_COMMON_w24_style,
        //   bgSizeHeightWidth_COMMON_w24_starHover_style
        // ]}
        className={`${baseIcon_style} ${bg_url_COMMON_style} ${bgSizeHeightWidth_COMMON_w24_style} ${bgSizeHeightWidth_COMMON_w24_starHover_style}`}
      ></i></div>
      <div><i
        // css={[baseIcon_style,
        //   bg_url_COMMON_style,
        //   bgSizeHeightWidth_COMMON_w24_style,
        //   bgSizeHeightWidth_COMMON_w24_starHover_style
        // ]}
        className={`${baseIcon_style} ${bg_url_COMMON_style} ${bgSizeHeightWidth_COMMON_w24_style} ${bgSizeHeightWidth_COMMON_w24_starHover_style}`}
      ></i></div>
      <div><i
        // css={[baseIcon_style,
        //   bg_url_COMMON_style,
        //   bgSizeHeightWidth_COMMON_w24_style,
        //   bgSizeHeightWidth_COMMON_w24_call_style
        // ]}
        className={`${baseIcon_style} ${bg_url_COMMON_style} ${bgSizeHeightWidth_COMMON_w24_style} ${bgSizeHeightWidth_COMMON_w24_call_style}`}
      ></i></div>
      <div>World</div>
    </div>
  );
}

export default App;
