function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  //coloca a tag em uma variavel (constante)
  const img = document.querySelector("#profile img")
  
  // substitui a imagem
  if(html.classList.contains('light')) {
    //se tiver a classe light, adiciona a imagem light
    img.setAttribute('src', 'https://xesque.rocketseat.dev/users/avatar/profile-10067e5e-120f-47cd-8ef6-4c4515fcdd8d-1630210394987.jpg')
  } else {
    //se tiver sem a classe light, mantem a imagem normal
    img.setAttribute('src', 'https://github.com/devmaroto.png')
  }
}







//  if(html.classList.contains('light')){
//   html.classList.remove('light')
//  } else {
//   html.classList.add('light')
//  }