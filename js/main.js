function bar() {
  let nav = document.querySelector(".nav-wrap");
  let scrollTopButton = document.querySelector("#scrollUp");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 50) {
      nav.classList.add("header-scrolled");
    } else {
      nav.classList.remove("header-scrolled");
    }
    if (scroll >= 230) {
      scrollTopButton.classList.add("scroll-back");
    } else {
      scrollTopButton.classList.remove("scroll-back");
    }
  };
}
bar();

$(window).on("load", function () {
  $("#exampleModal").modal("show");
});

$(document).ready(function () {
  $("#metal1").click(function () {
    $("#main-diamond").attr("src", "images/product1/away2.jpg");
  });

  $("#metal2").click(function () {
    $("#main-diamond").attr("src", "images/product1/away1.jpg");
  });

  $("#metal3").click(function () {
    $("#main-diamond").attr("src", "images/product1/away3.jpg");
  });
  //diamond-section
  $("#diamond1").click(function () {
    $("#main-diamond").attr("src", "images/product1/away2 (1).jpg");
    $("#metal1").click(function () {
      $("#main-diamond").attr("src", "images/product1/away1 (1).jpg");
    });
    $("#metal2").click(function () {
      $("#main-diamond").attr("src", "images/product1/away2 (1).jpg");
    });
    $("#metal3").click(function () {
      $("#main-diamond").attr("src", "images/product1/away3 (1).jpg");
    });
  });

  //next-section

  $("#diamond2").click(function () {
    $("#main-diamond").attr("src", "images/product1/away1 (2).jpg");
    $("#metal1").click(function () {
      $("#main-diamond").attr("src", "images/product1/away1 (2).jpg");
    });
    $("#metal2").click(function () {
      $("#main-diamond").attr("src", "images/product1/away2 (2).jpg");
    });
    $("#metal3").click(function () {
      $("#main-diamond").attr("src", "images/product1/away3 (2).jpg");
    });
  });

  //next-section-2

  $("#diamond3").click(function () {
    $("#main-diamond").attr("src", "images/product1/away2 (3).jpg");
    $("#metal1").click(function () {
      $("#main-diamond").attr("src", "images/product1/away2 (3).jpg");
    });
    $("#metal2").click(function () {
      $("#main-diamond").attr("src", "images/product1/away1 (3).jpg");
    });
    $("#metal3").click(function () {
      $("#main-diamond").attr("src", "images/product1/away3 (3).jpg");
    });
  });

  //next-section-2

  $("#diamond4").click(function () {
    $("#main-diamond").attr("src", "images/product1/away1 (6).jpg");
    $("#metal1").click(function () {
      $("#main-diamond").attr("src", "images/product1/away1 (6).jpg");
    });
    $("#metal2").click(function () {
      $("#main-diamond").attr("src", "images/product1/away2 (6).jpg");
    });
    $("#metal3").click(function () {
      $("#main-diamond").attr("src", "images/product1/away3 (6).jpg");
    });
  });

  //next-section-3

  $("#diamond5").click(function () {
    $("#main-diamond").attr("src", "images/product1/away2.jpg");
    $("#metal1").click(function () {
      $("#main-diamond").attr("src", "images/product1/away2.jpg");
    });
    $("#metal2").click(function () {
      $("#main-diamond").attr("src", "images/product1/away1.jpg");
    });
    $("#metal3").click(function () {
      $("#main-diamond").attr("src", "images/product1/away3.jpg");
    });
  });

  //next-section-5

  $("#diamond6").click(function () {
    $("#main-diamond").attr("src", "images/product1/away1 (5).jpg");
    $("#metal1").click(function () {
      $("#main-diamond").attr("src", "images/product1/away1 (5).jpg");
    });
    $("#metal2").click(function () {
      $("#main-diamond").attr("src", "images/product1/away2 (5).jpg");
    });
    $("#metal3").click(function () {
      $("#main-diamond").attr("src", "images/product1/away3 (5).jpg");
    });
  });

  //next-section-last-line

  $("#diamond7").click(function () {
    $("#main-diamond").attr("src", "images/product1/away1 (4).jpg");
    $("#metal1").click(function () {
      $("#main-diamond").attr("src", "images/product1/away1 (4).jpg");
    });
    $("#metal2").click(function () {
      $("#main-diamond").attr("src", "images/product1/away2 (4).jpg");
    });
    $("#metal3").click(function () {
      $("#main-diamond").attr("src", "images/product1/away3 (4).jpg");
    });
  });
});
function emp() {
  var emp = document.getElementById("emp").value;

  if (emp == "") {
    alert("Please fill out the form!");
  } else {
    $(document).ready(function () {
      $(".modal2").attr("id", "Orderplaced");
    });
  }
}

