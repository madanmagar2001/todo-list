const input = document.querySelector(".input-value");
const submit = document.querySelector(".submit")
const list = document.querySelector(".lists");

function addItem(){
  const inputValue = input.value;
  if (!inputValue == "") {
    let item = document.createElement("div");
    item.classList.add("item");

    let todo_list = document.createElement("div");
    todo_list.classList.add("todo-list");

    let checkbox = document.createElement("input");
    checkbox.type = "radio";
    checkbox.classList.add("checkbox")
    todo_list.appendChild(checkbox);

    let content = document.createElement("input");
    content.setAttribute("readonly","readonly")
    content.classList.add("content-input");
    content.value = inputValue;
    todo_list.appendChild(content);
    item.appendChild(todo_list);

    let btn = document.createElement("div");
    btn.classList.add("btns");

    let edBtn = document.createElement("button");
    edBtn.innerText = "Edit";
    edBtn.classList.add("ed-btn");
    btn.appendChild(edBtn);
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("del-btn");
    btn.appendChild(delBtn);
    item.appendChild(btn);
    list.appendChild(item);
    input.value = "";
    checkbox.addEventListener("click", () => {
      edBtn.style.pointerEvents = "none"
    })

    edBtn.addEventListener("click",() => {
      if (edBtn.innerText == "Edit") {
        content.removeAttribute("readonly")
        content.focus()
        content.style.cursor = "default"
        edBtn.innerText = "Save";
        submit.style.pointerEvents = "none"
      } else {
        content.style.cursor = "pointer"
        edBtn.innerText = "Edit";
      }

    })

    delBtn.addEventListener("click",() => {
      list.removeChild(item)
    })
  }
}

submit.addEventListener("click",() => {
  addItem()
  input.blur()
})

input.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addItem()
    input.blur()
  }
})