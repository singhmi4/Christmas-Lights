// User Stories

// User can press a button to start and stop the display
let lightSwitch = document.querySelector("#light-switch");

let lightsOff = getComputedStyle(document.documentElement).getPropertyValue('--lights-off');

let lightsOn = getComputedStyle(document.documentElement).getPropertyValue('--lights-on');

let areLightsOn = false;

let light1 = document.querySelector("#light-1");
let light2 = document.querySelector("#light-2");
let light3 = document.querySelector("#light-3");
let light4 = document.querySelector("#light-4");
let light5 = document.querySelector("#light-5");
let light6 = document.querySelector("#light-6");

let blueColor = getComputedStyle(document.documentElement).getPropertyValue('--blue');
let redColor = getComputedStyle(document.documentElement).getPropertyValue('--red');
let greenColor = getComputedStyle(document.documentElement).getPropertyValue('--green');
let cyanColor = getComputedStyle(document.documentElement).getPropertyValue('--cyan');
let yellowColor = getComputedStyle(document.documentElement).getPropertyValue('--yellow');
let purpleColor = getComputedStyle(document.documentElement).getPropertyValue('--purple');

let pulseMode = document.getElementById("pulse");

// Change Pulse

let lightsFlicker;
console.log(lightsFlicker);

pulseMode.onchange = function() {

  if (this.value === "off") {
    if (lightsFlicker !== "undefined") {
      clearInterval(lightsFlicker);
    }
    console.log(this.value);
    turnLightsOff();
    console.log(areLightsOn);
  } else if (this.value === "on-1") {
    if (lightsFlicker !== "undefined") {
      clearInterval(lightsFlicker);
    }
    console.log(this.value);
    turnLightsOn();
    console.log(areLightsOn);
  } else if (this.value === "on-2") {
    console.log(this.value);
    lightsFlicker = setInterval(makeLightsFlicker, 500);
    console.log(lightsFlicker);
  }
}

// lightSwitch.addEventListener("click", function(){
  
//   if(areLightsOn == false) {
    
//   light1.style.backgroundColor = `hsla(${blueColor}, 100%, ${lightsOn}, 1)`;
//     light2.style.backgroundColor = `hsla(${redColor}, 100%, ${lightsOn}, 1)`;
//     light3.style.backgroundColor = `hsla(${greenColor}, 100%, ${lightsOn}, 1)`;
//     light4.style.backgroundColor = `hsla(${cyanColor}, 100%, ${lightsOn}, 1)`;
//     light5.style.backgroundColor = `hsla(${yellowColor}, 100%, ${lightsOn}, 1)`;
//     light6.style.backgroundColor = `hsla(${purpleColor}, 100%, ${lightsOn}, 1)`;
//     areLightsOn = true;
//     this.innerHTML = "Turn Off Lights";
//   } else {
//     light1.style.backgroundColor = `hsla(240, 100%, ${lightsOff}, 1)`;
//     light2.style.backgroundColor = `hsla(${redColor}, 100%, ${lightsOff}, 1)`;
//     light3.style.backgroundColor = `hsla(${greenColor}, 100%, ${lightsOff}, 1)`;
//     light4.style.backgroundColor = `hsla(${cyanColor}, 100%, ${lightsOff}, 1)`;
//     light5.style.backgroundColor = `hsla(${yellowColor}, 100%, ${lightsOff}, 1)`;
//     light6.style.backgroundColor = `hsla(${purpleColor}, 100%, ${lightsOff}, 1)`;
//     areLightsOn = false;
//     this.innerHTML = "Turn On Lights";
//   }
// });

// Lights On Function

function turnLightsOn() {
  light1.style.backgroundColor = `hsla(${blueColor}, 100%, ${lightsOn}, 1)`;
    light2.style.backgroundColor = `hsla(${redColor}, 100%, ${lightsOn}, 1)`;
    light3.style.backgroundColor = `hsla(${greenColor}, 100%, ${lightsOn}, 1)`;
    light4.style.backgroundColor = `hsla(${cyanColor}, 100%, ${lightsOn}, 1)`;
    light5.style.backgroundColor = `hsla(${yellowColor}, 100%, ${lightsOn}, 1)`;
    light6.style.backgroundColor = `hsla(${purpleColor}, 100%, ${lightsOn}, 1)`;
    areLightsOn = true;
}

function turnLightsOff() {
   light1.style.backgroundColor = `hsla(${blueColor}, 100%, ${lightsOff}, 1)`;
    light2.style.backgroundColor = `hsla(${redColor}, 100%, ${lightsOff}, 1)`;
    light3.style.backgroundColor = `hsla(${greenColor}, 100%, ${lightsOff}, 1)`;
    light4.style.backgroundColor = `hsla(${cyanColor}, 100%, ${lightsOff}, 1)`;
    light5.style.backgroundColor = `hsla(${yellowColor}, 100%, ${lightsOff}, 1)`;
    light6.style.backgroundColor = `hsla(${purpleColor}, 100%, ${lightsOff}, 1)`;
    areLightsOn = false;
}

function makeLightsFlicker() {
  if (areLightsOn == false) {
    turnLightsOn();
  } else {
    turnLightsOff();
  }
} 

// * User can change the interval of time controlling the change in intensity

// while lights are on



// Bonus features

// * User can select the color used to fill each circle
// * User can specify the intensity value
// * User can change the size of any circle in the row
// * User can specify the number of rows to be included in the display. From one to seven rows can be chosen


