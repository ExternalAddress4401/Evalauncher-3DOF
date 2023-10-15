const esbuild = require("esbuild");
const fs = require("fs");

const outfile = "ai.nreal.evalauncher.js";

async function build() {
  await esbuild.build({
    entryPoints: ['./ai.nreal.evalauncher.ts'],
    bundle: true,
    outfile,
    minify: true,
  });
}

build();
