function handleSearch(event) {
  event.preventDefault();
  const searchTerm = event.target[0].value;

  // if (searchTerm.includes("吳秋鳳")) {
  //   window.location.assign("wu-chiu-feng/index.html");
  // } else if (searchTerm.includes("包孫揚")) {
  //   window.location.assign("bao-sun-yang.html");
  // } else
  if (searchTerm.includes("撫遠街爆炸案")) {
    window.location.assign("explode.html");
  } else if (searchTerm.includes("理財老師龔淑貞")) {
    window.location.assign("gong-shu-zhen.html");
  }
}

function handleReSearch(event) {
  event.preventDefault();

  const searchTerm = event.target[0].value;

  if (searchTerm.includes("瓦斯保險")) {
    window.location.assign("gas-insurance.html");
  }
}

function navigateTo(event, url) {
  event.preventDefault();
  window.location.assign(url);
}

function handleClearInput() {
  document.getElementById("result-input").value = "";
}

function backToHome() {
  window.location.assign("index.html");
}
