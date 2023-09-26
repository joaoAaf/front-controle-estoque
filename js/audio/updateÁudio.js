async function axiosUpdate(id, produt) {
    axios.get(`${url}/${id}`, headers)
        .then(response => {
            const oldProdut = response.data
            produt.Nome = empty(produt.Nome, oldProdut.Nome)
            produt.Marca = empty(produt.Marca, oldProdut.Marca)
            produt.Descricao = empty(produt.Descricao, oldProdut.Descricao)
            produt.QuantidadeEstoque = empty(produt.QuantidadeEstoque,  
              oldProdut.QuantidadeEstoque)
            produt.Preco = empty(produt.Preco, oldProdut.Preco)
            axios.put(`${url}/${id}`, produt, headers)
                .then(() => {
                    alert("Produto Atualizado!")
                    axiosCancel(id)
                })
                .catch(error => {
                    console.log(error)
                })
        })
        .catch(error => {
            console.log(error)
        })
}

async function axiosCancel(id) {
    axios.get(`${url}/${id}`, headers)
        .then(response => {
            const produto = response.data
            cancel(produto, id)
        })
        .catch(error => {
            console.log(error)
        })
}

function addInput(type, placeHolder, id) {
    const input = document.createElement('input')
    input.id = id
    input.type = type
    input.className = "form-control"
    input.placeholder = placeHolder
    input.value = ''
    return input
}

function updateInit(id) {
    const tr = document.getElementById(id)
    let td = document.getElementById(id + "0")
    td.appendChild(addInput("text", "Digite o nome", id + "i0"))

    td = document.getElementById(id + "1")
    td.appendChild(addInput("text", "Digite a marca", id + "i1"))

    td = document.getElementById(id + "2")
    td.appendChild(addInput("text", "Digite a descrição", id + "i2"))

    td = document.getElementById(id + "3")
    td.appendChild(addInput("number", "Digite a quantidade", id + "i3"))

    td = document.getElementById(id + "4")
    td.appendChild(addInput("number", "Digite o preço", id + "i4"))

    td = document.getElementById(id + "5")
    tr.removeChild(td)
    td = document.createElement('td')
    td.id = id + "5"
    let div = document.createElement('div')
    div.className = "d-grid gap-2"
    div.appendChild(addButton("Aplicar", 2, id))
    div.appendChild(addButton("Cancelar", 3, id))
    td.appendChild(div)
    tr.appendChild(td)
}

function cancel(p, id) {
    const tr = document.getElementById(id)
    let td = document.getElementById(id + "0")
    tr.removeChild(td)
    td = document.getElementById(id + "1")
    tr.removeChild(td)
    td = document.getElementById(id + "2")
    tr.removeChild(td)
    td = document.getElementById(id + "3")
    tr.removeChild(td)
    td = document.getElementById(id + "4")
    tr.removeChild(td)
    td = document.getElementById(id + "5")
    tr.removeChild(td)

    td = document.createElement('td')
    td.id = p.objectId + "0"
    td.innerHTML = p.Nome
    tr.appendChild(td)

    td = document.createElement('td')
    td.id = p.objectId + "1"
    td.innerHTML = p.Marca
    tr.appendChild(td)

    td = document.createElement('td')
    td.id = p.objectId + "2"
    td.innerHTML = p.Descricao
    tr.appendChild(td)

    td = document.createElement('td')
    td.id = p.objectId + "3"
    td.innerHTML = p.QuantidadeEstoque
    tr.appendChild(td)

    td = document.createElement('td')
    td.id = p.objectId + "4"
    td.innerHTML = p.Preco
    tr.appendChild(td)

    td = document.createElement('td')
    td.id = p.objectId + "5"
    let div = document.createElement('div')
    div.className = "d-grid gap-2"
    div.appendChild(addButton("Remover", 0, p.objectId))
    div.appendChild(addButton("Alterar", 1, p.objectId))
    td.appendChild(div)
    tr.appendChild(td)
}

function updateDone(id) {
    let input = document.getElementById(id + "i0")
    let name = input.value
    input = document.getElementById(id + "i1")
    let brand = input.value
    input = document.getElementById(id + "i2")
    let description = input.value
    input = document.getElementById(id + "i3")
    let stock = input.value
    input = document.getElementById(id + "i4")
    let price = input.value

    let produt = {
        Nome: name,
        Marca: brand,
        Descricao: description,
        QuantidadeEstoque: stock,
        Preco: price
    }
    return produt
}

function empty(newProdut, oldProdut) {
    if (newProdut === '') {
        return oldProdut
    }
    return newProdut
}