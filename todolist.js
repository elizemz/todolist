let i;

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "") {
    alert("Task must not be empty.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let spanEdit = document.createElement("SPAN");
  let textEdit = document.createTextNode("✎");
  spanEdit.className = "edit";
  spanEdit.appendChild(textEdit);
  li.appendChild(spanEdit);

  let spanClose = document.createElement("SPAN");
  let textClose = document.createTextNode("\u00D7");
  spanClose.className = "close";
  spanClose.appendChild(textClose);
  li.appendChild(spanClose);

  for (i = 0; i < close.length; i++) {
    edit[i].onclick = function () {
      let div = this.parentElement;
      let textNode = div.firstChild;
      let newText = prompt("Edit task:", textNode.nodeValue.trim());
      if (newText !== null) {
        textNode.nodeValue = newText.trim();
      }
    };
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  //   function (ev) {
  //     if (ev.target.tagName === "LI") {
  //       ev.target.classList.toggle("checked");
  //     }
  //   },
  false
);

let nodeList = document.getElementsByTagName("LI");
for (i = 0; i < nodeList.length; i++) {
  let spanClose = document.createElement("SPAN");
  let textClose = document.createTextNode("×");
  spanClose.className = "close";
  spanClose.appendChild(textClose);
  nodeList[i].appendChild(spanClose);
}

let editList = document.getElementsByTagName("LI");
for (i = 0; i < nodeList.length; i++) {
  let spanEdit = document.createElement("SPAN");
  let textEdit = document.createTextNode("✎");
  spanEdit.className = "edit";
  spanEdit.appendChild(textEdit);
  nodeList[i].appendChild(spanEdit);
}

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let edit = document.getElementsByClassName("edit");
for (i = 0; i < close.length; i++) {
  edit[i].onclick = function () {
    let div = this.parentElement;
    let textNode = div.firstChild;
    let newText = prompt("Edit task:", textNode.nodeValue.trim());
    if (newText !== null) {
      textNode.nodeValue = newText.trim();
    }
  };
}
