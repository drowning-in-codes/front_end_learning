const btn = document.querySelector(".btn"); //确认按钮
const input = document.querySelector(".color-select"); //输入框
const defineColor = document.querySelectorAll(".circle"); //自定义颜色
const defaultColor = document.querySelector(".normal");
// 获取或设置默认颜色
document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(["color"], function (result) {
    console.log("Value currently is " + result.color);
    //如果颜色不存在，则设置默认颜色
    if (!result.color) {
      const color = "#aeb9c5";
      chrome.storage.sync.set({ color }, function () {
        console.log("Value is set to " + color);
      });
      sendMessageToContentScript({ color }, (resp) => {
        defaultColor.classList.add("active");
      });
    } else {
      sendMessageToContentScript({ color: result.color }, (resp) => {
        const colorElement = document.querySelector(
          `[data-color=${result.color}]`
        );
        colorElement.classList.add("active");
      });
    }
  });
});

function sendMessageToContentScript(message, callback) {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tabs) {
      await chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        if (callback) callback(response);
      });
    }
  );
}

function clearSelection(selectedItem) {
  for (let i = 0; i < defineColor.length; i++) {
    if (defineColor[i] !== selectedItem) {
      defineColor[i].classList.remove("active");
    }
  }
}
btn.addEventListener("click", (e) => {
  clearSelection();
  const color = input.value;
  sendMessageToContentScript({ color, confirm: true }, (resp) => {
    console.log(resp);
    chrome.storage.sync.set({ color: color }, function () {
      console.log("Value is set to " + color);
    });
  });
});

defineColor.forEach((item) => {
  item.addEventListener("click", (e) => {
    const color = item.getAttribute("data-color");
    sendMessageToContentScript({ color: color }, (resp) => {
      console.log(resp);
      clearSelection(item);
      item.classList.toggle("active");
      chrome.storage.sync.set({ color: color }, function () {
        console.log("Value is set to " + color);
      });
    });
  });
});