//cart-scripting
function add1() {
  var ring = document.getElementById("ring").innerHTML;
  var price1 = document.getElementById("price1").innerHTML;
  var maindiamond = document.getElementById("main-diamond").getAttribute("src");
  sessionStorage.setItem("ring", ring);
  sessionStorage.setItem("price1", price1);
  sessionStorage.setItem("main-diamond", maindiamond);
  alert(ring + " ADD TO CART");
}

var ring = sessionStorage.getItem("ring");
var img = sessionStorage.getItem("main-diamond");
var pricing = sessionStorage.getItem("price1");

if (
  sessionStorage.getItem("ring") &&
  sessionStorage.getItem("main-diamond") &&
  sessionStorage.getItem("price1")
) {
  var prod1 =
    "<div class='row'><div class='col-md-4 text-white text-center' id='product-cart'></div><div class='col-md-4 text-white text-center'><img id='cart-img' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cart-price'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct1()'></i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod1;
  document.getElementById("product-cart").innerHTML += ring;
  document.getElementById("cart-img").setAttribute("src", img);
  document.getElementById("cart-price").innerHTML += pricing;
}

function removeproduct1() {
  document.getElementById("prod").innerHTML -= prod1;
  sessionStorage.removeItem("ring");
  sessionStorage.removeItem("main-diamond");
  sessionStorage.removeItem("price1");

  window.location.reload();
}

//next-product

function cart1() {
  var productname = document.getElementById("productname").innerHTML;
  var productprice = document.getElementById("productprice").innerHTML;
  var productpic = document.getElementById("productpic").getAttribute("src");
  sessionStorage.setItem("productname", productname);
  sessionStorage.setItem("productprice", productprice);
  sessionStorage.setItem("productpic", productpic);
  alert(productname + " ADD TO CART");
}

var productname = sessionStorage.getItem("productname");
var productpic = sessionStorage.getItem("productpic");
var productprice = sessionStorage.getItem("productprice");

if (
  sessionStorage.getItem("productname") &&
  sessionStorage.getItem("productpic") &&
  sessionStorage.getItem("productprice")
) {
  var prod2 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart'></div><div class='col-md-4 text-white text-center'> <img id='cartimg' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct2()'></i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod2;
  document.getElementById("productcart").innerHTML += productname;
  document.getElementById("cartimg").setAttribute("src", productpic);
  document.getElementById("cartprice").innerHTML += productprice;
}

function removeproduct2() {
  document.getElementById("prod").innerHTML -= prod2;
  sessionStorage.removeItem("productname");
  sessionStorage.removeItem("productpic");
  sessionStorage.removeItem("productprice");

  window.location.reload();
}

//next-product

function cart2() {
  var productname1 = document.getElementById("productname1").innerHTML;
  var productprice1 = document.getElementById("productprice1").innerHTML;
  var productpic1 = document.getElementById("productpic1").getAttribute("src");
  sessionStorage.setItem("productname1", productname1);
  sessionStorage.setItem("productprice1", productprice1);
  sessionStorage.setItem("productpic1", productpic1);
  alert(productname1 + " ADD TO CART");
}

var productname1 = sessionStorage.getItem("productname1");
var productpic1 = sessionStorage.getItem("productpic1");
var productprice1 = sessionStorage.getItem("productprice1");

if (
  sessionStorage.getItem("productname1") &&
  sessionStorage.getItem("productpic1") &&
  sessionStorage.getItem("productprice1")
) {
  var prod3 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart1'></div><div class='col-md-4 text-white text-center'> <img id='cartimg1' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice1'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct3()'></i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod3;
  document.getElementById("productcart1").innerHTML += productname1;
  document.getElementById("cartimg1").setAttribute("src", productpic1);
  document.getElementById("cartprice1").innerHTML += productprice1;
}

