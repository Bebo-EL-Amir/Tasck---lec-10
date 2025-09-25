let conditionerStatus = false;
let heatSpeed = 0;
let mod = "Cool";
let speed = 0;

function updateScreen() {
  const screen = document.getElementById("screen");
  screen.style.color = conditionerStatus ? "#60e4ff" : "#aaa";

  screen.innerHTML = `
      <div>${
        conditionerStatus ? "Air conditioner ON" : "Air conditioner OFF"
      }</div>
      <div>Mod :  ${mod}</div>
      <div>Speed :  ${speed}</div>
      <div>Heat :  ${heatSpeed}°C</div>
    `;
}



function openConditioner() {
  conditionerStatus = true;
  heatSpeed = 24;

  console.log("Air conditioner Status is ON and Fan speed is 24");
  updateScreen();
}



function closeConditioner() {
  conditionerStatus = false;
  heatSpeed = 0;
  speed = 0;
  console.log("Air conditioner is closed");
  updateScreen();
}



function toggleFan() {
  if (conditionerStatus === true) {
    closeConditioner();
  } else {
    openConditioner();
  }
  updateScreen();
}



function incrementHeat() {
  if (heatSpeed < 28 && conditionerStatus === false) {
    alert("شغل المكيف أولاً");
  } else if (heatSpeed < 28 && conditionerStatus === true) {
    heatSpeed++;
    console.log("temperature is " + heatSpeed);
    // document.writeln("temperature is is " + heatSpeed);
  } else {
    alert("لا تقدر ان تزيد الحراره عن 28");
  }
  updateScreen();
}

function decrementHeat() {
  if (heatSpeed < 28 && conditionerStatus === false) {
    alert("شغل المكيف أولاً");
  } else if (heatSpeed > 16 && conditionerStatus === true) {
    heatSpeed--;
    console.log("temperature is " + heatSpeed);
  } else {
    alert("لا تقدر ان تقل الحراره عن 16");
  }

  updateScreen();
}
function togglemod() {
  if (conditionerStatus === false) {
    alert("شغل المكيف أولاً");
  } else if (conditionerStatus === true && mod === "Cool") {
    mod = "Heat";
    console.log("Heat");
  } else if (conditionerStatus === true && mod === "Heat") {
    mod = "Cool";
    console.log("Cool");
  }
  updateScreen();
}


function toggleSpeed() {
  if (conditionerStatus === false) {
    alert("شغل المكيف أولاً");
  } else if (conditionerStatus === true && speed < 3) {
    speed++;
    console.log("Speed is : " + speed);
  } else if (conditionerStatus === true && speed >= 3) {
    speed = 1;
    console.log("Speed is : " + speed);
  }
  updateScreen();
}
