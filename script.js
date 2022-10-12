const todoInput = document.getElementById("todoinput");
const addButton = document.getElementById("addbutton");
const todoContainer = document.getElementById("todocontainer");

let myArray = [];

const createTodoItem = (e) => {
  e.preventDefault();
  myArray.push({
    text: todoInput.value,
    id: Date.now()
  });
  showItems();
}

const showItems = () => {
  todoContainer.innerHTML = "";
  myArray.forEach(item => {
    const itemText = document.createElement("input");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const arrayContainer = document.createElement("div");
    
    itemText.value = item.text;
    itemText.classList.add("border_none");
    itemText.classList.add("outline");
    itemText.readOnly = true;
    arrayContainer.id = item.id;
    deleteButton.innerText = "delete";
    editButton.innerText = "Edit";
    
    arrayContainer.appendChild(deleteButton);
    arrayContainer.appendChild(editButton);
    arrayContainer.appendChild(itemText);
    todoContainer.appendChild(arrayContainer);

    deleteButton.addEventListener("click", () => {
      deleteThisArray(item.id);
    });
    editButton.addEventListener("click", (e) =>{
      editThisArray(item.id, itemText, e);
    });

  });

};

const deleteThisArray = (id) =>{
  myArray = myArray.filter(item =>{
    console.log('id :>> ', id);
    console.log('item.id :>> ', item.id);
    return id !== item.id;
  });
  showItems();
};

const editThisArray = (id, itemText, e) =>{
    if(e.target.innerText === "Edit"){
    e.target.innerText = "Update";
    itemText.readOnly = false;
    itemText.focus();
    itemText.classList.add("background_color");
    itemText.classList.remove("border_none");
  }else{
    e.target.innerText = "Edit";
    itemText.readOnly = true;
    itemText.classList.remove("background_color");
    itemText.classList.add("border_none");
    
  }
  
};

addButton.addEventListener("click", createTodoItem);
