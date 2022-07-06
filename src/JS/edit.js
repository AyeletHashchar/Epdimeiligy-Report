let patientId;
let reports = [];

function getReportsById() {
  return new Promise((resolve, reject) => {
    fetch("https://localhost:44391/api/patient/" + patientId, {
      method: "GET",
      headers: { "content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => (reports = data))
      .then(resolve)
      .catch((err) => reject(err));
  });
}

function resetPatientId() {
  patientId = document.getElementById("patientId").value;
  displayReports();
}

function deleteItem(id) {
  reports.forEach((item, index) => {
    if (item.id == id) {
      delete reports[index];
      return;
    }
  });
  displayReports();
}

function getTbodyContent() {
  let tbodyContent = "";
  let rowCounter = 0;
  reports.forEach((element) => {
    tbodyContent += `<tr>
                <th scope="row">${rowCounter++}</th>
                <td>${element.startDate}</td>
                <td>${element.endDate}</td>
                <td>@${element.city}</td>
                <td>@${element.location}</td>
                <td>
                    <button type="button" class="close" aria-label="Close" onClick="deleteItem(${
                      element.id
                    })">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </tr>`;
  });
  return tbodyContent;
}

function displayReports() {
  getReportsById()
    .then(() => {
      let tbodyContent = getTbodyContent();
      document.getElementById("reportsList").innerHTML = tbodyContent;
    })
    .catch((err) => console.error("ERR: I'm in catch. " + err));
}

//enters null ???
function AddLocation() {
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let city = document.getElementById("city").value;
  let location = document.getElementById("location").value;
  let newReport = new Report(startDate, endDate, city, location);

  fetch("https://localhost:44391/api/patient/" + patientId, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(newReport),
  })
    .then((res) => console.log(res))
    .then(() => displayReports())
    .catch((err) => {
      console.error("ERR: I'm in catch: " + err);
    });

  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("city").value = "";
  document.getElementById("location").value = "";
}
