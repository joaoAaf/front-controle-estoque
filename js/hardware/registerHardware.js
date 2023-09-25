
const url = "https://parseapi.back4app.com/parse/classes/Hardware"
const register = document.getElementById("register")

register.addEventListener("submit", async function (event) {
    event.preventDefault()

    const data = {
        "Nome": document.getElementById("inputNome").value,
        "Marca": document.getElementById("inputMarca").value,
        "Descricao": document.getElementById("inputDescricao").value,
        "QuantidadeEstoque": 
          parseInt(document.getElementById("inputQuantidadeEstoque").value),
        "Preco": parseFloat(document.getElementById("inputPreco").value)
    }

    const headers = {
        headers: {
            "X-Parse-Application-Id": "Fu6z18WOdbbOdQbRUKqZrXfNUfoSHzJak7uat4RE",
            "X-Parse-REST-API-Key": "1DKQFZevoYx4A2I02G13BRIO5U1C8vnWjWrUyflb",
            "Content-Type": "application/json"
        }
    }

    await axios.post(url, data, headers)
        .then(response => {
            alert("Produto Cadastrado com Sucesso!")
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
})