function removeproduct3() {
  document.getElementById("prod").innerHTML -= prod3;
  sessionStorage.removeItem("productname1");
  sessionStorage.removeItem("productpic1");
  sessionStorage.removeItem("productprice1");

  window.location.reload();
}

//next-product

function cart3() {
  var productname2 = document.getElementById("productname2").innerHTML;
  var productprice2 = document.getElementById("productprice2").innerHTML;
  var productpic2 = document.getElementById("productpic2").getAttribute("src");
  sessionStorage.setItem("productname2", productname2);
  sessionStorage.setItem("productprice2", productprice2);
  sessionStorage.setItem("productpic2", productpic2);
  alert(productname2 + " ADD TO CART");
}

var productname2 = sessionStorage.getItem("productname2");
var productpic2 = sessionStorage.getItem("productpic2");
var productprice2 = sessionStorage.getItem("productprice2");

if (
  sessionStorage.getItem("productname2") &&
  sessionStorage.getItem("productpic2") &&
  sessionStorage.getItem("productprice2")
) {
  var prod4 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart2'></div><div class='col-md-4 text-white text-center'> <img id='cartimg2' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice2'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct4()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod4;
  document.getElementById("productcart2").innerHTML += productname2;
  document.getElementById("cartimg2").setAttribute("src", productpic2);
  document.getElementById("cartprice2").innerHTML += productprice2;
}

function removeproduct4() {
  document.getElementById("prod").innerHTML -= prod4;
  sessionStorage.removeItem("productname2");
  sessionStorage.removeItem("productpic2");
  sessionStorage.removeItem("productprice2");

  window.location.reload();
}

//next-product

function cart4() {
  var productname3 = document.getElementById("productname3").innerHTML;
  var productprice3 = document.getElementById("productprice3").innerHTML;
  var productpic3 = document.getElementById("productpic3").getAttribute("src");
  sessionStorage.setItem("productname3", productname3);
  sessionStorage.setItem("productprice3", productprice3);
  sessionStorage.setItem("productpic3", productpic3);
  alert(productname3 + " ADD TO CART");
}

var productname3 = sessionStorage.getItem("productname3");
var productpic3 = sessionStorage.getItem("productpic3");
var productprice3 = sessionStorage.getItem("productprice3");

if (
  sessionStorage.getItem("productname3") &&
  sessionStorage.getItem("productpic3") &&
  sessionStorage.getItem("productprice3")
) {
  var prod5 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart3'></div><div class='col-md-4 text-white text-center'> <img id='cartimg3' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice3'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct5()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod5;
  document.getElementById("productcart3").innerHTML += productname3;
  document.getElementById("cartimg3").setAttribute("src", productpic3);
  document.getElementById("cartprice3").innerHTML += productprice3;
}

function removeproduct5() {
  document.getElementById("prod").innerHTML -= prod5;
  sessionStorage.removeItem("productname3");
  sessionStorage.removeItem("productpic3");
  sessionStorage.removeItem("productprice3");

  window.location.reload();
}

//next-product

function tekken1() {
  var productname4 = document.getElementById("productname4").innerHTML;
  var productprice4 = document.getElementById("productprice4").innerHTML;
  var productpic4 = document.getElementById("productpic4").getAttribute("src");
  sessionStorage.setItem("productname4", productname4);
  sessionStorage.setItem("productprice4", productprice4);
  sessionStorage.setItem("productpic4", productpic4);
  alert(productname4 + " ADD TO CART");
}

var productname4 = sessionStorage.getItem("productname4");
var productpic4 = sessionStorage.getItem("productpic4");
var productprice4 = sessionStorage.getItem("productprice4");

if (
  sessionStorage.getItem("productname4") &&
  sessionStorage.getItem("productpic4") &&
  sessionStorage.getItem("productprice4")
) {
  var prod6 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart4'></div><div class='col-md-4 text-white text-center'> <img id='cartimg4' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice4'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct6()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod6;
  document.getElementById("productcart4").innerHTML += productname4;
  document.getElementById("cartimg4").setAttribute("src", productpic4);
  document.getElementById("cartprice4").innerHTML += productprice4;
}

