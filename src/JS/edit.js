let patientId;
let reports = data;
function resetPatientId(){
    patientId = document.getElementById("patientId").value;
    displayReports(data);
}

function deleteItem(id){
    reports.forEach((item, index) => {
        if(item.id==id){
            delete reports[index];
            return;
        }  
    });
    displayReports();
}

function getTbodyContent(patientId){
    let tbodyContent = ""; 
    let rowCounter = 0;
    reports.forEach((element) => {
        if(element.patientId==patientId)
        {
            tbodyContent +=
            `<tr>
                <th scope="row">${rowCounter++}</th>
                <td>${element.startDate}</td>
                <td>${element.endDate}</td>
                <td>@${element.city}</td>
                <td>@${element.location}</td>
                <td>
                    <button type="button" class="close" aria-label="Close" onClick="deleteItem(${element.id})">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </tr>`
        }
    });
    return tbodyContent
}

function displayReports() {
    let tbodyContent = getTbodyContent(patientId);
    document.getElementById("reportsList").innerHTML = tbodyContent;
}

function AddLocation(){
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let city = document.getElementById("city").value;
    let location = document.getElementById("location").value;
    let newReport = new Report(startDate, endDate, city, location, patientId);
    data.push(newReport);
    displayReports();
}
