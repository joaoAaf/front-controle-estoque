function selectCategory() {
    selected = document.getElementById("inputCategoria").selectedIndex
    switch (selected) {
        case 1:
            window.location.href = "html/eletroportapeis/gestaoEletro.html"
            break
        case 2:
            window.location.href = ""
            break
        case 3:
            window.location.href = ""
            break
        case 4:
            window.location.href = ""
            break
        case 5:
            window.location.href = ""
            break
        case 6:
            window.location.href = ""
            break
        default:
            alert("Selecione uma categoria!")
    }
}