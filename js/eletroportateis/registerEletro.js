const url = "https://parseapi.back4app.com/parse/classes/Eletroportateis"
const register = document.getElementById("register")

register.addEventListener("submit", async function (event) {
    event.preventDefault()

    const data = {
        "name": document.getElementById("inputNome").value,
        "brand": document.getElementById("inputMarca").value,
        "description": document.getElementById("inputDescricao").value,
        "stock": parseInt(document.getElementById("inputEstoque").value),
        "price": parseFloat(document.getElementById("inputPreco").value)
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