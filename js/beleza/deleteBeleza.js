async function axiosDelete(id) {
    axios.delete(`${url}/${id}`, headers)
        .then(() => {
            alert("Produto Excluído!")
            deleteProdut(id)
        }
        )
        .catch(error => {
            console.log(error)
        })
}

function deleteProdut(id) {
    const tbody = document.getElementById('tbody_produtos')
    const tr = document.getElementById(id)
    tbody.removeChild(tr)
}