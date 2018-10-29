let square1 = document.getElementById('rect1');
let square2 = document.getElementById('rect2');
let square3 = document.getElementById('rect3');
let square4 = document.getElementById('rect4');
let square5 = document.getElementById('rect5');
let square6 = document.getElementById('rect6');
let square7 = document.getElementById('rect7');
let square8 = document.getElementById('rect8');
let square9 = document.getElementById('rect9');
let square10 = document.getElementById('rect10');
let square11 = document.getElementById('rect11');
let square12 = document.getElementById('rect12');
let square13 = document.getElementById('rect13');
let square14 = document.getElementById('rect14');
let square15 = document.getElementById('rect15');
let square16 = document.getElementById('rect16');

square1.addEventListener("click",changeBgColor,false);
square2.addEventListener("click",changeBgColor,false);
square3.addEventListener("click",changeBgColor,false);
square4.addEventListener("click",changeBgColor,false);
square5.addEventListener("click",changeBgColor,false);
square6.addEventListener("click",changeBgColor,false);
square7.addEventListener("click",changeBgColor,false);
square8.addEventListener("click",changeBgColor,false);
square9.addEventListener("click",changeBgColor,false);
square10.addEventListener("click",changeBgColor,false);
square11.addEventListener("click",changeBgColor,false);
square12.addEventListener("click",changeBgColor,false);
square13.addEventListener("click",changeBgColor,false);
square14.addEventListener("click",changeBgColor,false);
square15.addEventListener("click",changeBgColor,false);
square16.addEventListener("click",changeBgColor,false);

function changeBgColor() {
 if (this.classList.contains("bg-white")) {
   this.classList.remove("bg-white")
   this.classList.add("bg-lime")
 } else if (this.classList.contains("bg-blue")) {
   this.classList.remove("bg-blue")
   this.classList.add("bg-pink")
 } else if (this.classList.contains("bg-red")) {
   this.classList.remove("bg-red")
   this.classList.add("bg-orange")
 } else if (this.classList.contains("bg-yellow")) {
   this.classList.remove("bg-yellow");
   this.classList.add("bg-purple");
 }
}

/*function changeBgColor1() {
  square1.classList.add("bg-lime");
  square1.classList.remove("bg-white");
}

function changeBgColor2() {
  square2.classList.add("bg-purple");
  square2.classList.remove("bg-yellow");
}

function changeBgColor3() {
  square3.classList.add("bg-pink");
  square3.classList.remove("bg-red");
}

function changeBgColor4() {
  square4.classList.add("bg-orange");
  square4.classList.remove("bg-blue");
}

function changeBgColor5() {
  square5.classList.add("bg-lime");
  square5.classList.remove("bg-white");
}

function changeBgColor6() {
  square6.classList.add("bg-lime")
  square6.classList.remove("bg-white")
}

function changeBgColor7() {
  square7.classList.add("bg-lime");
  square7.classList.remove("bg-white");
}

function changeBgColor8() {
  square8.classList.add("bg-lime");
  square8.classList.remove("bg-white");
}

function changeBgColor9() {
  square9.classList.add("bg-pink");
  square9.classList.remove("bg-red");
}

function changeBgColor10() {
  square10.classList.add("bg-lime");
  square10.classList.remove("bg-white");
}

function changeBgColor11() {
  square11.classList.add("bg-lime");
  square11.classList.remove("bg-white");
}

function changeBgColor12() {
  square12.classList.add("bg-orange");
  square12.classList.remove("bg-blue");
}

function changeBgColor13() {
  square13.classList.add("bg-lime");
  square13.classList.remove("bg-white");
}

function changeBgColor14() {
  square14.classList.add("bg-pink");
  square14.classList.remove("bg-red");
}

function changeBgColor15() {
  square15.classList.add("bg-purple");
  square15.classList.remove("bg-yellow");
}

function changeBgColor16() {
  square16.classList.add("bg-lime");
  square16.classList.remove("bg-white");
}
*/
