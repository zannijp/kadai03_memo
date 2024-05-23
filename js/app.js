// 要素を取得
// const elm = document.querySelectorAll('#wrapA li');
// elm.forEach(function(v, i){
//     if (((i+1) % 2) === 0) {        
//         v.classList.add('even'); //偶数
//     } else {        
//         v.classList.add('odd'); //奇数
//     }
// });

// $("#edit").on("click", function () {
//     listHide = $("#wrapA > li:first").attr('class');
//     console.log(listHide);
//     if (listHide === "pad") {
//         console.log("奇数");
//     } else {
//         console.log("偶数");
//     }
// });

// // Padの数 1～16
// let array = [];
// for (let num = 1; num <= 6; num++) {
//     array.push(num);
// }

// 保存
function save() {
    const valA1 = $("#valA1").val();
    localStorage.setItem("padA1", valA1);
    let padA1val = localStorage.getItem("padA1");
    console.log(padA1val);
    const padA1html = `
    <button onclick="copyA1()">${padA1val}</button>
        `;
    $("#padA1").html(padA1html);
    $("#valA1").val(padA1val);

    const valA2 = $("#valA2").val();
    localStorage.setItem("padA2", valA2);
    let padA2val = localStorage.getItem("padA2");
    console.log(padA2val);
    const padA2html = `
    <button onclick="copyA2()">${padA2val}</button>
        `;
    $("#padA2").html(padA2html);
    $("#valA2").val(padA2val);

    const valA3 = $("#valA3").val();
    localStorage.setItem("padA3", valA3);
    let padA3val = localStorage.getItem("padA3");
    console.log(padA3val);
    const padA3html = `
    <button onclick="copyA3()">${padA3val}</button>
        `;
    $("#padA3").html(padA3html);
    $("#valA3").val(padA3val);

    const valA4 = $("#valA4").val();
    localStorage.setItem("padA4", valA4);
    let padA4val = localStorage.getItem("padA4");
    console.log(padA4val);
    const padA4html = `
    <button onclick="copyA4()">${padA4val}</button>
        `;
    $("#padA4").html(padA4html);
    $("#valA4").val(padA4val);

    const valA5 = $("#valA5").val();
    localStorage.setItem("padA5", valA5);
    let padA5val = localStorage.getItem("padA5");
    console.log(padA5val);
    const padA5html = `
    <button onclick="copyA5()">${padA5val}</button>
        `;
    $("#padA5").html(padA5html);
    $("#valA5").val(padA5val);

    const valA6 = $("#valA6").val();
    localStorage.setItem("padA6", valA6);
    let padA6val = localStorage.getItem("padA6");
    console.log(padA6val);
    const padA6html = `
    <button onclick="copyA6()">${padA6val}</button>
        `;
    $("#padA6").html(padA6html);
    $("#valA6").val(padA6val);

    const valA7 = $("#valA7").val();
    localStorage.setItem("padA7", valA7);
    let padA7val = localStorage.getItem("padA7");
    console.log(padA7val);
    const padA7html = `
    <button onclick="copyA7()">${padA7val}</button>
        `;
    $("#padA7").html(padA7html);
    $("#valA7").val(padA7val);

    const valA8 = $("#valA8").val();
    localStorage.setItem("padA8", valA8);
    let padA8val = localStorage.getItem("padA8");
    console.log(padA8val);
    const padA8html = `
    <button onclick="copyA8()">${padA8val}</button>
        `;
    $("#padA8").html(padA8html);
    $("#valA8").val(padA8val);

    const valA9 = $("#valA9").val();
    localStorage.setItem("padA9", valA9);
    let padA9val = localStorage.getItem("padA9");
    console.log(padA9val);
    const padA9html = `
    <button onclick="copyA9()">${padA9val}</button>
        `;
    $("#padA9").html(padA9html);
    $("#valA9").val(padA9val);

    const valA10 = $("#valA10").val();
    localStorage.setItem("padA10", valA10);
    let padA10val = localStorage.getItem("padA10");
    console.log(padA10val);
    const padA10html = `
    <button onclick="copyA10()">${padA10val}</button>
        `;
    $("#padA10").html(padA10html);
    $("#valA10").val(padA10val);

    const valA11 = $("#valA11").val();
    localStorage.setItem("padA11", valA11);
    let padA11val = localStorage.getItem("padA11");
    console.log(padA11val);
    const padA11html = `
    <button onclick="copyA11()">${padA11val}</button>
        `;
    $("#padA11").html(padA11html);
    $("#valA11").val(padA11val);

    const valA12 = $("#valA12").val();
    localStorage.setItem("padA12", valA12);
    let padA12val = localStorage.getItem("padA12");
    console.log(padA12val);
    const padA12html = `
    <button onclick="copyA12()">${padA12val}</button>
        `;
    $("#padA12").html(padA12html);
    $("#valA12").val(padA12val);

    const valA13 = $("#valA13").val();
    localStorage.setItem("padA13", valA13);
    let padA13val = localStorage.getItem("padA13");
    console.log(padA13val);
    const padA13html = `
    <button onclick="copyA13()">${padA13val}</button>
        `;
    $("#padA13").html(padA13html);
    $("#valA13").val(padA13val);

    const valA14 = $("#valA14").val();
    localStorage.setItem("padA14", valA14);
    let padA14val = localStorage.getItem("padA14");
    console.log(padA14val);
    const padA14html = `
    <button onclick="copyA14()">${padA14val}</button>
        `;
    $("#padA14").html(padA14html);
    $("#valA14").val(padA14val);

    const valA15 = $("#valA15").val();
    localStorage.setItem("padA15", valA15);
    let padA15val = localStorage.getItem("padA15");
    console.log(padA15val);
    const padA15html = `
    <button onclick="copyA15()">${padA15val}</button>
        `;
    $("#padA15").html(padA15html);
    $("#valA15").val(padA15val);

    const valA16 = $("#valA16").val();
    localStorage.setItem("padA16", valA16);
    let padA16val = localStorage.getItem("padA16");
    console.log(padA16val);
    const padA16html = `
    <button onclick="copyA16()">${padA16val}</button>
        `;
    $("#padA16").html(padA16html);
    $("#valA16").val(padA16val);

    // const valA2 = $("#valA2").val();
    // const valA3 = $("#valA3").val();
    // const valA4 = $("#valA4").val();
    // const valA5 = $("#valA5").val();
    // const valA6 = $("#valA6").val();
    // const valA7 = $("#valA7").val();
    // const valA8 = $("#valA8").val();
    // const valA9 = $("#valA9").val();
    // const valA10 = $("#valA10").val();
    // const valA11 = $("#valA11").val();
    // const valA12 = $("#valA12").val();
    // const valA13 = $("#valA13").val();
    // const valA14 = $("#valA14").val();
    // const valA15 = $("#valA15").val();
    // const valA16 = $("#valA16").val();
    // const valB1 = $("#valB1").val();
    // const valB2 = $("#valB2").val();
    // const valB3 = $("#valB3").val();
    // const valB4 = $("#valB4").val();
    // const valB5 = $("#valB5").val();
    // const valB6 = $("#valB6").val();
    // const valB7 = $("#valB7").val();
    // const valB8 = $("#valB8").val();
    // const valB9 = $("#valB9").val();
    // const valB10 = $("#valB10").val();
    // const valB11 = $("#valB11").val();
    // const valB12 = $("#valB12").val();
    // const valB13 = $("#valB13").val();
    // const valB14 = $("#valB14").val();
    // const valB15 = $("#valB15").val();
    // const valB16 = $("#valB16").val();
// 配列
// const data = { 
//     padA1: valA1, padA2: valA2, padA3: valA3, padA4: valA4,
//     padA5: valA5, padA6: valA6,  padA7: valA7, padA8: valA8,
//     padA9: valA9, padA10: valA10, padA11: valA11, padA12: valA12,
//     padA13: valA13, padA14: valA14, padA15: valA15, padA16: valA16,
//     padB1: valB1, padB2: valB2, padB3: valB3, padB4: valB4,
//     padB5: valB5, padB6: valB6,  padB7: valB7, padB8: valB8,
//     padB9: valB9, padB10: valB10, padB11: valB11, padB12: valB12,
//     padB13: valB13, padB14: valB14, padB15: valB15, padB16: valB16,
// };
// 配列 → JSON変換 → localstorageに保存
// localStorage.setItem("data", JSON.stringify(data));
}

