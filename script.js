
let btnColor = document.querySelectorAll("ul li");
let colorHolder = ["#ee5253", "#2e86de", "#10ac84", "#f368e0", "#ff9f43"];
let headerTxt = document.querySelector(".header span");
let inputTxt = document.querySelector(".inputitem");
let addBtn = document.querySelector(".additembtn");
let resultTxt = document.querySelector(".results");

let items = document.querySelectorAll(".results .item");

btnColor.forEach(function(items){
  items.addEventListener("click", function(){
    switch(items.className) {
      case "red":
        headerTxt.style.backgroundColor = "#ee5253";
        inputTxt.style.borderColor = "#ee5253";
        addBtn.style.backgroundColor = "#ee5253";
        break;
      case "yellow":
        headerTxt.style.backgroundColor = "#ff9f43";
        inputTxt.style.borderColor = "#ff9f43";
        addBtn.style.backgroundColor = "#ff9f43";
        break;
      case "green":
        headerTxt.style.backgroundColor = "#10ac84";
        inputTxt.style.borderColor = "#10ac84";
        addBtn.style.backgroundColor = "#10ac84";
        break;
      case "pink":
        headerTxt.style.backgroundColor = "#f368e0";
        inputTxt.style.borderColor = "#f368e0";
        addBtn.style.backgroundColor = "#f368e0";
        break;
      case "blue":
        headerTxt.style.backgroundColor = "#2e86de";
        inputTxt.style.borderColor = "#2e86de";
        addBtn.style.backgroundColor = "#2e86de";
        break;
      default:
        break;
    }
  });
});

function addBtnFunc() {
  let alertTxt = document.querySelector(".alert");
  alertTxt.innerText = "";
  alertTxt.style.opacity = "0";
  if(inputTxt.value === "") {
    alertTxt.style.opacity = "1";
    alertTxt.innerText = "Enter a Text";
    return;
  }

  resultTxt.insertAdjacentHTML("beforeend", '<p class="item"><i class="data">' + inputTxt.value +
                '</i><span class="edit">edit</span><span class="delete">del</span></p>');

  let resultItemDel = document.querySelectorAll(".results .delete");
  for (let i = 0; i < resultItemDel.length; i++) {
    resultItemDel[i].addEventListener("click", function(){
      let deleteItem = this.parentElement;
      deleteItem.style.display = "none";
    });
  }

  let itemList = document.querySelectorAll(".results .data");
  let resultItemEdit = document.querySelectorAll(".results .edit");
  let modalWindow = document.querySelector(".modal");
  let modalEditBtn = document.querySelector(".modalEditBtn");
  let modalCloseBtn = document.querySelector(".modalCloseBtn");
  let modalInput = document.querySelector(".modalInput");

  for (let i = 0; i < resultItemEdit.length; i++) {
    resultItemEdit[i].addEventListener("click", function(){
      modalWindow.style.display = "block";
      let editedItem = resultItemEdit[i].previousSibling;
      modalInput.value = editedItem.innerText;
      modalEditBtn.addEventListener("click", function(){
        editedItem.innerText = modalInput.value;
        modalWindow.style.display = "none";
        editedItem = "";
      });
      modalCloseBtn.addEventListener("click", function(){
        modalWindow.style.display = "none";
        editedItem = "";
      });
    });
  }

  for (let i = 0; i < itemList.length; i++) {
    itemList[i].addEventListener("click",function(){
        this.style.textDecoration = "line-through";
        this.parentElement.style.backgroundColor = "#888";
    });
  }
}
addBtn.addEventListener("click", addBtnFunc);
