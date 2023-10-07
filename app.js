'use strict';

// array of objects
let arrOfObject =[];  
// Constructors
function Student(id,name = undefined, date= undefined , gender= undefined , phoneNumber= undefined,grade= undefined) {
    this.id =id;
    this.name = name;
    this.date = date;
    this.gender = "gender";
    this.phoneNumber = phoneNumber;
    this.grade = grade;
    this.displaydata = function () {
      console.log(`id:${this.id} Hi! I'm ${this.name} date:${this.date} gender:${this.gender} phoneNumber:${this.phoneNumber} grade:${this.grade}.`);
    };
  }


  function addData(form,id){
    let obj =new Student(id);
    obj.name = form.name.value ;
    obj.date = form.date.value ;
    obj.gender = form.gender.value;
    obj.phoneNumber =  form.phoneNumber.value;
    obj.grade =  form.grade.value ;
    obj.displaydata();
    
    return obj;
    
}




function displayRowInTable(arr ,id){
    let table =document.querySelector("table tbody");
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${arr[id].name}</td>
    <td>${arr[id].date}</td>
    <td>${arr[id].gender}</td>
    <td>${arr[id].phoneNumber}</td>
    <td>${arr[id].grade}</td> `

    table.appendChild(newRow);
    

}


function displayAllDataInTable(arr ,lenOfArr){
    for(let i=0;i<lenOfArr ; i++){
        displayRowInTable(arr,i);
    }

}

function dispalyCard(arr,id){
    let table =document.querySelector("#cards");
    const newRow = document.createElement("div");
    newRow.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="image/boy.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Name : ${arr[id].name} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">date: ${arr[id].date}</li>
          <li class="list-group-item">Gender: ${arr[id].gender}</li>
          <li class="list-group-item">Phone Number : ${arr[id].phoneNumber}</li>
          <li class="list-group-item">Grade : ${arr[id].grade}</li>
        </ul>
      </div>
    `;
  
    table.appendChild(newRow);
  
}

function dispalyAllCards(arr ,lenOfArr){
    for(let i=0;i<lenOfArr ; i++){
        dispalyCard(arr,i);
    }
}





let form1=  document.getElementById("form1");
form1.add.addEventListener("click", function(event){
    event.preventDefault();
    console.log(localStorage.length);
    // To facilitate the Manipulation or  for data I used id and id the same name of key in local storge   
    // I am JSON  now because I have problem when I am save in local storage the type of object convert to String use : console.log(typeof(localStorage["data"]));

    let id = arrOfObject.length;
    let objOfData = addData(form1,id)
    arrOfObject.push(objOfData);
    let saveData = JSON.stringify(arrOfObject);
    console.log(saveData);
    window.localStorage.setItem("Studens",saveData);
    displayRowInTable(arrOfObject,id);
    dispalyCard(arrOfObject,id);

});



let getData = localStorage.getItem("Studens");
let dataParsed = JSON.parse(getData);
displayAllDataInTable(dataParsed,dataParsed.length);
dispalyAllCards(dataParsed,dataParsed.length);

