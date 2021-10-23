const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function getImage(imageId) {
    fetch(`https://api.thedogapi.com/v1/images/${imageId}`)
    .then(r =>r.json())
    .then(response=> {
      const data = response

      document.querySelector("#image").src = data.url;
    })
  }

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

        getImage(dados.reference_image_id);
    })
 
}
exec()