const balaoEl = document.createElement('div')
balaoEl.id = 'balao'

const tituloBalaoEl = document.createElement('p')
balaoEl.appendChild(tituloBalaoEl)

const notaMaxBalaoEl = document.createElement('p')
balaoEl.appendChild(notaMaxBalaoEl)

const pesoBalaoEl = document.createElement('p')
balaoEl.appendChild(pesoBalaoEl)

document.body.appendChild(balaoEl);

const avalElArr = document.querySelectorAll('#trAval > th')

for (let avalEl of avalElArr) {
    const { id } = avalEl
    if (id !== 'unid') {
        const idAval = id.split('_')[1]
        avalEl.addEventListener('mousemove', (event) => {
            const denAval = document.querySelector(`#denAval_${idAval}`).value
            const notaAval = document.querySelector(`#notaAval_${idAval}`).value
            const pesoAval = document.querySelector(`#pesoAval_${idAval}`).value

            tituloBalaoEl.innerHTML = denAval
            notaMaxBalaoEl.innerHTML = `<strong>Nota máxima:</strong> ${notaAval}`
            if (pesoAval !== '1') {
                pesoBalaoEl.innerHTML = `<strong>Peso:</strong> ${pesoAval}`
            } else {
                pesoBalaoEl.innerHTML = ''
            }

            balaoEl.style.left = `${event.pageX}px`
            balaoEl.style.top = `${event.pageY + 10}px`

            balaoEl.style.display = 'block'
        })
    }

    avalEl.addEventListener('mouseleave', () => {
        balaoEl.style.display = 'none'
    })
}
