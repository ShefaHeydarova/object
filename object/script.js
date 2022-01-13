let BMW = {
  name: "BMW",
  model: "x5",
  speed: 320,
  avto: true,
};

let Mercedes = {
  name: "Mercedes",
  model: "sclass",
  speed: 300,
  avto: true,
};

let Nissan = {
  name: "Nissan",
  model: "Sunny",
  speed: 340,
  avto: true,
};

let Hyundai = {
  name: "Hyundai",
  model: "Elantra",
  speed: 280,
  avto: true,
};

let marka = [];

marka.push(BMW.name, Mercedes.name, Nissan.name, Hyundai.name);

let markaS = document.getElementById("marka");

onload = function () {
  let ekran = ` <option value="" selected disabled > Masin sec </option>`;

  for (let key in marka) {
    ekran += `<option value="${key}" > ${marka[key]} </option>`;
  }

  markaS.innerHTML = ekran;
};


function Call() {

let value = markaS.value;

  if (value==0) {
    Choose.call(BMW);
  } else if (value==1) {
    Choose.call(Mercedes);
  } else if (value==2) {
    Choose.call(Nissan);
  } else if (value==3) {
    Choose.call(Hyundai);
  }

}

function Choose() {
  document.getElementById(
    "list"
  ).innerHTML = `Ad : ${this.name} <br> Model : ${this.model} <br> Sürət : ${this.speed} <br> Avto : ${this.avto}   `;
}
