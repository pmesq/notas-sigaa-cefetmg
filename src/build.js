const fs = require('fs')
const path = require('path')

const basePath = path.resolve('src', 'base')
const distPath = path.resolve('dist')

try { fs.mkdirSync(distPath) } catch (err) {}

for (let arq of ['balao.js', 'estilo.css', 'index.html']) {
    const arqBase = path.resolve(basePath, arq)
    const arqDist = path.resolve(distPath, arq)
    fs.copyFileSync(arqBase, arqDist)
}

const entrada = path.resolve('entrada', 'tabelas.html')

const tabelas =
    fs
        .readFileSync(entrada, 'utf8')
        .replace(/\sbgcolor=\"#\w{6}\"/g, '')
        .replace(/style=\"border-right: 1px solid #888;\s/g, 'class="nota" style="')

const indexHtmlPath = path.resolve(distPath, 'index.html')

const txt =
    fs
        .readFileSync(indexHtmlPath, 'utf8')
        .replace('<main></main>', `<main>${tabelas}</main>`)

fs.writeFileSync(indexHtmlPath, txt)