function removeproduct6() {
  document.getElementById("prod").innerHTML -= prod6;
  sessionStorage.removeItem("productname4");
  sessionStorage.removeItem("productpic4");
  sessionStorage.removeItem("productprice4");

  window.location.reload();
}

//next-product

function tekken2() {
  var productname5 = document.getElementById("productname5").innerHTML;
  var productprice5 = document.getElementById("productprice5").innerHTML;
  var productpic5 = document.getElementById("productpic5").getAttribute("src");
  sessionStorage.setItem("productname5", productname5);
  sessionStorage.setItem("productprice5", productprice5);
  sessionStorage.setItem("productpic5", productpic5);
  alert(productname5 + " ADD TO CART");
}

var productname5 = sessionStorage.getItem("productname5");
var productpic5 = sessionStorage.getItem("productpic5");
var productprice5 = sessionStorage.getItem("productprice5");

if (
  sessionStorage.getItem("productname5") &&
  sessionStorage.getItem("productpic5") &&
  sessionStorage.getItem("productprice5")
) {
  var prod7 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart5'></div><div class='col-md-4 text-white text-center'> <img id='cartimg5' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice5'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct7()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod7;
  document.getElementById("productcart5").innerHTML += productname5;
  document.getElementById("cartimg5").setAttribute("src", productpic5);
  document.getElementById("cartprice5").innerHTML += productprice5;
}

function removeproduct7() {
  document.getElementById("prod").innerHTML -= prod7;
  sessionStorage.removeItem("productname5");
  sessionStorage.removeItem("productpic5");
  sessionStorage.removeItem("productprice5");

  window.location.reload();
}

//next-product

function tekken3() {
  var productname6 = document.getElementById("productname6").innerHTML;
  var productprice6 = document.getElementById("productprice6").innerHTML;
  var productpic6 = document.getElementById("productpic6").getAttribute("src");
  sessionStorage.setItem("productname6", productname6);
  sessionStorage.setItem("productprice6", productprice6);
  sessionStorage.setItem("productpic6", productpic6);
  alert(productname6 + " ADD TO CART");
}

var productname6 = sessionStorage.getItem("productname6");
var productpic6 = sessionStorage.getItem("productpic6");
var productprice6 = sessionStorage.getItem("productprice6");

if (
  sessionStorage.getItem("productname6") &&
  sessionStorage.getItem("productpic6") &&
  sessionStorage.getItem("productprice6")
) {
  var prod8 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart6'></div><div class='col-md-4 text-white text-center'> <img id='cartimg6' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice6'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct8()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod8;
  document.getElementById("productcart6").innerHTML += productname6;
  document.getElementById("cartimg6").setAttribute("src", productpic6);
  document.getElementById("cartprice6").innerHTML += productprice6;
}

function removeproduct8() {
  document.getElementById("prod").innerHTML -= prod8;
  sessionStorage.removeItem("productname6");
  sessionStorage.removeItem("productpic6");
  sessionStorage.removeItem("productprice6");

  window.location.reload();
}

//next-product

function tekken4() {
  var productname7 = document.getElementById("productname7").innerHTML;
  var productprice7 = document.getElementById("productprice7").innerHTML;
  var productpic7 = document.getElementById("productpic7").getAttribute("src");
  sessionStorage.setItem("productname7", productname7);
  sessionStorage.setItem("productprice7", productprice7);
  sessionStorage.setItem("productpic7", productpic7);
  alert(productname7 + " ADD TO CART");
}

var productname7 = sessionStorage.getItem("productname7");
var productpic7 = sessionStorage.getItem("productpic7");
var productprice7 = sessionStorage.getItem("productprice7");

if (
  sessionStorage.getItem("productname7") &&
  sessionStorage.getItem("productpic7") &&
  sessionStorage.getItem("productprice7")
) {
  var prod9 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart7'></div><div class='col-md-4 text-white text-center'> <img id='cartimg7' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice7'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct9()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod9;
  document.getElementById("productcart7").innerHTML += productname7;
  document.getElementById("cartimg7").setAttribute("src", productpic7);
  document.getElementById("cartprice7").innerHTML += productprice7;
}

function removeproduct9() {
  document.getElementById("prod").innerHTML -= prod8;
  sessionStorage.removeItem("productname7");
  sessionStorage.removeItem("productpic7");
  sessionStorage.removeItem("productprice7");

  window.location.reload();
}

