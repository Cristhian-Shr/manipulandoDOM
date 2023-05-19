let btnVer = document.querySelector("input#btnVer");
btnVer.addEventListener("click", verificar);

function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fAno = document.getElementById("txtano");
  let res = document.querySelector("div#res");

  if (fAno.value.length == 0 || fAno.value > ano) {
    alert(`[ERRO] Verifique os dados e tente novamente!`);
  } else {
    let fSex = document.getElementsByName("radsex");
    let idade = ano - Number(fAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.width = 250;

    if (fSex[0].checked) {
      genero = "Homem";

      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "bebemenino.png");
      } else if (idade < 21) {
        img.setAttribute("src", "jovemhomem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "adultohomem.png");
      } else {
        img.setAttribute("src", "idosohomem.png");
      }
    } else if (fSex[1].checked) {
      genero = "Mulher";

      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "bebemenina.png");
      } else if (idade < 21) {
        img.setAttribute("src", "jovemmulher.png");
      } else if (idade < 50) {
        img.setAttribute("src", "adultomulher.png");
      } else {
        img.setAttribute("src", "idosomulher.png");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
