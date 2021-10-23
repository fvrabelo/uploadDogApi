function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
    }
    fetch('https://api.thedogapi.com/v1/breeds').then(response => {
    return response.json()
    })
    
    
    function criaLinha(usuario){
    linha = document.createElement('tr')
    tdNome = document.createElement('td')
    tdNome.setAttribute('innerText', `https://api.thedogapi.com/v1/breeds/${usuario.id}`)
    tdLife = document.createElement('td')
    
    tdMais = document.createElement('a')
    tdMais.setAttribute('href',`detalhes.html?id=${usuario.id}`)
    
    
    tdNome.innerHTML = usuario.name;
    tdLife.innerHTML = usuario.life_span;
    tdMais.innerHTML = 'Info';
    tdMais.className = 'css-info';
    
    
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
    }
    
    main()