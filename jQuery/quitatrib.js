$ (document).ready(() => {
  var elementos =  document.querySelectorAll("li");

  for  (var i=0;i  < elementos.length;i++) {
    elementos[i].addEventListener("mouseover", ponerImagen, false);

    elementos[i].addEventListener("mouseout", quitarImagen, false);
  }

});

function ponerImagen(e) {
  if (e.target==elem1) {
    $("#elem1").addClass("destacar");
    $("img").attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HyM4JU1xNhvOBu1t1e2u5AHaJB%26pid%3DApi&f=1"	);
  } else if (e.target==elem2) {
    $("#elem2").addClass("destacar");
    $("img").attr("src", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpm1.narvii.com%2F7119%2Fb0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg&f=1&nofb=1");
  } else if (e.target==elem3) {
    $("#elem3").addClass("destacar");
    $("img").attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fimg3.pregunta2.com%2F2016-12%2F16%2Fquiz-41698-cov-800-300.jpg&f=1&nofb=1");
  } else if (e.target == elem4) {
    $("#elem4").addClass("destacar");
    $("img").attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft4.kn3.net%2Ftaringa%2FA%2F9%2F2%2FD%2F4%2F5%2Fasdfghjkas%2F179.jpg&f=1&nofb=1");
  }
}

function quitarImagen(e) {
  if  (e.target == elem1) {
    $("#elem1").removeClass("destacar");
    $("img").removeAttr("src");
  } else if (e.target == elem2) {
    $("#elem2").removeClass("destacar");
    $("img").removeAttr("src");
  } else if (e.target == elem3) {
    $("#elem3").removeClass("destacar");
    $("img").removeAttr("src");
  } else if (e.target == elem4) {
    $("#elem4").removeClass("destacar");
    $("img").removeAttr("src");
  }
}
