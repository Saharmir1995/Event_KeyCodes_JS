//Method 2

function showkeyCodes(e) {
  const insert = document.querySelector("#insert");
  insert.innerHTML = " ";

  const keycodes = {
    "e.key": e.key === " " ? "space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (let key in keycodes) {
    const div = document.createElement("div");
    const small = document.createElement("small");
    div.className = "key";

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keycodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener("keydown", showkeyCodes);
