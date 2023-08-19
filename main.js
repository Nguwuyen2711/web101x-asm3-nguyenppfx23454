"use strict";

const showbtn = document.querySelector(".show");
const lessbtn = document.querySelector(".less");
const display = document.querySelector(".display");
//
const shrink1 = document.querySelector(".shrink-container1");
const shrink2 = document.querySelector(".shrink-container2");
const shrink3 = document.querySelector(".shrink-container3");
const shrink4 = document.querySelector(".shrink-container4");
const shrink5 = document.querySelector(".shrink-container5");
const shrink6 = document.querySelector(".shrink-container6");
//
const hd = document.querySelector(".hoat-dong");
const hds = document.querySelector(".hoat-dong-shrink");
const kn = document.querySelector(".kinh-nghiem");
const kns = document.querySelector(".kinh-nghiem-shrink");

//nút 1
showbtn.addEventListener("click", function () {
  display.classList.remove("hidden");
  lessbtn.classList.remove("hidden");
  showbtn.classList.add("hidden");
  shrink1.classList.remove("shrink-container1");

  console.log(16);
});

lessbtn.addEventListener("click", function () {
  display.classList.add("hidden");
  lessbtn.classList.add("hidden");
  showbtn.classList.remove("hidden");
  shrink1.classList.add("shrink-container1");
  // lessbtn.classList.remove("kinh-nghiem");
});

//nút 2
const showbtn2 = document.querySelector(".show2");
const lessbtn2 = document.querySelector(".less2");
const display2 = document.querySelector(".display2");

showbtn2.addEventListener("click", function () {
  display2.classList.remove("hidden2");
  lessbtn2.classList.remove("hidden2");
  showbtn2.classList.add("hidden2");
  shrink2.classList.remove("shrink-container2");

  console.log(16);
});

lessbtn2.addEventListener("click", function () {
  display2.classList.add("hidden2");
  lessbtn2.classList.add("hidden2");
  showbtn2.classList.remove("hidden2");
  shrink2.classList.add("shrink-container2");
});

//nút 3
const showbtn3 = document.querySelector(".show3");
const lessbtn3 = document.querySelector(".less3");
const display3 = document.querySelector(".display3");

showbtn3.addEventListener("click", function () {
  display3.classList.remove("hidden3");
  lessbtn3.classList.remove("hidden3");
  showbtn3.classList.add("hidden3");
  shrink3.classList.remove("shrink-container3");
  hds.classList.remove("hoat-dong-shrink");
  console.log(16);
});

lessbtn3.addEventListener("click", function () {
  display3.classList.add("hidden3");
  lessbtn3.classList.add("hidden3");
  showbtn3.classList.remove("hidden3");
  shrink3.classList.add("shrink-container3");
  hds.classList.add("hoat-dong-shrink");
});

//nút 4

const showbtn4 = document.querySelector(".show4");
const lessbtn4 = document.querySelector(".less4");
const display4 = document.querySelector(".display4");

showbtn4.addEventListener("click", function () {
  display4.classList.remove("hidden4");
  lessbtn4.classList.remove("hidden4");
  showbtn4.classList.add("hidden4");
  shrink4.classList.remove("shrink-container4");
  console.log(16);
});

lessbtn4.addEventListener("click", function () {
  display4.classList.add("hidden4");
  lessbtn4.classList.add("hidden4");
  showbtn4.classList.remove("hidden4");
  shrink4.classList.add("shrink-container4");
});

//nút 5
// const st = document.querySelector(".so-thich");

const showbtn5 = document.querySelector(".show5");
const lessbtn5 = document.querySelector(".less5");
const display5 = document.querySelector(".display5");

showbtn5.addEventListener("click", function () {
  display5.classList.remove("hidden5");
  lessbtn5.classList.remove("hidden5");
  showbtn5.classList.add("hidden5");
  shrink5.classList.remove("shrink-container5");
  console.log(16);
});

lessbtn5.addEventListener("click", function () {
  display5.classList.add("hidden5");
  lessbtn5.classList.add("hidden5");
  showbtn5.classList.remove("hidden5");
  shrink5.classList.add("shrink-container5");
});

//nút 6

const showbtn6 = document.querySelector(".show6");
const lessbtn6 = document.querySelector(".less6");
const display6 = document.querySelector(".display6");

showbtn6.addEventListener("click", function () {
  display6.classList.remove("hidden6");
  lessbtn6.classList.remove("hidden6");
  showbtn6.classList.add("hidden6");
  shrink6.classList.remove("shrink-container6");
  console.log(16);
});

lessbtn6.addEventListener("click", function () {
  display6.classList.add("hidden6");
  lessbtn6.classList.add("hidden6");
  showbtn6.classList.remove("hidden6");
  shrink6.classList.add("shrink-container6");
});

//

const untyping = document.querySelector(".untype");
const verify = document.querySelector(".verified");
//phần validation này có tham khảo từ nhiều nguồn trên internet
function ValidateEmail(inputText) {
  //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (inputText.value.match(regex)) {
    verify.classList.add("untype");
    untyping.classList.remove("untype");
    //verify.style.display = "hidden";
    return true;
  } else {
    alert("Vui lòng nhập đúng định dạng mail!");
    document.form1.text1.focus();
    return false;
  }
}

//nút 8
const showbtn8 = document.querySelector(".show8");
const lessbtn8 = document.querySelector(".less8");
const display8 = document.querySelector(".display8");
const shrink8 = document.querySelector(".shrink-container8");
const hvs = document.querySelector(".hoc-van-shrink");