// 読込
let padA1val = localStorage.getItem("padA1");
const padA1html = `
<button onclick="copyA1()">${padA1val}</button>
`;
if (padA1val === null) {
    $("#padA1").html("<button></button>");
} else {
    $("#padA1").html(padA1html);
}
$("#valA1").val(padA1val);
// if (padA1val === null) {
//     console.log('padA1はnullです');
//     } else {
//         console.log('padA1はnullではないです');
// }

let padA2val = localStorage.getItem("padA2");
const padA2html = `
<button onclick="copyA2()">${padA2val}</button>
`;
if (padA2val === null) {
    $("#padA2").html("<button></button>");
} else {
    $("#padA2").html(padA2html);
}
$("#valA2").val(padA2val);

let padA3val = localStorage.getItem("padA3");
const padA3html = `
<button onclick="copyA3()">${padA3val}</button>
`;
if (padA3val === null) {
    $("#padA3").html("<button></button>");
} else {
    $("#padA3").html(padA3html);
}
$("#valA3").val(padA3val);

let padA4val = localStorage.getItem("padA4");
const padA4html = `
<button onclick="copyA4()">${padA4val}</button>
`;
if (padA4val === null) {
    $("#padA4").html("<button></button>");
} else {
    $("#padA4").html(padA4html);
}
$("#valA4").val(padA4val);

