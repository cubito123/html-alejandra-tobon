document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "back 1",
      imagenes: "imagenes/back 1.jpg"
    },
    {
      name: "back 2",
      imagenes: "imagenes/back 2.jpg"
    },
    {
      name: "back 3",
      imagenes: "imagenes/back 3.jpg"
    },
    {
      name: "back 4",
      imagenes: "imagenes/back 4.jpg"
    },
    {
      name: "back 5",
      imagenes: "imagenes/back 5.jpg"
    },
    {
      name: "back 6",
      imagenes: "imagenes/back 6.jpg"
    },
    {
      name: "back 1",
      imagenes: "imagenes/back 1.jpg"
    },
    {
      name: "back 2",
      imagenes: "imagenes/back 2.jpg"
    },
    {
      name: "back 3",
      imagenes: "imagenes/back 3.jpg"
    },
    {
      name: "back 4",
      imagenes: "imagenes/back 4.jpg"
    },
    {
      name: "back 5",
      imagenes: "imagenes/back 5.jpg"
    },
    {
      name: "back 6",
      imagenes: "imagenes/back 6.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
      // cuando i=cardAdj.length, es decir, 12.
      var carta = document.createElement("img"); // Crea elemento img cada vez que se ejecuta la función.
      carta.setAttribute("src", "imagenes/reverso.png"); //Asignar nuevo atributo a cada carta
      //igual a la imagen 'reverso'.
      carta.setAttribute("data-id", i); //Asignar como atributo a cada carta creada, el id=i.
      carta.addEventListener("click", voltearCarta); //Detectar si la carta asignada recibe un click y ejecuta
      //la función voltearCarta.
      cuadricula.appendChild(carta); // Relaciona la carta creada con la variable cuadricula enlazada con la clase
      // cuadricula de html para que se imprima la carta creada en el div de html.
    }
  }
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarpareja, 1000);
    }
  }
  crearTablero();
});
