var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var mapa = "tile.png";


//DEFINICIÓN TIPO JSON
var fondo =
  {
    url: "ctv/tile.png",
    cargaOK: false
  };
fondo.cuchipupu = new Image();
fondo.cuchipupu.src = fondo.url;
fondo.cuchipupu.addEventListener("load", cargarFondo);
//primero el nombre del evento, luego el nombre de la funcion

var vaca =
  {
    url: "ctv/caracol.png",
    cargaOK: false
  };
//DEFINICIÓN TIPO JSON
vaca.cuchipupu = new Image();
vaca.cuchipupu.src = vaca.url;
vaca.cuchipupu.addEventListener("load", cargarVacas);

var cerdo =
  {
    url: "ctv/caracol.png",
    cargaOK: false
  };
//DEFINICIÓN TIPO JSON
cerdo.cuchipupu = new Image();
cerdo.cuchipupu.src = cerdo.url;
cerdo.cuchipupu.addEventListener("load", cargarCerdos);

var pollo =
  {
    url: "ctv/caracol.png",
    cargaOK: false
  };
//DEFINICIÓN TIPO JSON
pollo.cuchipupu = new Image();
pollo.cuchipupu.src = pollo.url;
pollo.cuchipupu.addEventListener("load", cargarPollos);

var mingo =
  {
    url: "ctv/mingo.png",
    cargaOK: false
  };
//DEFINICIÓN TIPO JSON
mingo.cuchipupu = new Image();
mingo.cuchipupu.src = mingo.url;
mingo.cuchipupu.addEventListener("load", cargarMingos);

function cargarFondo()
  {
    fondo.cargaOK = true;
    dibujar();
  }
function cargarVacas()
  {
    vaca.cargaOK = true;
    dibujar();
  }
function cargarCerdos()
  {
    cerdo.cargaOK = true;
    dibujar();
  }
function cargarPollos()
  {
    pollo.cargaOK = true;
    dibujar();
  }
function cargarMingos()
  {
    mingo.cargaOK = true;
    dibujar();
  }
////////////////////////


////////////////////////


function dibujar()
  {
    if(fondo.cargaOK)
    {
      papel.drawImage(fondo.cuchipupu, 0, 0);
    }
    if(vaca.cargaOK)
    {
      papel.drawImage(vaca.cuchipupu, 120, 300);
    }
    if(cerdo.cargaOK)
    {
      papel.drawImage(cerdo.cuchipupu, 280, 390);
    }
    if(pollo.cargaOK)
    {
      papel.drawImage(pollo.cuchipupu, 420, 380);
    }
    if(mingo.cargaOK)
    {
      papel.drawImage(mingo.cuchipupu, 0, 0);
    }
  }


  //"nombre del canvas".drawImage --> "imagen" hace referencia al momento cuando la imagen ya está lista y cargada para ser llamada
  //punto (0,0) es la esq. superior derecha, y así vamos a poner la imagen en el canvas completo

  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };

  document.addEventListener("keydown", dibujarTeclado);
  //var cuadrito = document.getElementById("area_de_dibujo");
  //var papel = cuadrito.getContext("2d");
  var x = 50;
  var y = 160;

  dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

  function dibujarTeclado(evento)
  {
    var colorcito = "black";
    var movimiento = 20;
    switch(evento.keyCode)
    {
      case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    }
  }
alert("OH NO, ES CHUMINGO!  CORRAN!!")