//next-product

function tekken5() {
  var productname8 = document.getElementById("productname8").innerHTML;
  var productprice8 = document.getElementById("productprice8").innerHTML;
  var productpic8 = document.getElementById("productpic8").getAttribute("src");
  sessionStorage.setItem("productname8", productname8);
  sessionStorage.setItem("productprice8", productprice8);
  sessionStorage.setItem("productpic8", productpic8);
  alert(productname8 + " ADD TO CART");
}

var productname8 = sessionStorage.getItem("productname8");
var productpic8 = sessionStorage.getItem("productpic8");
var productprice8 = sessionStorage.getItem("productprice8");

if (
  sessionStorage.getItem("productname8") &&
  sessionStorage.getItem("productpic8") &&
  sessionStorage.getItem("productprice8")
) {
  var prod10 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart8'></div><div class='col-md-4 text-white text-center'> <img id='cartimg8' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice8'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct10()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod10;
  document.getElementById("productcart8").innerHTML += productname8;
  document.getElementById("cartimg8").setAttribute("src", productpic8);
  document.getElementById("cartprice8").innerHTML += productprice8;
}

function removeproduct10() {
  document.getElementById("prod").innerHTML -= prod10;
  sessionStorage.removeItem("productname8");
  sessionStorage.removeItem("productpic8");
  sessionStorage.removeItem("productprice8");

  window.location.reload();
}

//next-product

function tekken6() {
  var productname9 = document.getElementById("productname9").innerHTML;
  var productprice9 = document.getElementById("productprice9").innerHTML;
  var productpic9 = document.getElementById("productpic9").getAttribute("src");
  sessionStorage.setItem("productname9", productname9);
  sessionStorage.setItem("productprice9", productprice9);
  sessionStorage.setItem("productpic9", productpic9);
  alert(productname9 + " ADD TO CART");
}

var productname9 = sessionStorage.getItem("productname9");
var productpic9 = sessionStorage.getItem("productpic9");
var productprice9 = sessionStorage.getItem("productprice9");

if (
  sessionStorage.getItem("productname9") &&
  sessionStorage.getItem("productpic9") &&
  sessionStorage.getItem("productprice9")
) {
  var prod11 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart9'></div><div class='col-md-4 text-white text-center'> <img id='cartimg9' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice9'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct11()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod11;
  document.getElementById("productcart9").innerHTML += productname9;
  document.getElementById("cartimg9").setAttribute("src", productpic9);
  document.getElementById("cartprice9").innerHTML += productprice9;
}

function removeproduct11() {
  document.getElementById("prod").innerHTML -= prod11;
  sessionStorage.removeItem("productname9");
  sessionStorage.removeItem("productpic9");
  sessionStorage.removeItem("productprice9");

  window.location.reload();
}

//next-product

function tekken7() {
  var productname10 = document.getElementById("productname10").innerHTML;
  var productprice10 = document.getElementById("productprice10").innerHTML;
  var productpic10 = document
    .getElementById("productpic10")
    .getAttribute("src");
  sessionStorage.setItem("productname10", productname10);
  sessionStorage.setItem("productprice10", productprice10);
  sessionStorage.setItem("productpic10", productpic10);
  alert(productname10 + " ADD TO CART");
}

var productname10 = sessionStorage.getItem("productname10");
var productpic10 = sessionStorage.getItem("productpic10");
var productprice10 = sessionStorage.getItem("productprice10");

if (
  sessionStorage.getItem("productname10") &&
  sessionStorage.getItem("productpic10") &&
  sessionStorage.getItem("productprice10")
) {
  var prod12 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='productcart10'></div><div class='col-md-4 text-white text-center'> <img id='cartimg10' class='img-fluid rounded-circle' width='14%'></div><div class='col-md-4 text-white text-center' id='cartprice10'><div class='icon-cross'><i class='bx bx-x text-white' onclick='removeproduct12()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod12;
  document.getElementById("productcart10").innerHTML += productname10;
  document.getElementById("cartimg10").setAttribute("src", productpic10);
  document.getElementById("cartprice10").innerHTML += productprice10;
}

