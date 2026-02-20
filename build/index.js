import {build} from 'esbuild'
import { nodeExternalsPlugin} from "esbuild-node-externals";

build({
entryPoints: ["src/App.jsx", "src/server.jsx"],
target: "node14",
format: "esm",
platform: "node",
outdir: "dist",
watch: true,
logLevel: "debug",
bundle: true,
plugins: [
    nodeExternalsPlugin()
]

});

build({
    entryPoints: ["src/main.jsx"],
    target: "chrome96",
    watch: true,
    logLevel: "debug",
    platform: "browser",
    bundle: true,
    outdir: "dist",

});