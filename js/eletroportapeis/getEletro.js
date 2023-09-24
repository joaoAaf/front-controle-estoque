const url = "https://parseapi.back4app.com/parse/classes/Eletroportateis"

const headers = {
    headers: {
        "X-Parse-Application-Id": "Fu6z18WOdbbOdQbRUKqZrXfNUfoSHzJak7uat4RE",
        "X-Parse-REST-API-Key": "1DKQFZevoYx4A2I02G13BRIO5U1C8vnWjWrUyflb",
        "Content-Type": "application/json"
    }
}

async function axiosGet() {
    axios.get(url, headers)
        .then(response => {
            getProduts(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
}

function getProduts(produtos) {
    const tbody = document.getElementById('tbody_produtos')
    for (p of produtos) {

        const tr = document.createElement('tr')
        tr.className = "align-middle"
        tr.id = p.objectId

        let td = document.createElement('td')
        td.innerHTML = p.objectId
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = p.objectId + "0"
        td.innerHTML = p.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = p.objectId + "1"
        td.innerHTML = p.category
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = p.objectId + "2"
        td.innerHTML = p.power
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = p.objectId + "3"
        td.innerHTML = p.voltage
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = p.objectId + "4"
        td.innerHTML = p.stock
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = p.objectId + "5"
        td.innerHTML = p.price
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = p.id + "6"
        let div = document.createElement('div')
        div.className = "d-grid gap-2"
        div.appendChild(addButton("Remover", 0, p.objectId))
        div.appendChild(addButton("Alterar", 1, p.objectId))
        td.appendChild(div)
        tr.appendChild(td)

        tbody.appendChild(tr)
    }
}

function addButton(nome, num, id) {
    const button = document.createElement('button')
    button.type = "button"
    button.innerHTML = nome
    button.className = "btn btn-primary"
    button.onclick = function () { click(num, id) }
    return button
}