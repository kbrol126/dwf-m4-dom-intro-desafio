const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  //declaro una constante al selector UL, para luego agregar el array nuevo
  const listaUL = document.querySelector("ul");
  console.log(listaUL);
  //busco el array con todos los Li
  const itemsLi = document.querySelectorAll("li");
  console.log(itemsLi);
  //itero y elimino los li
  for (const li of itemsLi) {
    li.remove();
  }
  //itero cosas que aprendimos y agrego tantos elementos como objetos haya

  for (const nuevosli of cosasQueAprendimos) {
    //agrego elementos li
    var newLi = document.createElement("li");
    //agrego clases del array cosasqueaprendimis y si esta vacio devuelve vacio, porque sino tira error
    newLi.classList.add(nuevosli.class || "vacio");
    //creo el texto para el li del array cosas que aprendimos
    var text = document.createTextNode(nuevosli.tema);
    //agrego el texto al li creado
    newLi.appendChild(text);
    //agrego los li a la lista UL
    listaUL.appendChild(newLi);
  }
}

main();
