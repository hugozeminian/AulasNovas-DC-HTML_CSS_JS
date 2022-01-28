var p = document.getElementsByTagName('p')

console.log(p.length)

console.log(p[0].innerHTML)

p[0].innerHTML = 'Manupulado via JS!'

for(let i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado via JS - ' + i
}