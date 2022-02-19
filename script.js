let input = document.querySelector("input");
let rules 
let arr = []
let button = document.querySelector('button');
let counter = 0
let name = ''
function iteration(){
	arr.push(rules[counter])
	document.querySelector('p').innerHTML = arr.join(' ')
counter++
if (counter>rules.length){
	clearInterval(interval)
}
}
function printRules(linkToYourGame){
	name = input.value
	rules = `Привет,${name}. Тут будут правила игры`
	document.querySelector('p').innerHTML = rules
	interval = setInterval(iteration, 100)
	input.remove()
	button.remove()
	let crefteA = document.createElement('a')
	crefteA.innerHTML = 'START GAME'
	crefteA.href = linkToYourGame
	document.querySelector('div').append(crefteA)
}