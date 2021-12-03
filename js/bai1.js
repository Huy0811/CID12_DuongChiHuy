let createTable = document.getElementById("create");
let insertRow = document.getElementById("board");
let insertColumn = document.getElementsByTagName("TR");

createTable.addEventListener("click", () => {
  let column = parseInt(document.getElementById("column").value);
  let row = parseInt(document.getElementById("row").value);
  for (let i = 0; i < row; i++) {
    insertRow.innerHTML += `<tr></tr>`;
    for (let e = 0; e < column; e++) {
      insertColumn[i].innerHTML += `<td> </td>`;
    }
  }
});