function removeproduct12() {
  document.getElementById("prod").innerHTML -= prod12;
  sessionStorage.removeItem("productname10");
  sessionStorage.removeItem("productpic10");
  sessionStorage.removeItem("productprice10");

  window.location.reload();
}

//next-product

function tekken8() {
  var artificalname1 = document.getElementById("artificalname").innerHTML;
  var artificalprice1 = document.getElementById("artificalprice").innerHTML;
  var artifical1 = document.getElementById("artifical1").getAttribute("src");
  sessionStorage.setItem("artificalname", artificalname1);
  sessionStorage.setItem("artificalprice", artificalprice1);
  sessionStorage.setItem("artifical1", artifical1);
  alert(artificalname1 + " ADD TO CART");
}

var artificalname1 = sessionStorage.getItem("artificalname");
var artifical1 = sessionStorage.getItem("artifical1");
var artificalprice1 = sessionStorage.getItem("artificalprice");

if (
  sessionStorage.getItem("artificalname") &&
  sessionStorage.getItem("artifical1") &&
  sessionStorage.getItem("artificalprice")
) {
  var prod13 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='atiname'></div><div class='col-md-4 text-white text-center'> <img id='atiimage' class='img-fluid rounded-circle' width='18%'></div><div class='col-md-4 text-white text-center' id='atiprice'><div class='icon-cross'><i class='bx bx-x text-white' onclick='remover1()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod13;
  document.getElementById("atiname").innerHTML += artificalname1;
  document.getElementById("atiimage").setAttribute("src", artifical1);
  document.getElementById("atiprice").innerHTML += artificalprice1;
}

function remover1() {
  document.getElementById("prod").innerHTML -= prod13;
  sessionStorage.removeItem("artificalname1");
  sessionStorage.removeItem("artifical1");
  sessionStorage.removeItem("artificalprice1");

  window.location.reload();
}

//next-product

function tekken9() {
  var artificalname2 = document.getElementById("artificalname1").innerHTML;
  var artificalprice2 = document.getElementById("artificalprice1").innerHTML;
  var artifical2 = document.getElementById("artifical2").getAttribute("src");
  sessionStorage.setItem("artificalname1", artificalname2);
  sessionStorage.setItem("artificalprice1", artificalprice2);
  sessionStorage.setItem("artifical2", artifical2);
  alert(artificalname2 + " ADD TO CART");
}

var artificalname2 = sessionStorage.getItem("artificalname1");
var artifical2 = sessionStorage.getItem("artifical2");
var artificalprice2 = sessionStorage.getItem("artificalprice1");

if (
  sessionStorage.getItem("artificalname1") &&
  sessionStorage.getItem("artifical2") &&
  sessionStorage.getItem("artificalprice1")
) {
  var prod14 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='atiname1'></div><div class='col-md-4 text-white text-center'> <img id='atiimage1' class='img-fluid rounded-circle' width='18%'></div><div class='col-md-4 text-white text-center' id='atiprice1'><div class='icon-cross'><i class='bx bx-x text-white' onclick='remover2()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod14;
  document.getElementById("atiname1").innerHTML += artificalname2;
  document.getElementById("atiimage1").setAttribute("src", artifical2);
  document.getElementById("atiprice1").innerHTML += artificalprice2;
}

function remover2() {
  document.getElementById("prod").innerHTML -= prod14;
  sessionStorage.removeItem("artificalname2");
  sessionStorage.removeItem("artifical2");
  sessionStorage.removeItem("artificalprice2");

  window.location.reload();
}

//next-product

function tekken10() {
  var artificalname3 = document.getElementById("artificalname2").innerHTML;
  var artificalprice3 = document.getElementById("artificalprice2").innerHTML;
  var artifical3 = document.getElementById("artifical3").getAttribute("src");
  sessionStorage.setItem("artificalname2", artificalname3);
  sessionStorage.setItem("artificalprice2", artificalprice3);
  sessionStorage.setItem("artifical3", artifical3);
  alert(artificalname3 + " ADD TO CART");
}

var artificalname3 = sessionStorage.getItem("artificalname2");
var artifical3 = sessionStorage.getItem("artifical3");
var artificalprice3 = sessionStorage.getItem("artificalprice2");

