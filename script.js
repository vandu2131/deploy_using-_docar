
function addRow() {
  const table = document.getElementById("courseTable").getElementsByTagName('tbody')[0];
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td><input type="text" class="form-control" name="course[]" placeholder="Course" /></td>
    <td><input type="text" class="form-control" name="level[]" placeholder="Level" /></td>
    <td><input type="text" class="form-control" name="language[]" placeholder="Language" /></td>
    <td><input type="date" class="form-control" name="startDate[]" /></td>
  `;

  table.appendChild(newRow);
}
