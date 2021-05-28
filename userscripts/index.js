// ==UserScript==
// @name         Sigaa - index.jsf
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  
// @author       Pedro César Mesquita Ferreira
// @match        https://sig.cefetmg.br/sigaa/ava/index.jsf
// @grant        none
// ==/UserScript==

(function() {
    'use strict'

    let tabela = document.querySelector('.tabelaRelatorio')
    if (tabela === null) {
        tabela = document.createElement('table')
        const legenda = document.createElement('caption')
        legenda.innerHTML = `<strong>${document.querySelector("#linkNomeTurma").innerText}</strong>`
        tabela.appendChild(legenda)
        const tbody = document.createElement('tbody')
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.innerHTML = `Ainda não foram lançadas notas.`
        tr.appendChild(td)
        tbody.appendChild(tr)
        tabela.appendChild(tbody)
    } else {
        const cabecalho = tabela.querySelector('tr')
        if (cabecalho) {
            cabecalho.removeChild(cabecalho.children[0])
            cabecalho.removeChild(cabecalho.children[0])
        }

        const trAval = tabela.querySelector("#trAval")
        if (trAval) {
            trAval.removeChild(trAval.children[0])
            trAval.removeChild(trAval.children[0])
            trAval.removeChild(trAval.children[trAval.children.length - 1])
        }

        const linha = tabela.querySelector('.linhaPar')
        if (linha) {
            linha.removeChild(linha.children[0])
            linha.removeChild(linha.children[0])
        }

        const legenda = tabela.querySelector('caption')
        legenda.innerHTML = `<strong>${document.querySelector('h3').innerText.split('-')[1].replace(/\(\d+h\)/, '').trim()}</strong>`
    }

    const serializador = new XMLSerializer()
    const str = serializador.serializeToString(tabela)

    const strFormatada = str.replace(/\n|\t/g, '')

    const tabelas = localStorage.getItem('tabelas') || ''
    localStorage.setItem('tabelas', tabelas + strFormatada)

    window.location.href = 'https://sig.cefetmg.br/sigaa/portais/discente/discente.jsf'
})()
