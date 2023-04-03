const container = document.querySelector('#container')
const color = []

function randomColorHex() {
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    color.push(`#${hex}`)
}

for (let i = 1; i <= 5; i++) {
    randomColorHex()
    let div = document.createElement('div')
        div.classList.add('element')
        div.innerHTML = `Element <span style="color: ${color[i-1]};">${i}</span>`

    container.append(div)
}
console.log(container)
