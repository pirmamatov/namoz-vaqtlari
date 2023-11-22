//bgImage

const mainBg = document.querySelector(".bgMain");
const rName = document.querySelector(".regionName");
const selected = document.querySelector(".form-select");
const leftTime = document.querySelector(".leftTime");
const enterTimeAsr = document.querySelector(".enterTimeAsr");
const enterTimeQuyosh = document.querySelector(".enterTimeQuyosh");
const enterTimeTong = document.querySelector(".enterTimeTong");
const enterTimePeshin = document.querySelector(".enterTimePeshin");
const enterTimeShom = document.querySelector(".enterTimeShom");
const enterTimeXufton = document.querySelector(".enterTimeXufton");
const weekDay = document.querySelector(".weekday");
const dataD = document.querySelector(".data");





selected.addEventListener("change", (evt) => {
  getData(evt.target.value);
});
getData("Qarshi");

let time = false;




// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getData(shahar) {
    rName.textContent = `${shahar} vaqti`;
    let response = await fetch(`https://islomapi.uz/api/present/day?region=${shahar}`)
    let data = await response.json();
    renderData(data);
}
// fetch(URL)
// .then(response => response.json())
// .then(data => console.log(data))

function renderData (malumot) {
    
    enterTimeAsr.innerHTML = `${malumot.times.asr}`;
    enterTimeQuyosh.innerHTML = `${malumot.times.quyosh}`;
    enterTimeXufton.innerHTML = `${malumot.times.hufton}`;
    enterTimeShom.innerHTML = `${malumot.times.shom_iftor}`;
    enterTimeTong.innerHTML = `${malumot.times.tong_saharlik}`;
    enterTimePeshin.innerHTML = `${malumot.times.peshin}`;
    weekDay.innerHTML = `${malumot.weekday}`
    dataD.innerHTML = `${malumot.date}`
    // enterTime.innerHTML = `${malumot.times.asr}`
    console.log(malumot);
}


