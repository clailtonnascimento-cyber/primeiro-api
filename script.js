function buscarApi(){
    fetch("https://viacep.com.br/ws/01001000/json/")
    .then(resposta => {
        return resposta.json()
    }).then(data => {
        console.log(data);
    })
}

async function buscaApisync() {
    let resposta = await   fetch("https://viacep.com.br/ws/01001000/json/")
    let data = await resposta.json();

    console.log(data);

}

buscarApiAsync();
