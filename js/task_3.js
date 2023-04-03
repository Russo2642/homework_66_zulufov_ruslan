const container = document.querySelector('#container');
for (let i = 1; i <= 5; i++) {
	let div = document.createElement('div');
	div.className = 'element';
	div.textContent = 'Element ' + i;
	container.appendChild(div);
}
console.log(container)

