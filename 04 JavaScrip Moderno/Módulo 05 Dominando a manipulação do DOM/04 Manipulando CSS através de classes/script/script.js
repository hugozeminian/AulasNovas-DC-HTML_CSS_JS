var elementos = document.getElementsByClassName('box')
/*
var el = elementos[0]
el.style.width = 100
el.style.height = 100
el.style.backgroundColor = 'green'
el.style.marginLeft = 200
*/

for(var i = 0; i < elementos.length; i++){
    var el = elementos[i]  
    el.style.width = 100
    el.style.height = 100
    el.style.backgroundColor = 'green'
    el.style.marginLeft = 200
    el.style.marginTop = 10
    el.style.border = '2px solid'
    el.style.borderColor = 'red'
}