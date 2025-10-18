function handleSearch(event) {
  event.preventDefault();
  const searchTerm = event.target[0].value;

  if (searchTerm.includes("吳秋鳳")) {
    window.location.assign("wu-chiu-feng/index.html");
  } else if (searchTerm.includes("包孫揚")) {
    window.location.assign("bao-sun-yang.html");
  }
}

function navigateTo(event, url) {
  event.preventDefault();
  window.location.assign(url);
}

function goToOldVersion(event) {
  // event.preventDefault();
  window.location.assign("o/index.html");
}

function handleOldSearch(event) {
  event.preventDefault();
  console.log(event);

  // window.location.assign("wu-chiu-feng/index.html");
}
