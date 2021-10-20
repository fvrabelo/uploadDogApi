function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}
fetch('https://api.thedogapi.com/v1/breeds').then(response => {
    return response.json()
})

document.querySelector('a').addEventListener('click', function(){
    console.log('foi');
})


function criaLinha(usuario){
    linha = document.createElement('tr')
    tdNome = document.createElement('a')
    tdNome.setAttribute('href', `https://api.thedogapi.com/v1/breeds/${usuario.id}`)
    tdLife = document.createElement('td')
    
    tdMais = document.createElement('a')
    tdMais.setAttribute('href', `+`)


    tdNome.innerHTML = usuario.name;
    tdLife.innerHTML = usuario.life_span;
    tdMais.innerHTML = 'Info';


    linha.appendChild(tdNome)
    linha.appendChild(tdLife)
    
    linha.appendChild(tdMais)


    return linha
}


let cont = 0;
function main(){
    let data = fazGet(`https://api.thedogapi.com/v1/breeds?limit=25&page=${cont}&order=ASC`)
    let usuarios = JSON.parse(data)
    
    let tabela = document.getElementById('tabela')
    usuarios.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    })
cont++

console.log(cont);
}

main()

function myFunction() {
    var c = document.getElementById("tabela").children;
    c[1].style.backgroundColor = "yellow";
    console.log('pintou');
  }
myFunction()