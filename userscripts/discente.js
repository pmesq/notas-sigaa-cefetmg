// ==UserScript==
// @name         Sigaa - discente.jsf
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description
// @author       Pedro César Mesquita Ferreira
// @match        https://sig.cefetmg.br/sigaa/portais/discente/discente.jsf
// @grant        none
// ==/UserScript==

(function() {
    'use strict'

    const turmasPortal = document.querySelector("#turmas-portal")
    if (turmasPortal !== null) {
        const totalTurmas = document.querySelectorAll('td.descricao').length
        const idTurma = parseInt(localStorage.getItem('turma') || '0')
        if (idTurma < totalTurmas) {
            localStorage.setItem('turma', idTurma + 1)
            if (idTurma === 0) {
                localStorage.setItem('tabelas', '<div id="tabelas">')
                document.querySelector(`#form_acessarTurmaVirtual > a`).click()
            } else {
                document.querySelector(`#form_acessarTurmaVirtualj_id_${idTurma} > a`).click()
            }
        } else {
            localStorage.setItem('tabelas', localStorage.getItem('tabelas') + '</div>')
            alert('Processo finalizado')
        }
    } else {
        const itensMenu = document.querySelectorAll(".itemMenu")
        if (itensMenu[9] && itensMenu[9].innerText === 'Ver Notas') {
            itensMenu[9].click()
        } else {
            for (let itemMenu of itensMenu) {
                if (itemMenu.innerText === 'Ver Notas') {
                    itemMenu.click()
                    break
                }
            }
        }
    }
})()