showbtn8.addEventListener("click", function () {
  var c = 1;
  display8.classList.remove("hidden8");
  lessbtn8.classList.remove("hidden8");
  showbtn8.classList.add("hidden8");
  shrink8.classList.remove("shrink-container8");
  hvs.classList.remove("hoc-van-shrink");

  //kynang3.classList.add("ky-nang-shrink");
  //kynang3.classList.remove("ky-nang-3");
});

lessbtn8.addEventListener("click", function () {
  var c = 1;
  display8.classList.add("hidden8");
  lessbtn8.classList.add("hidden8");
  showbtn8.classList.remove("hidden8");
  shrink8.classList.add("shrink-container8");

  hvs.classList.add("hoc-van-shrink");
  //kynang3.classList.remove("ky-nang-shrink");

  // kynang3.classList.remove("ky-nang-shrink");
});

//nút 7
const showbtn7 = document.querySelector(".show7");
const lessbtn7 = document.querySelector(".less7");
const display7 = document.querySelector(".display7");
const shrink7 = document.querySelector(".shrink-container7");
const kynang = document.querySelector(".ky-nang");
const kynang3 = document.querySelector(".ky-nang-3");

showbtn7.addEventListener("click", function () {
  display7.classList.remove("hidden7");
  lessbtn7.classList.remove("hidden7");
  showbtn7.classList.add("hidden7");
  shrink7.classList.remove("shrink-container7");
  kns.classList.remove("kinh-nghiem-shrink");
  //kynang3.classList.remove("ky-nang-3");

  console.log(16);
});

lessbtn7.addEventListener("click", function () {
  display7.classList.add("hidden7");
  lessbtn7.classList.add("hidden7");
  showbtn7.classList.remove("hidden7");
  shrink7.classList.add("shrink-container7");
  kns.classList.add("kinh-nghiem-shrink");
  //kynang3.classList.add("ky-nang-3");
  var a = 1;
});

// nút 9
const showbtn9 = document.querySelector(".show9");
const lessbtn9 = document.querySelector(".less9");
const display9 = document.querySelector(".display9");
const shrink9 = document.querySelector(".shrink-container9");
const hd2 = document.querySelector(".hoat-dong2");
const hds2 = document.querySelector(".hoat-dong-shrink2");
var b = 0;
showbtn9.addEventListener("click", function () {
  var b = 0;
  display9.classList.remove("hidden9");
  lessbtn9.classList.remove("hidden9");
  showbtn9.classList.add("hidden9");
  shrink9.classList.remove("shrink-container9");
  hds2.classList.remove("hoat-dong-shrink2");
  console.log(16);
});

lessbtn9.addEventListener("click", function () {
  var b = 1;
  display9.classList.add("hidden9");
  lessbtn9.classList.add("hidden9");
  showbtn9.classList.remove("hidden9");
  shrink9.classList.add("shrink-container9");
  hds2.classList.add("hoat-dong-shrink2");
});

// nút 10
const showbtn10 = document.querySelector(".show10");
const lessbtn10 = document.querySelector(".less10");
const display10 = document.querySelector(".display10");
const shrink10 = document.querySelector(".shrink-container10");
const sts = document.querySelector(".so-thich-shrink");

showbtn10.addEventListener("click", function () {
  display10.classList.remove("hidden10");
  lessbtn10.classList.remove("hidden10");
  showbtn10.classList.add("hidden10");
  shrink10.classList.remove("shrink-container10");
  sts.classList.remove("so-thich-shrink");
  console.log(16);
});

lessbtn10.addEventListener("click", function () {
  display10.classList.add("hidden10");
  lessbtn10.classList.add("hidden10");
  showbtn10.classList.remove("hidden10");
  shrink10.classList.add("shrink-container10");
  sts.classList.add("so-thich-shrink");
});

// nút 11
const showbtn11 = document.querySelector(".show11");
const lessbtn11 = document.querySelector(".less11");
const display11 = document.querySelector(".display11");
const shrink11 = document.querySelector(".shrink-container11");
const nns = document.querySelector(".ngon-ngu-shrink");
showbtn11.addEventListener("click", function () {
  display11.classList.remove("hidden11");
  lessbtn11.classList.remove("hidden11");
  showbtn11.classList.add("hidden11");
  shrink11.classList.remove("shrink-container11");
  nns.classList.remove("ngon-ngu-shrink");
  console.log(16);
});

lessbtn11.addEventListener("click", function () {
  display11.classList.add("hidden11");
  lessbtn11.classList.add("hidden11");
  showbtn11.classList.remove("hidden11");
  shrink11.classList.add("shrink-container11");
  nns.classList.add("ngon-ngu-shrink");
});

// nút 12
const showbtn12 = document.querySelector(".show12");
const lessbtn12 = document.querySelector(".less12");
const display12 = document.querySelector(".display12");
const shrink12 = document.querySelector(".shrink-container12");
const kyns = document.querySelector(".ky-nang-shrink");
showbtn12.addEventListener("click", function () {
  display12.classList.remove("hidden12");
  lessbtn12.classList.remove("hidden12");
  showbtn12.classList.add("hidden12");
  shrink12.classList.remove("shrink-container12");
  kyns.classList.remove("ky-nang-shrink");
  console.log(16);
});

lessbtn12.addEventListener("click", function () {
  display12.classList.add("hidden12");
  lessbtn12.classList.add("hidden12");
  showbtn12.classList.remove("hidden12");
  shrink12.classList.add("shrink-container12");
  kyns.classList.add("ky-nang-shrink");
});
