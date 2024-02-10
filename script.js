// var allStudents = []
// function submit() {
//     var firstname = document.getElementById('firstname').value
//     var lastname = document.getElementById('lastname').value
//     var mailphone = document.getElementById('mailphone').value
//     var password = document.getElementById('password').value

//     if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
//         alert("haba, haba, you no dey see")
//     } else {
//     }
// }

// var studentObj = {firstname,lastname,mailphone,password}
// allStudents.push(studentObj)
// console.log(allStudents);

// document.getElementById('firstname').value = ''
// document.getElementById('lastname').value = ''
// document.getElementById('mailphone').value = ''
// document.getElementById('password').value = ''
var allStudents = []
function submit() {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var mailphone = document.getElementById('mailphone').value
    var password = document.getElementById('password').value
    if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
        emptyErrorMessage.style.display = 'block'
        setTimeout(() => {
            emptyErrorMessage.style.display = 'none'
        }, 5000);
    } else {
        var studentObj = {
            firstname,
            lastname,
           mailphone,
        //    password: password.value
        }
        allStudents.push(studentObj)
            successMessage.style.display = 'block'
          
            setTimeout(()=>{
                successMessage.style.display = 'none'
                
            }, 3000)
            
        console.log(allStudents);
        
        displayCart()
    
        document.getElementById('firstname').value = ''
        document.getElementById('lastname').value = ''
        document.getElementById('mailphone').value = ''
        document.getElementById('password').value = ''
    }

}
function displayCart() {
    disp = ''
    disp +=`<tr>
    <th>S/N</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email/Phone No</th>
    <th>Action</th>
    </tr>`

               for(i = 0; i < allStudents.length; i++){
        // var element = studentObj[i]
         disp +=  `<tr>
        <td>${i + 1}</td> 
        <td>${allStudents[i].firstname}</td> 
        <td>${allStudents[i].lastname}</td> 
        <td>${allStudents[i].mailphone}</td> 
        <td><button class = "btn btn-danger btn-sm" onclick="deleteUser(${i})">Delete</button>
        <button  class="btn btn-warning btn-sm" onclick="editUser(${i}")>Edit</button></td>
        </tr>
        `
        document.getElementById('show').innerHTML = disp;
    }
    }
    function deleteUser(userIndex){
        allStudents.splice(userIndex,1)
        displayCart()
       
       }

    function editUser(userIndex){
       editDiv.innerHTML = `
       <div>
       <input type="text" class="col-3 form-control shadow-none mt-2" placeholder="firstname" id="editfn">
       <input type="text" class="col-3 form-control shadow-none mt-2" placeholder="lastname" id="editln">
       <input type="text" class="col-3 form-control shadow-none mt-2" placeholder="email" id="editem">
       <button onclick="updateDtails(${userIndex})" class=" mt-2 mb-2 col-12 btn btn-primary btn-sm">Update Details</button>
       </div>
       `
     //   <input type="text" class="col-3 form-control shadow-none mt-2" placeholder="password" id="editps">
       editfn.value = allStudents[userIndex].firstname
       editln.value = allStudents[userIndex].lastname
       editem.value = allStudents[userIndex].mailphone
     //   editps.value = allStudents[userIndex].password
       

    }

    function updateDtails(index){
       var newDetails = {
       firstname : editfn.value,
       lastname : editln.value,
       email : editem.value,
     //   password : editps.value
      }
       allStudents.splice(index,1,newDetails)
       console.log(allStudents)
       displayStudents()
       editDiv.innerHTML = ""  
      
    }

    function deleteAll(){
       allStudents.splice(0)
       console.log(allStudents)
       displayStudents()
    }
