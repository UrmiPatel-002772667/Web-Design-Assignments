const table = document.getElementById("myTable");

const checkedMarkRows = table.getElementsByTagName("input");
landingPage();
function displayUserDetails() {
  const fullName = 'Urmi Patel'; 
  const nuid = '002772667'; // Replace with dynamic data
  document.getElementById('user-details').textContent = `Full Name: ${fullName}, NUID: ${nuid}`;
}
function landingPage() {
  var count = 0;
  let submitActionButton = document.getElementById("button");
  for (var i = 0; i < checkedMarkRows.length; i++) {
    var selectedRow = checkedMarkRows[i].parentNode.parentNode;
    if (!checkedMarkRows[i].checked) {
      count++;
      selectedRow.querySelectorAll("td")[8].classList.add("columnHide");
      selectedRow.querySelectorAll("td")[9].classList.add("columnHide");
    }
  }

  if (checkedMarkRows.length == count) {
    submitActionButton.style.backgroundColor = "gray";
    submitActionButton.style.border = "";
    submitActionButton.disabled = true;
    document
      .querySelectorAll("tr")[0]
      .querySelectorAll("th")[8]
      .classList.add("columnHide");
    document
      .querySelectorAll("tr")[0]
      .querySelectorAll("th")[9]
      .classList.add("columnHide");
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

function nextRowAddition() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea");

  row.innerHTML =
    '<td colspan="8"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  checkRows();
  landingPage();
}

function checkRows() {
  let countRows = 0;
  if (checkedMarkRows && checkedMarkRows.length > 0) {
    for (let i = 0; i < checkedMarkRows.length; i++) {
      const row = checkedMarkRows[i].parentNode.parentNode;

      checkedMarkRows[i].addEventListener("click", () => {
        if (checkedMarkRows[i].checked) {
          countRows++;
          row.style.backgroundColor = "yellow";
          row.lastElementChild.innerHTML =
            "<td><button onClick='editRow(this)'>Edit</button></td>";
          row.lastElementChild.previousElementSibling.innerHTML =
            "<td><button onClick='deleteRow(this)'>Delete</button></td>";
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
          row.lastElementChild.innerHTML = "";
          row.lastElementChild.previousElementSibling.innerHTML = "";
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
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert("Row Deleted successfully!");
  landingPage();
  checkRows();
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
  const message = `Student ${studentNumber} data updated successfully`;
  alert(message);
  closeEditModal();
}

let selectedRow = "closed";

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
  const deleteBtn1 = row.insertCell(8);
  const editBtn2 = row.insertCell(9);

  checkboxNew.innerHTML = '<td><input type="checkbox" /><br /><br /><img src="downarrow.png" width="25px" /></td>';
  checkboxNew.querySelector('img').addEventListener('click', () => rowSelected(checkboxNew.querySelector('img')));
  student.innerHTML = `Student ${Math.ceil(countRows / 2)}`;

  advisor.innerHTML = `Teacher ${Math.ceil(countRows / 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";

  try {
    setTimeout(() => {
      alert(
        `Student Added Successfully with row number: ${Math.ceil(
          countRows / 2
        )}`
      );
    }, 100);
  } catch (error) {
    alert("Something went wrong!");
  }

  checkRows();
  nextRowAddition();
  landingPage();
}