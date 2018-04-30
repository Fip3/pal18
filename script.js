function pal18() {
  var ahora = new Date();

  var anho = ahora.getFullYear();
  var mes = ahora.getMonth();
  var dia = ahora.getDate();

  if (mes < 8) {
    var dieciocho = new Date(anho, 8, 18);
  } else if (mes > 8) {
    var dieciocho = new Date(anho + 1, 8, 18);
  } else {
    if (dia < 18) {
      var dieciocho = new Date(anho, 8, 18);
    } else if (dia >= 18) {
      var dieciocho = new Date(anho + 1, 8, 18);
    }
  }

  var diferencia = dieciocho - ahora;
  console.log("diferencia " + diferencia);  

  var d = diferencia /1000 /60 /60 /24;
  var dias = Math.floor(d);

  var h = (d - dias) *24;
  var horas = Math.floor(h);

  var m = (h - horas) *60;
  var minutos = Math.floor(m);

  var s = (m - minutos) *60;
  var segundos = parseFloat(s).toFixed(3);

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}

function iniciar() {
  setInterval(pal18, 1)
}
