import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createImcompleteTodo(inputText);
};

const createImcompleteTodo = (todo) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-element";
  p.innerText = todo;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const todoText = backButton.previousElementSibling.innerText;
      createImcompleteTodo(todoText);
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("imcomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
