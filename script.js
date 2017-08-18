function pal18() {
  var dieciocho = new Date(2017, 08, 18);
  var ahora = Date.now();

  var diferencia = dieciocho - ahora;

  var d = diferencia /1000 /60 /60 /24;
  var dias = Math.floor(d);

  var h = (d - dias) *24;
  var horas = Math.floor(h);

  var m = (h - horas) *60;
  var minutos = Math.floor(m);

  var s = (m - minutos) *60;
  var segundos = Math.floor(s);

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}

function iniciar() {
  setInterval(pal18, 1000)
}
