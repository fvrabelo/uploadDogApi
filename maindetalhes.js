const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


function exec(){
    const data = fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
    .then(e=>e.json())
    .then(param=>{
        const dados = param
        document.querySelector("#name").innerHTML = dados.name;
        document.querySelector("#weight").innerHTML = (`${dados.weight.metric} kg`);
        document.querySelector("#life_span").innerHTML = dados.life_span
        document.querySelector("#temperament").innerHTML = dados.temperament;
        document.querySelector("#origin").innerHTML = dados.origin;
        document.querySelector("#image").innerHTML = dados.reference_image_id;
        console.log(dados);
    })
 
}
exec()