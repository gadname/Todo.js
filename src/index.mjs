import "./styles.css";
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //削除ボタンのタグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(div); // ここでエラーが発生していた部分を修正
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