let padA5val = localStorage.getItem("padA5");
const padA5html = `
<button onclick="copyA5()">${padA5val}</button>
`;
if (padA5val === null) {
    $("#padA5").html("<button></button>");
} else {
    $("#padA5").html(padA5html);
}
$("#valA5").val(padA5val);

let padA6val = localStorage.getItem("padA6");
const padA6html = `
<button onclick="copyA6()">${padA6val}</button>
`;
if (padA6val === null) {
    $("#padA6").html("<button></button>");
} else {
    $("#padA6").html(padA6html);
}
$("#valA6").val(padA6val);

let padA7val = localStorage.getItem("padA7");
const padA7html = `
<button onclick="copyA7()">${padA7val}</button>
`;
if (padA7val === null) {
    $("#padA7").html("<button></button>");
} else {
    $("#padA7").html(padA7html);
}
$("#valA7").val(padA7val);

let padA8val = localStorage.getItem("padA8");
const padA8html = `
<button onclick="copyA8()">${padA8val}</button>
`;
if (padA8val === null) {
    $("#padA8").html("<button></button>");
} else {
    $("#padA8").html(padA8html);
}
$("#valA8").val(padA8val);

let padA9val = localStorage.getItem("padA9");
const padA9html = `
<button onclick="copyA9()">${padA9val}</button>
`;
if (padA9val === null) {
    $("#padA9").html("<button></button>");
} else {
    $("#padA9").html(padA9html);
}
$("#valA9").val(padA9val);

let padA10val = localStorage.getItem("padA10");
const padA10html = `
<button onclick="copyA10()">${padA10val}</button>
`;
if (padA10val === null) {
    $("#padA10").html("<button></button>");
} else {
    $("#padA10").html(padA10html);
}
$("#valA10").val(padA10val);

let padA11val = localStorage.getItem("padA11");
const padA11html = `
<button onclick="copyA11()">${padA11val}</button>
`;
if (padA11val === null) {
    $("#padA11").html("<button></button>");
} else {
    $("#padA11").html(padA11html);
}
$("#valA11").val(padA11val);

let padA12val = localStorage.getItem("padA12");
const padA12html = `
<button onclick="copyA12()">${padA12val}</button>
`;
if (padA12val === null) {
    $("#padA12").html("<button></button>");
} else {
    $("#padA12").html(padA12html);
}
$("#valA12").val(padA12val);

let padA13val = localStorage.getItem("padA13");
const padA13html = `
<button onclick="copyA13()">${padA13val}</button>
`;
if (padA13val === null) {
    $("#padA13").html("<button></button>");
} else {
    $("#padA13").html(padA13html);
}
$("#valA13").val(padA13val);

let padA14val = localStorage.getItem("padA14");
const padA14html = `
<button onclick="copyA14()">${padA14val}</button>
`;
if (padA14val === null) {
    $("#padA14").html("<button></button>");
} else {
    $("#padA14").html(padA14html);
}
$("#valA14").val(padA14val);

let padA15val = localStorage.getItem("padA15");
const padA15html = `
<button onclick="copyA15()">${padA15val}</button>
`;
if (padA15val === null) {
    $("#padA15").html("<button></button>");
} else {
    $("#padA15").html(padA15html);
}
$("#valA15").val(padA15val);

let padA16val = localStorage.getItem("padA16");
const padA16html = `
<button onclick="copyA16()">${padA16val}</button>
`;
if (padA16val === null) {
    $("#padA16").html("<button></button>");
} else {
    $("#padA16").html(padA16html);
}
$("#valA16").val(padA16val);

// // 読込
// function load() {
// const display = document.querySelector(".display");
// // localstorageに保存したデータ（配列）を取得
// const data = JSON.parse(localStorage.getItem("data"));
// // localstorageに保存したデータを表示
// Object.keys(data).forEach(element => {
//         let displayChild = document.createElement("li");
//         displayChild.textContent = data[element];
//         display.insertBefore(displayChild);
//         $('#valA1').val(data[0]);
//     });
// }

