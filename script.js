function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("Light")

    //pegar a tag img
    const img = document.querySelector('#profile img')

    //substituir a imagem
    if (html.classList.contains("Light")) {

    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', 'assets/avatar.png')
    } else {
    // se tiver sem light mode, manter a imagem normal
img.setAttribute ('src', 'assets/avatar-dark.png')
    }
}












// se tiver light mode add img light
// se tiver sem light mode, manter a imagem normal
// substituir a imagem


