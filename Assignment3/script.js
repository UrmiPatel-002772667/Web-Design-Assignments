const table = document.getElementById("myTable");
const checkedMarkRows = table.getElementsByTagName("input");
let lastBudget = 34567;
let selectedRow = "closed";

landingPage();
function displayUserDetails() {
  const fullName = 'Urmi Patel'; 
  const nuid = '002772667'; 
  document.getElementById('user-details').textContent = `Full Name: ${fullName}, NUID: ${nuid}`;
}
function landingPage() {
  var count = 0;
  let submitActionButton = document.getElementById("button");
  for (var i = 0; i < checkedMarkRows.length; i++) {
    var selectedRow = checkedMarkRows[i].parentNode.parentNode;
    if (!checkedMarkRows[i].checked) {
      count++;
      hideColumn(selectedRow, 8);
      hideColumn(selectedRow, 9);
    }
  }

  if (checkedMarkRows.length == count) {
    submitActionButton.style.backgroundColor = "gray";
    submitActionButton.style.border = "";
    submitActionButton.disabled = true;
    hideHeaderColumn(8);
    hideHeaderColumn(9);
  }
}

function hideColumn(row, index) {
  let cell = row.querySelectorAll("td")[index];
  if (cell) {
    cell.classList.add("columnHide");
  }
}

function hideHeaderColumn(index) {
  let headerRow = document.querySelectorAll("tr")[0];
  if (headerRow) {
    let header = headerRow.querySelectorAll("th")[index];
    if (header) {
      header.classList.add("columnHide");
    }
  }
}

function rowSelected(row) {
  const checkedMarkRow = row.parentNode.parentNode;
  const neighbourRow = checkedMarkRow.nextElementSibling;
  if (selectedRow == "closed") {
    neighbourRow.style.display = "table-row";
    selectedRow = "expand";
  } else {
    neighbourRow.style.display = "none";
    selectedRow = "closed";
  }
}

checkRows();

function checkRows() {
  let countRows = 0;
  if (checkedMarkRows && checkedMarkRows.length > 0) {
    for (let i = 0; i < checkedMarkRows.length; i++) {
      checkedMarkRows[i].addEventListener("click", () => {
        const row = checkedMarkRows[i].parentNode.parentNode;

        // Correctly identify the indices for 'Delete' and 'Edit' columns
        const deleteColumnIndex = row.cells.length - 2; // Second-last column
        const editColumnIndex = row.cells.length - 1; // Last column

        if (checkedMarkRows[i].checked) {
          countRows++;
          row.style.backgroundColor = "yellow";

          // Ensure we're targeting the cells correctly
          row.cells[deleteColumnIndex].innerHTML = "<button onclick='deleteRow(this)'>Delete</button>";
          row.cells[editColumnIndex].innerHTML = "<button onclick='editRow(this)'>Edit</button>";

          document
            .querySelectorAll("tr")[0]
            .querySelectorAll("th")[8]
            .classList.remove("columnHide");
          document
            .querySelectorAll("tr")[0]
            .querySelectorAll("th")[9]
            .classList.remove("columnHide");
          row.querySelectorAll("td")[8].classList.remove("columnHide");
          row.querySelectorAll("td")[9].classList.remove("columnHide");
          let submitBtn = document.getElementById("button");
          submitBtn.style.backgroundColor = "orange";
          submitBtn.style.border = "2px solid orange";
          submitBtn.disabled = false;
        } else {
          countRows--;
          row.style.backgroundColor = "white";
          row.cells[deleteColumnIndex].innerHTML = "";
          row.cells[editColumnIndex].innerHTML = "";
          row.querySelectorAll("td")[8].classList.add("columnHide");
          row.querySelectorAll("td")[9].classList.add("columnHide");
          if (countRows == 0) {
            document
              .querySelectorAll("tr")[0]
              .querySelectorAll("th")[8]
              .classList.add("columnHide");
            document
              .querySelectorAll("tr")[0]
              .querySelectorAll("th")[9]
              .classList.add("columnHide");
            let submitBtn = document.getElementById("button");
            submitBtn.style.backgroundColor = "gray";
            submitBtn.style.border = "";
            submitBtn.style.cursor = "initial";
            submitBtn.disabled = true;
          } else {
            let submitBtn = document.getElementById("button");
            submitBtn.style.backgroundColor = "orange";
            submitBtn.style.border = "2px solid orange";
            submitBtn.disabled = false;
          }
        }
      });
    }
  }
}

function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  const row = r.closest('tr');
  const studentNumberCell = row.querySelector('td:nth-child(2)');
  const studentNumber = studentNumberCell.textContent.match(/\d+/)[0];
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`Student ${studentNumber} Record Deleted successfully`);
  checkRows();
  landingPage();

}

function editRow(r) {
  const row = r.closest('tr');
  const studentNumberCell = row.querySelector('td:nth-child(2)');
  const studentNumber = studentNumberCell.textContent.match(/\d+/)[0]; // Extract the student number
  const studentDetails = row.querySelectorAll('td:not(.edit-cell)');
  const modalTitle = document.getElementById('editModalTitle');
  const modalContent = document.getElementById('editModalContent');

  modalTitle.textContent = `Edit details of Student ${studentNumber}`;
  modalContent.innerHTML = '';
  studentDetails.forEach((detail) => {
    modalContent.innerHTML += `<p>${detail.textContent}</p>`;
  });

  document.getElementById('editModal').style.display = 'block';
  checkRows();
}

// Function to close the edit modal
function closeEditModal() {
  document.getElementById('editModal').style.display = 'none';
}

// Function to update student details (show a message)
function updateStudentDetails() {
  const modalTitle = document.getElementById('editModalTitle');
  const studentNumber = modalTitle.textContent.match(/\d+/)[0]; // Extract the student number
  alert(`Student ${studentNumber} data updated successfully`);
  closeEditModal();
}


function addStudentRow() {
  const row = table.insertRow(table.rows.length);
  const countRows = table.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  lastBudget += 11111;// Adjust for the header row

  checkboxNew.innerHTML = '<td><input type="checkbox" /><br /><br /><img src="down.png" width="25px" /></td>';
  checkboxNew.querySelector('img').addEventListener('click', () => rowSelected(checkboxNew.querySelector('img')));
  student.innerHTML = `Student ${Math.ceil(countRows / 2)}`;

  advisor.innerHTML = `Teacher ${Math.ceil(countRows / 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = `${lastBudget.toString().padStart(5, '0')}`;
  percentage.innerHTML = "100%";

  try {
    setTimeout(() => {
      alert(
        `Student ${Math.ceil(countRows / 2)} Record Added Successfully`
      );
    }, 100);
  } catch (error) {
    alert("Something went wrong!");
  }
  checkRows();
  addDetails();
  landingPage();


}
function addDetails(){
  const row = table.insertRow(table.rows.length);

  if (row) {
    row.classList.add("dropDownTextArea");
    const cell = row.insertCell(0);
    if (cell) {
      cell.colSpan = 8;
      cell.innerHTML = `
        <td colspan="8">
        Advisor:<br /><br />
        Award Details<br />
        Semester 1-2014(TA)<br />
        Budget Number: <br />
        Tuition Number: <br />
        Comments:<br /><br /><br />
        Award Status:<br /><br /><br />
        </td>
      `;
    }
  }
  checkRows();
  landingPage();

}