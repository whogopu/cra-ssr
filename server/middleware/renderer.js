import React from 'react'
import ReactDOMServer from 'react-dom/server'

// import our main App component
import App from '../../src/App';

const path = require("path");
const fs = require("fs");
import Loadable from 'react-loadable';

import manifest from '../../build/asset-manifest.json';

// import { CacheProvider } from '@emotion/react'
import { renderToString } from 'react-dom/server'
// import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'
import { extractCritical } from "@emotion/server";

import { css } from "@emotion/css";

const key = 'custom'
const cache = createCache({ key })
// const { extractCritical } = createEmotionServer(cache)

const style = css({
    color: "pink",
    padding: 0
});

// const element = `
//   <p class="${style}">Hello World!</p>
//   `;

// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

export default (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const modules = [];

        // render the app as a string

        let element = (
            <Loadable.Capture report={m => modules.push(m)}>
                <App />
            </Loadable.Capture>
        )

        // let { html, css, ids } = extractCritical(renderToString(element))
        let critical = extractCritical(renderToString(element));
        // let critical = extractCritical(element);

        console.log('ids', critical.ids)
        console.log('css', critical.css)
        console.log('html', critical.html)
        // const html = ReactDOMServer.renderToString(
        //     <Loadable.Capture report={m => modules.push(m)}>
        //         <App/>
        //     </Loadable.Capture>
        // );

        const extraChunks = extractAssets(manifest['files'], modules)
            .map(c => `<script type="text/javascript" src="${c}"></script>`);

        // inject the rendered app into our html and send it
        return res.send(
            htmlData
                .replace(
                    '<div id="root"></div>',
                    `<div id="root">${critical.html}</div>`
                )
                .replace(
                    '$style',
                    `<style data-emotion="${critical.ids.join(" ")}">${critical.css}</style>`
                )
                .replace(
                    '</body>',
                    extraChunks.join('') + '</body>'
                )
        );
    });
}