function copyA1() {
    /* テキスト内容を取得 */
    let copyTextA1 = document.getElementById("valA1");
    /* コピーする内容を選択 /
    copyText.select();
  copyText.setSelectionRange(0, 99999); / *テキスト要素の全ての内容を選択範囲に含めること */

    /* テキスト領域にコピーした内容を貼り付け */
    navigator.clipboard.writeText(copyTextA1.value);

    /* コピーされた内容をポップアップで表示 */
    alert("コピーされたテキスト: " + copyTextA1.value);
}

function copyA2() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA3() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA4() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA5() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA6() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA7() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA8() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA9() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA10() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA11() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA12() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA13() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA14() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA15() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

function copyA16() {
    let copyTextA2 = document.getElementById("valA2");
    navigator.clipboard.writeText(copyTextA2.value);
    alert("コピーされたテキスト: " + copyTextA2.value);
}

// // Padの数 1～16
// let array = [];
// for (let num = 1; num <= 6; num++) {
//     array.push(num);
// }

// function save() {
//     for (let i = 0; i < array.length; i++) {
//         const padNum = "pad" + array[i];
//         const padID = "#pad" + array[i];
//         const padVal = "val" + array[i];
//         const valID = "#val" + array[i];
//             // console.log(padNum, "padNum");
//             // console.log(padID, "padID");
//             // console.log(padVal, "padVal");
//         const padValue = $(valID).val();
//             console.log(padValue,"padValue");
//         const padNV = padNum + ":" + padVal;
//             console.log(padNV,"padNV");
//         const data = { pad1: val1, pad2: val2, pad3: val3, pad4: val4, pad5: val5, pad: val6 };
//             console.log(data,"data");
//         localStorage.setItem("data", JSON.stringify(data));
//         // data.push(padNV);
//         //     console.log(padNV,"padNV");
//     }
//     // for (let i = 0; i < array.length; i++) {
//     // const data = { padNV };
//     //         console.log(data);
//     //     data.push(padNV);
//     //         console.log(padNV,"padNV");
//     // }
// }

// pad1: val1, pad2: val2, pad3: val3, pad4: val4, pad5: val5, pad: val6

// // 保存
// function save() {
//     const val1 = document.querySelector(".txt1").value;
//     const val2 = document.querySelector(".txt2").value;
//     const val3 = document.querySelector(".txt3").value;
//     console.log(val3, "val3表示");
// // 配列を定義
// const data = { key1: val1, key2: val2, key3: val3 };
// // 配列をJSON形式に変換してからlocalstorageに保存
// localStorage.setItem("data", JSON.stringify(data));
// }      

// // 読込
// function load() {
// const display = document.querySelector(".display");
// // localstorageに保存したデータ（配列）を取得
// const data = JSON.parse(localStorage.getItem("data"));
// // localstorageに保存したデータを表示
// Object.keys(data).forEach(element => {
//     var displayChild = document.createElement("li");
//     displayChild.textContent = data[element];
//     display.appendChild(displayChild);
// });
// }


//Padの数 1～2
// let array = []
// for (let i = 1; i <= 16; i++) {
//     array.push(i)
// }

// console.log(array, "回数");

// $("#save").on("click", function () {
// for (let i = 1; i < array.length; i++) {
//     console.log(array, "レングス");
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);

//     localStorage.setItem("pad", JSON.stringify(data));
//     }
// });

// let result = JSON.parse(localStorage.getItem("pad"));

// console.log(result);
// let data =  "pad" + array[i]
// console.log(data, "データ");
// const key = localStorage.key(array);
// const value = localStorage.getItem(key);

// //1.Save クリックイベント
// $("#save").on("click", function () {
//     const key = $("#title").val();
//     const value = $("#text").val();

//     localStorage.setItem(key, value);
//     const html = `
//     <li>
//       <p>${key}</p>
//       <p>あいうえお</p>
//       <p>${value}</p>
//     </li>
//     `;
//     $("#list").append(html);
//   });


  //2.clear クリックイベント
//   $("#clear").on("click", function () {
//     localStorage.clear();
//     $("#list").empty();
//   });


//   //3.ページ読み込み：保存データ取得表示
// for (let i = 0; i < localStorage.length; i++) {
// const key = localStorage.key(i);
// const value = localStorage.getItem(key);
// const html = `
// <li>
//   <p>${key}</p>
//   <p>${value}</p>
// </li>
// `;
//   $("#list").append(html);
// }