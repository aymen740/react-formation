import ReactDOMServer from "react-dom/server.node.js";
import {App} from "./App.jsx";
import React from "react";
import koa from "koa";
import serve from "koa-static";
import { ServerLocation} from "@reach/router";


const app = new koa();

app.use(serve("./dist"));
app.use((ctx) => {
console.log(ctx.req.url);

    const html = ReactDOMServer.renderToString(
         <ServerLocation url={ctx.req.url}>
   <App />
   </ServerLocation>
    );
   ctx.body = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ma page de test</title>
    <script src="main.js" defer></script>
</head>
<body>
    <div id="root">${html}</div>
</body>
</html>`;

});
app.listen(5181);