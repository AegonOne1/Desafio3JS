
function pintar(element, color = 'green'){
    element.style.backgroundColor = color
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    pintar(this, 'yellow')
})

pintar(ele)


// this cumple la funcion de hacer referencia al elemento en el cual se produjo el evento.