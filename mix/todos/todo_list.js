const listItems = document.querySelector("#list-items");
const ulList = document.createElement("ul");
let listId = 0;
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", () => {
  listId++;
  const addInput = document.querySelector("#add-input").value;

  if (addInput.trim() === "") {
    alert("Please, add a new task!");
  } else {
    ulList.innerHTML += `<li id="${listId}" class="list-item">
        <span class='list-item-span'>${addInput} </span>
        <button class="edit-btn">Edit</button>
        <button class='delete-btn'>Delete</button>
        </li>`;
    listItems.appendChild(ulList);
    document.querySelector("#add-input").value = "";

    // Delete btn
    const deleteBtn = document.querySelectorAll(".delete-btn");
    const editBtn = document.querySelectorAll(".edit-btn");

    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", (e) => {
        console.log(e.target.parentElement.remove());
      });
    }

    // Edit btn
    for (let i = 0; i < editBtn.length; i++) {
      editBtn[i].addEventListener("click", (e) => {
        const editBox = document.createElement("div");
        e.target.parentElement.appendChild(editBox);
        editBox.innerHTML = `
        <input type="text" class="update-input">
        <button class="update-btn">Update</button>`;

        // update btn event
        const updateBtn = document.querySelectorAll(".update-btn");

        for (let j = 0; j < updateBtn.length; j++) {
          updateBtn[j].addEventListener("click", () => {
            let updateInput = document.querySelectorAll('.update-input');
            for (let k = 0; k < updateInput.length; k++) {
              e.target.parentElement.innerHTML = `<li id="${listId}" class="list-item">
              <span>${updateInput[k].value} </span>
              <button class="edit-btn">Edit</button>
              <button class='delete-btn'>Delete</button>
              </li>`; 

            }


          });
        }
      });
    }
  }
});
