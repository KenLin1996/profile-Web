// nav bar 滑動效果
let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0, 10px, 6px, -6px, white";
  }
});

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

//button效果
const animateButton = document.getElementById("animate-button");
const secondArea = document.querySelector(".second-area");

animateButton.addEventListener("click", () => {
  if (secondArea.style.height === "210px") {
    secondArea.style.height = "0";
    return;
  }
  secondArea.style.height = "210px";
});

//動畫控制
let isAnimating = false;

animateButton.addEventListener("click", function () {
  if (isAnimating) {
    animateButton.classList.remove("animated");
    isAnimating = false;
  } else {
    animateButton.classList.add("animated");
    isAnimating = true;
  }
});
