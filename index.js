// 功能：選擇期間的下拉選單是否顯示
// 抓取圖標元素
let menuTrigger = document.querySelector(".menu-trigger");
// 抓取下拉式選單
let periodSelect = document.querySelector(".period-select");
// 抓取要改變的圖標
let icon = menuTrigger.querySelector('i');

// 監聽點擊「選擇期間」圖標按鈕
menuTrigger.addEventListener("click", function () {


  // 出現下拉式選單
  if (periodSelect.style.display === "none") {
    periodSelect.style.display = "block";
    // 切換圖標樣式
    icon.classList.remove("fa-caret-right");
    icon.classList.add("fa-caret-down");
  } else {
    periodSelect.style.display = "none";
    icon.classList.remove("fa-caret-down");
    icon.classList.add("fa-caret-right");
  }
});