if (
  sessionStorage.getItem("artificalname2") &&
  sessionStorage.getItem("artifical3") &&
  sessionStorage.getItem("artificalprice2")
) {
  var prod15 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='atiname2'></div><div class='col-md-4 text-white text-center'> <img id='atiimage2' class='img-fluid rounded-circle' width='18%'></div><div class='col-md-4 text-white text-center' id='atiprice2'><div class='icon-cross'><i class='bx bx-x text-white' onclick='remover3()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod15;
  document.getElementById("atiname2").innerHTML += artificalname3;
  document.getElementById("atiimage2").setAttribute("src", artifical3);
  document.getElementById("atiprice2").innerHTML += artificalprice3;
}

function remover3() {
  document.getElementById("prod").innerHTML -= prod15;
  sessionStorage.removeItem("artificalname3");
  sessionStorage.removeItem("artifical3");
  sessionStorage.removeItem("artificalprice3");

  window.location.reload();
}

//next-product

function tekken11() {
  var artificalname4 = document.getElementById("artificalname3").innerHTML;
  var artificalprice4 = document.getElementById("artificalprice3").innerHTML;
  var artifical4 = document.getElementById("artifical4").getAttribute("src");
  sessionStorage.setItem("artificalname2", artificalname4);
  sessionStorage.setItem("artificalprice2", artificalprice4);
  sessionStorage.setItem("artifical3", artifical4);
  alert(artificalname4 + " ADD TO CART");
}

var artificalname4 = sessionStorage.getItem("artificalname3");
var artifical4 = sessionStorage.getItem("artifical4");
var artificalprice4 = sessionStorage.getItem("artificalprice3");

if (
  sessionStorage.getItem("artificalname3") &&
  sessionStorage.getItem("artifical4") &&
  sessionStorage.getItem("artificalprice3")
) {
  var prod16 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='atiname3'></div><div class='col-md-4 text-white text-center'> <img id='atiimage3' class='img-fluid rounded-circle' width='18%'></div><div class='col-md-4 text-white text-center' id='atiprice3'><div class='icon-cross'><i class='bx bx-x text-white' onclick='remover4()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod16;
  document.getElementById("atiname3").innerHTML += artificalname4;
  document.getElementById("atiimage3").setAttribute("src", artifical4);
  document.getElementById("atiprice3").innerHTML += artificalprice4;
}

function remover4() {
  document.getElementById("prod").innerHTML -= prod16;
  sessionStorage.removeItem("artificalname4");
  sessionStorage.removeItem("artifical4");
  sessionStorage.removeItem("artificalprice4");

  window.location.reload();
}

//next-product

function tekken12() {
  var artificalname5 = document.getElementById("artificalname5").innerHTML;
  var artificalprice5 = document.getElementById("artificalprice5").innerHTML;
  var artifical5 = document.getElementById("artifical5").getAttribute("src");
  sessionStorage.setItem("artificalname5", artificalname5);
  sessionStorage.setItem("artificalprice5", artificalprice5);
  sessionStorage.setItem("artifical5", artifical5);
  alert(artificalname5 + " ADD TO CART");
}

var artificalname5 = sessionStorage.getItem("artificalname5");
var artifical5 = sessionStorage.getItem("artifical5");
var artificalprice5 = sessionStorage.getItem("artificalprice5");

if (
  sessionStorage.getItem("artificalname5") &&
  sessionStorage.getItem("artifical5") &&
  sessionStorage.getItem("artificalprice5")
) {
  var prod17 =
    "<br><div class='row'><div class='col-md-4 text-white text-center' id='atiname4'></div><div class='col-md-4 text-white text-center'> <img id='atiimage4' class='img-fluid rounded-circle' width='18%'></div><div class='col-md-4 text-white text-center' id='atiprice4'><div class='icon-cross'><i class='bx bx-x text-white' onclick='remover5()'><i> </div></div></div>";
  document.getElementById("prod").innerHTML += prod17;
  document.getElementById("atiname4").innerHTML += artificalname5;
  document.getElementById("atiimage4").setAttribute("src", artifical5);
  document.getElementById("atiprice4").innerHTML += artificalprice5;
}

function remover5() {
  document.getElementById("prod").innerHTML -= prod17;
  sessionStorage.removeItem("artificalname5");
  sessionStorage.removeItem("artifical5");
  sessionStorage.removeItem("artificalprice5");

  window.location.reload();
}

AOS.init();
