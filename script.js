"use strict"

// var salis = ["Didžioji Britanija", "Japonija", "Brazilija", "Kanada", "San Marinas", "Portugalija"]
// var valstybesPlotas = [209331, 377975, 8515767, 9984670, 61.2, 92212]
// var gyventojuSkaicius = [60800000, 125502000, 212688125, 38526760, 33600, 10260000]

// for (var i = 0; i < pasaulioSalys.length; i++) {
//     console.log("Salis: " + pasaulioSalys[i].salis + ", joje gyvena " + (pasaulioSalys[i].gyventojuSkaicius / 1000000).toFixed(2) + "mln. gyventoju." + "\nValstybes plotas: " + pasaulioSalys[i].valstybesPlotas + " km2, plotas tenkantis vienam gyventojui:" + (pasaulioSalys[i].valstybesPlotas * 1000000 / pasaulioSalys[i].gyventojuSkaicius).toFixed(2) + " m2")
// }

var pasaulioSalys = [
    { salis: "Didzioji Britanija", valstybesPlotas: 209331, gyventojuSkaicius: 60800000 },
    { salis: "Japonija", valstybesPlotas: 377975, gyventojuSkaicius: 125502000 },
    { salis: "Brazilija", valstybesPlotas: 8515767, gyventojuSkaicius: 212688125 },
    { salis: "Kanada", valstybesPlotas: 9984670, gyventojuSkaicius: 38526760 },
    { salis: "San Marinas", valstybesPlotas: 61.2, gyventojuSkaicius: 33600 },
    // { salis: "Portugalija", valstybesPlotas: 92212, gyventojuSkaicius: 10260000 },
]

for (var x of pasaulioSalys) {
    console.log(`Salis: ${x.salis}, joje gyvena ${(x.gyventojuSkaicius / 1000000).toFixed(2)} mln. gyventoju. \nValstybes plotas: ${x.valstybesPlotas} km², plotas tenkantis vienam gyventojui: ${(x.valstybesPlotas * 1000000 / x.gyventojuSkaicius).toFixed(2)} m²`)
}




function salysPrint(salis, gyventojuSkaicius, valstybesPlotas,) {
    console.log(`Salis: ${salis}, joje gyvena ${(gyventojuSkaicius / 1000000).toFixed(2)} mln. gyventoju. \nValstybes plotas: ${valstybesPlotas} km², plotas tenkantis vienam gyventojui: ${(valstybesPlotas * 1000000 / gyventojuSkaicius).toFixed(2)} m²`)
}

for (var x of pasaulioSalys) {
    salysPrint(x.salis, x.gyventojuSkaicius, x.valstybesPlotas)
}