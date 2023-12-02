const textBox = document.querySelector(".textarea");
const createBtn = document.querySelector(".note-btn");
const deleteBtn = document.querySelector(".delete-btn");
const trashDelete = document.querySelector(".delete-icon");
const mainContainer = document.querySelector(".container");

// 🤖🤖change the deltee btn
function btncolor() {
  deleteBtn.classList.add("note-btn");
}
btncolor();

textBox.addEventListener("input", () => {
  const inputValue = textBox.value;
  localStorage.setItem("my1input", inputValue);

  if (inputValue.length > 8) {
    textBox.disabled = true;
    alert(
      "Textarea disabled! Input length should be 80 characters so if you create another notes."
    );
  } else {
    textBox.disabled = false;
  }
});

// 🤖the trash box function to check the condition and remove the content of the textarea
trashDelete.addEventListener("click", () => {
  let content = textBox.value;
  if (content) {
    alert(`are you sure to delete your NOTES`);
    textBox.value = "";
    console.log("Content cleared");
    localStorage.removeItem("my1input");
  } else {
    alert("Nothing to delete; content is empty");
  }
});

// 📢📢when the user load the browserthe data will not removed
window.onload = () => {
  let userData = localStorage.getItem("my1input");
  textBox.value = userData || "";
};

createBtn.addEventListener("click", () => {
  const mainTag = document.createElement("main");
  mainTag.classList.add("main");

  const nextTextarea = document.createElement("textarea");
  nextTextarea.classList.add("textarea");

  const deleteBox = document.createElement("i");
  deleteBox.classList.add("bx", "bxs-trash", "delete-icon");

  mainContainer.appendChild(mainTag);
  mainTag.appendChild(nextTextarea);
  mainTag.appendChild(deleteBox);

  deleteBox.addEventListener("click", () => {
    mainTag.remove();
    console.log(`${mainTag}`);
  });

  // Event Listeners
  deleteBtn.addEventListener("click", () => {
    mainTag.remove();
  });
});
