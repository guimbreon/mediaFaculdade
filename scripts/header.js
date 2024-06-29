let urlParams3 = window.location.href;

function buildHeader() {
  let header = document.getElementById("header");
  header.id = "header";

  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let a = document.createElement("a");
  let imgHome = document.createElement("img");

  
  let langLI = document.createElement("li");
  let langA = document.createElement("a");
  let imgLang = document.createElement("img")

  if (urlParams3.includes("index.html")) {
    a.href = "index.html";
    imgHome.src = "images/home.png";
    langA.href = "ing/index.html"
    imgLang.src = "images/uk.png"
  } else {
    a.href = "../index.html";
    imgHome.src = "../images/home.png";
    langA.href = "../ing/index.html"
    imgLang.src = "../images/uk.png"

  }

  a.appendChild(imgHome);
  li.appendChild(a);
  
  
  langA.appendChild(imgLang)
  langLI.appendChild(langA)

  ul.appendChild(li);
  ul.appendChild(langLI)
  nav.appendChild(ul);
  header.appendChild(nav);

  let divSair = document.createElement("div");
  divSair.id = "sair";

  let imgUser = document.createElement("img");
  if (urlParams3.includes("index.html")) {
    imgUser.src = "images/user.png";
  } else {
    imgUser.src = "../images/user.png";
  }

  let divHover = document.createElement("div");
  divHover.id = "hover";

  let divSubHover1 = document.createElement("div");
  divSubHover1.id = "subHover";
  let aPerfil = document.createElement("a");
  if (urlParams3.includes("index.html")) {
    aPerfil.href = "pag/perfil.html";
  } else {
    aPerfil.href = "../pag/perfil.html";
  }
  aPerfil.textContent = "Perfil";
  divSubHover1.appendChild(aPerfil);

  let divSubHover2 = document.createElement("div");
  divSubHover2.id = "subHover";
  let imgExit = document.createElement("img");
  if (urlParams3.includes("index.html")) {
    imgExit.src = "images/exit.png";
  } else {
    imgExit.src = "../images/exit.png";
  }
  imgExit.onclick = function() {
    unLogin();
  };
  divSubHover2.appendChild(imgExit);

  divHover.appendChild(divSubHover1);
  divHover.appendChild(divSubHover2);
  divSair.appendChild(imgUser);
  divSair.appendChild(divHover);

  header.appendChild(divSair);
}



buildHeader();