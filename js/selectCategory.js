function selectCategory() {
    selected = document.getElementById("inputCategoria").selectedIndex
    switch (selected) {
        case 1:
            window.location.href = "html/eletroportateis/gestaoEletro.html"
            break
        case 2:
            window.location.href = "html/beleza/gestaoBeleza.html"
            break
        case 3:
            window.location.href = "html/hardware/gestaoHardware.html"
            break
        case 4:
            window.location.href = "html/smartphones/gestaoSmartphone.html"
            break
        case 5:
            window.location.href = "html/esporte/gestaoEsporte.html"
            break
        case 6:
            window.location.href = "html/audio/gestaoÁudio.html"
            break
        default:
            alert("Selecione uma categoria!")
    }
}