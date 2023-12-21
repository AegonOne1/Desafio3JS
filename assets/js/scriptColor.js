
const changeColorDiv = document.querySelectorAll('.changeColor');
changeColorDiv.forEach(div => {
    div.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'black';
    });
});


const divKey = document.getElementById('key');

document.addEventListener('keydown', function(change){
    const key = change.key.toLowerCase();
    let keyChange = '';
    if (key === "a" || key === "A"){
        keyChange = 'pink';
    } else if (key === "s" || key === "S"){
        keyChange = 'orange';
    } else if (key === "d" || key === "D"){
        keyChange = 'skyblue';
    } else if (key === "q" || key === "Q"){
        createNewDiv('purple');
    } else if (key === "w" || key === "W"){
        createNewDiv('gray');
    } else if (key === "e" || key === "E"){
        createNewDiv('brown');
    }
    
    divKey.style.backgroundColor = keyChange;
});

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.margin = '10px';
    newDiv.style.display = 'inline-block';

    document.body.appendChild(newDiv);
}