//按空白處顏色會改變

// const html = document.getElementById("btn1");

// window.onload = function () {
//   showContent(1);
// };

// document.getElementById("btn1").addEventListener("click", function () {
//   showContent(1);
// });

// document.getElementById("btn2").addEventListener("click", function () {
//   showContent(2);
// });

// document.getElementById("btn3").addEventListener("click", function () {
//   showContent(3);
// });

// document.getElementById("btn4").addEventListener("click", function () {
//   showContent(4);
// });

// function showContent(Num) {
//   if (Num === 1) {
//     html.style.color = "#ffd700";
//   } else {
//     html.style.color = "burlywood";
//   }
//   let contents = document.getElementsByClassName("content");

//   for (let i = 0; i < contents.length; i++) {
//     contents[i].style.display = "none";
//   }

//   let selectedContents = document.getElementsByClassName(
//     "content note_right_content_" + Num
//   );

//   for (let j = 0; j < selectedContents.length; j++) {
//     selectedContents[j].style.display = "block";
//   }
// }

//  遍歷太廣，容易出錯

const html = document.getElementById("btn1");
let selectedButton = 1; // 追蹤當前選擇的按鈕，初始為 btn1

window.onload = function () {
  showContent(1);
};

document.getElementById("btn1").addEventListener("click", function () {
  showContent(1);
});

document.getElementById("btn2").addEventListener("click", function () {
  showContent(2);
});

document.getElementById("btn3").addEventListener("click", function () {
  showContent(3);
});

document.getElementById("btn4").addEventListener("click", function () {
  showContent(4);
});

document.addEventListener("click", function (event) {
  const clickedButton = event.target.closest("button"); // 取得點擊的按鈕

  if (clickedButton) {
    // 如果點擊發生在按鈕上，更新選擇的按鈕並修改顏色
    const buttonId = clickedButton.id;
    selectedButton = parseInt(buttonId.replace("btn", ""));
    updateButtonColors();
  } else if (!event.target.matches(".content")) {
    // 如果點擊發生在空白處且選擇的按鈕不是 btn1，將顏色設為 "burlywood"
    if (selectedButton !== 1) {
      html.style.color = "burlywood";
    }
  }
});

function showContent(Num) {
  selectedButton = Num; // 更新選擇的按鈕編號
  updateButtonColors();

  let contents = document.getElementsByClassName("content");

  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  let selectedContents = document.getElementsByClassName(
    "content note_right_content_" + Num
  );

  for (let j = 0; j < selectedContents.length; j++) {
    selectedContents[j].style.display = "block";
  }
}

function updateButtonColors() {
  // 將所有按鈕的顏色設為 "burlywood"
//   document.getElementById("btn1").style.color = "burlywood";
//   document.getElementById("btn2").style.color = "burlywood";
//   document.getElementById("btn3").style.color = "burlywood";
//   document.getElementById("btn4").style.color = "burlywood";

  // 迴圈寫法
  for (let i = 1; i <= 4; i++) {
    document.getElementById("btn" + i).style.color = "burlywood";
  }

  // 將選中按鈕的顏色設為 "#ffd700"
  document.getElementById("btn" + selectedButton).style.color = "#ffd700";
}
