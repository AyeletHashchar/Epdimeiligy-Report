var city;
let reports = data;
let isDescendingDateSort=false;

function resetCity(){
    city = document.getElementById("cityFilter").value.toLowerCase();
    displayTable();
}

function getTbodyContent(){
    let tbodyContent = ""; 
    let rowCounter=0;
    reports.forEach((element) => {
        if(city==null || city=="" || element.city.toLowerCase().includes(city))
        {
            tbodyContent +=
            `<tr>
                <th scope="row">${rowCounter++}</th>
                <td>${element.startDate} - ${element.endDate}</td>
                <td>@${element.location}, ${element.city}</td>
            </tr>`
        }
    });
    return tbodyContent
}

function displayTable(){
    let tbodyContent = getTbodyContent();
    document.getElementById("reportsList").innerHTML = tbodyContent;
}

function sortByDate(){
    if(isDescendingDateSort){
        reports.sort((a,b)=>(a.startDate > b.startDate? 1 : -1));
        isDescendingDateSort=false;
    }
    else{
        reports.sort((a,b)=>(a.startDate > b.startDate? -1 : 1));
        isDescendingDateSort=true;
    }
    displayTable();
}

displayTable();