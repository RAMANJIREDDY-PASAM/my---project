var selectedrow = null;
var inputDatas = [];
function onFormSubmit(e){
  event.preventDefault();
  var formData = readFormData();
  if(selectedrow === null){
      insertNewRecord(formData);
  }
else{
   updateRecord(formData);
}
resetForm();
inputDatas.push(formData);
sessionStorage.setItem("data", JSON.stringify(inputDatas));

}

function readFormData(){
    var formdata = {};
    formdata["Moviename"] = document.getElementById("Moviename").value;
    formdata["Moviecast"] = document.getElementById("Moviecast").value;
    formdata["Rating"] = document.getElementById("Rating").value;
    formdata["Movieganre"] = document.getElementById("Movieganre").value;
    formdata["Description"] = document.getElementById("Description").value;
    return formdata;
}

// insert the data
function insertNewRecord(data){
     
sessionStorage.getItem("lastname");
 var table = document.getElementById("Movietable").getElementsByTagName('tbody')[0];
 var newRow = table.insertRow(table.length);
 var Cell1 = newRow.insertCell(0);
     Cell1.innerHTML = data.Moviename;

var Cell2 = newRow.insertCell(1);
     Cell2.innerHTML = data.Moviecast;     
var Cell3 = newRow.insertCell(2);
     Cell3.innerHTML = data.Rating;   
var Cell4 = newRow.insertCell(3);
     Cell4.innerHTML = data.Movieganre; 
var Cell5 = newRow.insertCell(4);
     Cell5.innerHTML = data.Description; 
var Cell6 = newRow.insertCell(5);
     Cell6.innerHTML = `<button onClick = "onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>`

}

//edit the data & to delete the data

function onEdit(td){
    selectedrow = td.parentElement.parentElement;
    document.getElementById('Moviename').value = selectedrow.cells[0].innerHTML;
    document.getElementById('Moviecast').value = selectedrow.cells[1].innerHTML;
    document.getElementById('Rating').value = selectedrow.cells[2].innerHTML;
    document.getElementById('Movieganre').value = selectedrow.cells[3].innerHTML;
    document.getElementById('Description').value = selectedrow.cells[4].innerHTML;
}
function updateRecord(formData){
  selectedrow.cells[0].innerHTML = formData.Moviename;
  selectedrow.cells[1].innerHTML = formData.Moviecast;
  selectedrow.cells[2].innerHTML = formData.Rating;
  selectedrow.cells[3].innerHTML = formData.Movieganre;
  selectedrow.cells[4].innerHTML = formData.Description;
}

//delete the data

function onDelete(td){
    if(confirm("Do you want to Delete")){
     row = td.parentElement.parentElement;
     document.getElementById("Movietable").deleteRow(row.rowIndex);
    }
    resetForm();
}

//reset the data

function resetForm(){
  document.getElementById("Moviename").value = "";
  document.getElementById("Moviecast").value = "";
  document.getElementById("Rating").value = "";
  document.getElementById("Movieganre").value = "";
  document.getElementById("Description").value = "";
}