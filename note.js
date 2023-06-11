//下載履歷
function downloadFile() {
  var link = document.createElement("a");
  link.href = "Resume.pdf"; // 檔案的相對路徑
  link.download = "Ken's Resume.pdf"; // 下載時的檔案名稱

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

// nav bar 滑動效果
let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0, 10px, 6px, -6px, white";
  }
});

//筆記分類
window.onload = function () {
  showContent(1);
};

btn1.addEventListener("click", function () {
  showContent(1);
});

btn2.addEventListener("click", function () {
  showContent(2);
});

btn3.addEventListener("click", function () {
  showContent(3);
});

btn4.addEventListener("click", function () {
  showContent(4);
});

function showContent(num) {
  // 重置所有按鈕的顏色
  btn1.style.color = "burlywood";
  btn2.style.color = "burlywood";
  btn3.style.color = "burlywood";
  btn4.style.color = "burlywood";

  // 更新目標按鈕的顏色
  const targetButton = document.getElementById(`btn${num}`);
  targetButton.style.color = "#ffd700";

  // 隱藏所有內容
  const contents = document.getElementsByClassName("content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  // 顯示目標內容
  const targetContent = document.getElementsByClassName(
    `content note_right_content_${num}`
  );
  for (let j = 0; j < targetContent.length; j++) {
    targetContent[j].style.display = "block";
  }
}
